import PageTitle from "../../../components/wrappers/PageTitle";
import br from "../../../assets/bug.png";
import TicketList from "../../../components/lists/TicketList";
import IErrends from "../../../models/IErrends";
import { IBugReport } from "../../../models/IBugReport";
import IFeatureRequest from "../../../models/IFeatureRequest";
import IGeneralImprovements from "../../../models/IGeneralImprovements";
import { IShowParts } from "../../../models/IPart";
import { IErrendCard } from "../../../models/IErrendCard";

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
  showErrend(err: IFeatureRequest | IGeneralImprovements | IBugReport): void;
}

const BugReports = (props: IProp) => {
  return (
    <div>
      <PageTitle text={"Bug Reports"} img={br} />
      <div className="bug-list-stats">
        <div className="bug-list-title-wrapper">
          <h4>Status amount</h4>
        </div>
        <div className="stats-wrapper">
          <div>
            Done:{" "}
            {
              props.errend.getBugReports.filter(
                (report) => report.status === "Done"
              ).length
            }
          </div>
          <div>
            In progress:{" "}
            {
              props.errend.getBugReports.filter(
                (report) => report.status === "In progress"
              ).length
            }
          </div>
          <div>
            Not started:{" "}
            {
              props.errend.getBugReports.filter(
                (report) =>
                  report.status === "" || report.status === "Not started"
              ).length
            }
          </div>
        </div>
      </div>
      <TicketList
        errend={props.errend.getBugReports}
        errendTxt={"Bug"}
        patchList={props.patchList}
        endpoint={"bugreport"}
        deleteRequest={props.deleteRequest}
        showErrend={props.showErrend}
      />
    </div>
  );
};

export default BugReports;
