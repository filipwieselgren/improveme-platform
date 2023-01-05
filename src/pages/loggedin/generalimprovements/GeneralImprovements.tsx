import gi from "../../../assets/increase-color.png";
import TicketList from "../../../components/lists/TicketList";
import PageTitle from "../../../components/wrappers/PageTitle";
import IErrends from "../../../models/IErrends";

interface IProp {
  errend: IErrends;
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
        />
      </div>
    </div>
  );
};

export default GeneralImprovements;
