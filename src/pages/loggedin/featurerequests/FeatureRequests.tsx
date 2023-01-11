import LoggedinMain from "../../../components/pages/LoggedinMain";
import { IGetParts, IParts, IShowParts } from "../../../models/IPart";
import fr from "../../../assets/newFeature.png";
import PageTitle from "../../../components/wrappers/PageTitle";
import TicketList from "../../../components/lists/TicketList";
import IErrends from "../../../models/IErrends";
import IFeatureRequest from "../../../models/IFeatureRequest";
import { useEffect, useState } from "react";
import MapCard from "../../../components/cards/MapCard";
import { IBugReport } from "../../../models/IBugReport";
import IGeneralImprovements from "../../../models/IGeneralImprovements";

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

const FeatureRequests = (props: IProp) => {
  return (
    <>
      <div>
        <PageTitle text={"Feature Requests"} img={fr} />
        <div className="second-title-wrapper">
          <h4>Approved</h4>
          <TicketList
            errend={props.errend.getFeatureRequests}
            errendTxt={"Request"}
            patchList={props.patchList}
            endpoint={"featurerequest"}
            deleteRequest={props.deleteRequest}
          />
          <h4 className="unapproved-h4">Unapproved</h4>

          <MapCard
            errend={props.errend.featureRequestSections}
            showRequests={props.showRequests}
          />
        </div>
      </div>
    </>
  );
};

export default FeatureRequests;
