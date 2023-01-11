import PageTitle from "../../../components/wrappers/PageTitle";
import br from "../../../assets/bug.png";
import TicketList from "../../../components/lists/TicketList";
import IErrends from "../../../models/IErrends";
import { IBugReport } from "../../../models/IBugReport";
import IFeatureRequest from "../../../models/IFeatureRequest";
import IGeneralImprovements from "../../../models/IGeneralImprovements";
import { IShowParts } from "../../../models/IPart";

interface IProp {
  errend: IErrends;
  patchList(
    assignedTo: string,
    status: string,
    errandId: string,
    endpoint: string,
    section: string,
    approved: Boolean,
    sectionList: IShowParts
  ): void;
  deleteRequest(
    errend: IFeatureRequest | IGeneralImprovements | IBugReport,
    endpoint: string
  ): void;
}

const BugReports = (props: IProp) => {
  return (
    <div>
      <PageTitle text={"Bug Reports"} img={br} />
      <TicketList
        errend={props.errend.getBugReports}
        errendTxt={"Bug"}
        patchList={props.patchList}
        endpoint={"bugreport"}
        deleteRequest={props.deleteRequest}
      />
    </div>
  );
};

export default BugReports;
