import { useState } from "react";
import gi from "../../../assets/increase-color.png";
import TicketList from "../../../components/lists/TicketList";
import PageTitle from "../../../components/wrappers/PageTitle";
import IErrends from "../../../models/IErrends";
import IFeatureRequest from "../../../models/IFeatureRequest";

interface IProp {
  errend: IErrends;
  patchList(email: string, errandId: string, endpoint: string): void;
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
        />
      </div>
    </div>
  );
};

export default GeneralImprovements;
