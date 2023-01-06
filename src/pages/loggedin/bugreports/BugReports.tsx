import PageTitle from "../../../components/wrappers/PageTitle";
import br from "../../../assets/bug.png";
import TicketList from "../../../components/lists/TicketList";
import IErrends from "../../../models/IErrends";

interface IProp {
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
