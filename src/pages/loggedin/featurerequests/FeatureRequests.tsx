import LoggedinMain from "../../../components/pages/LoggedinMain";
import { IParts } from "../../../models/IPart";
import fr from "../../../assets/newFeature.png";
import PageTitle from "../../../components/wrappers/PageTitle";
import TicketList from "../../../components/lists/TicketList";
import IErrends from "../../../models/IErrends";
import IFeatureRequest from "../../../models/IFeatureRequest";

interface IProp {
  parts: IParts[];
  errend: IErrends;
  AssignedFr(email: string, errandId: string): void;
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
            AssignedFr={props.AssignedFr}
          />
        </div>
      </div>
    </>
  );
};

export default FeatureRequests;
