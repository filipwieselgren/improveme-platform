import LoggedinMain from "../../../components/pages/LoggedinMain";
import { IGetParts, IParts } from "../../../models/IPart";
import fr from "../../../assets/newFeature.png";
import PageTitle from "../../../components/wrappers/PageTitle";
import TicketList from "../../../components/lists/TicketList";
import IErrends from "../../../models/IErrends";
import IFeatureRequest from "../../../models/IFeatureRequest";
import { useEffect, useState } from "react";
import MapCard from "../../../components/cards/MapCard";

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
  deleteRequest(id: string, endpoint: string): void;
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
            parts={props.parts}
            errend={props.errend.getFeatureRequests}
          />
        </div>
      </div>
    </>
  );
};

export default FeatureRequests;
