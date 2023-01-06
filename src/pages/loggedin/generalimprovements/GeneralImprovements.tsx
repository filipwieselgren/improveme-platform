import { useState } from "react";
import gi from "../../../assets/increase-color.png";
import TicketList from "../../../components/lists/TicketList";
import PageTitle from "../../../components/wrappers/PageTitle";
import IErrends from "../../../models/IErrends";
import IFeatureRequest from "../../../models/IFeatureRequest";

interface IProp {
  errend: IErrends;
  patchList(
    assignedTo: string,
    status: string,
    errandId: string,
    endpoint: string
  ): void;
  deleteRequest(id: string, endpoint: string): void;
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
      </div>
    </div>
  );
};

export default GeneralImprovements;
