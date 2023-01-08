import { useEffect, useState } from "react";
import gi from "../../../assets/increase-color.png";
import MapCard from "../../../components/cards/MapCard";
import TicketList from "../../../components/lists/TicketList";
import PageTitle from "../../../components/wrappers/PageTitle";
import { IBugReport } from "../../../models/IBugReport";
import IErrends from "../../../models/IErrends";
import IFeatureRequest from "../../../models/IFeatureRequest";
import IGeneralImprovements from "../../../models/IGeneralImprovements";
import { IGetParts, showParts } from "../../../models/IPart";

interface IProp {
  parts: IGetParts[];
  errend: IErrends;
  patchList(
    assignedTo: string,
    status: string,
    errandId: string,
    endpoint: string,
    section: string
  ): void;
  deleteRequest(
    errend: IFeatureRequest | IGeneralImprovements | IBugReport,
    endpoint: string
  ): void;
}

const GeneralImprovements = (props: IProp) => {
  const [section, setSection] = useState<showParts[]>([
    {
      part: "",
      requests: [
        {
          _id: "",
          description: "",
          solvesWhat: "",
          part: "",
          email: "",
          approved: false,
          status: "",
          assignedTo: "",
        },
      ],
    },
  ]);

  useEffect(() => {
    groupByPart(props.errend.getGeneralImprovements);
  }, []);

  const groupByPart = (
    items: {
      _id: string;
      description: string;
      solvesWhat: string;
      part: string;
      email: string;
      approved: boolean;
      status: string;
      assignedTo: string;
    }[]
  ) => {
    const groups: showParts[] = [];

    items.forEach((item) => {
      const group = groups.find((g) => g.part === item.part);
      if (group) {
        group.requests.push(item);
      } else {
        groups.push({ part: item.part, requests: [item] });
      }
    });

    setSection(groups);
  };
  return (
    <div>
      <PageTitle text={"General Improvements"} img={gi} />
      <div className="second-title-wrapper">
        <h4>Approved</h4>
        <TicketList
          errend={props.errend.getGeneralImprovements}
          errendTxt={"Improvement"}
          patchList={props.patchList}
          endpoint={"generalimprovement"}
          deleteRequest={props.deleteRequest}
        />
        <h4 className="unapproved-h4">Unapproved</h4>
        <MapCard parts={section} errend={props.errend.getFeatureRequests} />
      </div>
    </div>
  );
};

export default GeneralImprovements;
