import { BsTrash } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { IBugReport } from "../../models/IBugReport";
import { IErrendCard } from "../../models/IErrendCard";
import IFeatureRequest from "../../models/IFeatureRequest";
import IGeneralImprovements from "../../models/IGeneralImprovements";

interface IErrend {
  errendCard: IFeatureRequest | IGeneralImprovements | IBugReport;
  setShowErrendCard: React.Dispatch<React.SetStateAction<boolean>>;
  showErrendCard: boolean;
  deleteRequest(
    errend: IFeatureRequest | IGeneralImprovements | IBugReport,
    endpoint: string
  ): void;
}
const ErrendCard = (props: IErrend) => {
  const location = useLocation();

  return (
    <>
      <div className="CreatePartForm-wrapper">
        <div className="errend-card-border">
          <div className="section-list-header">
            {/* {props.errendCard.part} */}
            <button
              className="close-section-list"
              onClick={() => props.setShowErrendCard(!props.showErrendCard)}
            >
              Close
            </button>
          </div>
          <div className="table-wrapper">
            <table className="table-section-list">
              <tr className="tr-title">
                <th>Errend id</th>
                <th>Section</th>
                <th>Assigned to</th>
                <th>Status</th>
                <th></th>
              </tr>
              <tr
                className={
                  props.errendCard.status === "Done"
                    ? "tr-main done"
                    : props.errendCard.status === "In progress"
                    ? "tr-main in-progress"
                    : "tr-main issue"
                }
              >
                <td className="td td-id"># {props.errendCard._id}</td>
                <td className="td section">{props.errendCard.part}</td>

                <td className="td email">
                  {props.errendCard.assignedTo === ""
                    ? "Not assigned"
                    : props.errendCard.assignedTo}{" "}
                </td>

                <td className="td status">
                  {props.errendCard.status === ""
                    ? "Not started"
                    : props.errendCard.status}
                </td>
                <td
                  className="delete-request"
                  onClick={() =>
                    props.deleteRequest(
                      props.errendCard,
                      location.pathname === "/feature-requests"
                        ? "/featurerequest"
                        : location.pathname === "/general-improvements"
                        ? "/generalimprovement"
                        : "/bugreport"
                    )
                  }
                >
                  {" "}
                  <BsTrash />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrendCard;
