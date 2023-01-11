import { useEffect, useState } from "react";
import gi from "../../../assets/increase-color.png";
import MapCard from "../../../components/cards/MapCard";
import TicketList from "../../../components/lists/TicketList";
import PageTitle from "../../../components/wrappers/PageTitle";
import { IBugReport } from "../../../models/IBugReport";
import IErrends from "../../../models/IErrends";
import IFeatureRequest from "../../../models/IFeatureRequest";
import IGeneralImprovements from "../../../models/IGeneralImprovements";
import { IGetParts, IShowParts } from "../../../models/IPart";

interface IProp {
  parts: IGetParts[];
  errend: IErrends;
  patchList(
    assignedTo: string,
    status: string,
    errandId: string,
    endpoint: string,
    section: string,
    approved: boolean,
    sectionList: IShowParts
  ): void;
  deleteRequest(
    errend: IFeatureRequest | IGeneralImprovements | IBugReport,
    endpoint: string
  ): void;
  setRenderPage: React.Dispatch<
    React.SetStateAction<{
      render: string;
    }>
  >;
  showRequests(requests: IShowParts): void;
}

const GeneralImprovements = (props: IProp) => {
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
        <MapCard
          errend={props.errend.generalImprovementSections}
          showRequests={props.showRequests}
        />
      </div>
    </div>
  );
};

export default GeneralImprovements;
