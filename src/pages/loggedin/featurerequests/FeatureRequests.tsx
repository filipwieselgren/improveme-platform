import LoggedinMain from "../../../components/pages/LoggedinMain";
import { IParts } from "../../../models/IPart";
import fr from "../../../assets/newFeature.png";
import PageTitle from "../../../components/wrappers/PageTitle";
import TicketList from "../../../components/lists/TicketList";
import IErrends from "../../../models/IErrends";
import IFeatureRequest from "../../../models/IFeatureRequest";
import { useEffect, useState } from "react";

interface IProp {
  parts: IParts[];
  errend: IErrends;
  patchList(
    assignedTo: string,
    status: string,
    errandId: string,
    endpoint: string
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
        </div>
      </div>
    </>
  );
};

export default FeatureRequests;
