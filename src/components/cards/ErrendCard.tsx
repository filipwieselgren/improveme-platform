import { BsTrash } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { IBugReport } from "../../models/IBugReport";
import { IErrendCard } from "../../models/IErrendCard";
import IFeatureRequest from "../../models/IFeatureRequest";
import IGeneralImprovements from "../../models/IGeneralImprovements";

interface IErrend {
  errendCard: IErrendCard;
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
                  <button className="delete-btn">
                    <BsTrash />
                  </button>
                </td>
              </tr>
            </table>
            <div className="sent-by-wrapper">
              <h4>Sent by</h4>
              <a href={`mailto:${props.errendCard.email}`} target="_blank">
                {" "}
                <div className="sent-by-email">{props.errendCard.email}</div>
              </a>
            </div>
            <div className="info-wrapper">
              <div className="info-border">
                <h4>
                  {" "}
                  {location.pathname !== "/bug-reports"
                    ? "Description"
                    : "Description of bug"}
                </h4>
                <div className="info-txt">{props.errendCard.description}</div>
              </div>
              <div className="info-border">
                <h4>
                  {" "}
                  {location.pathname !== "/bug-reports"
                    ? "What does it solve"
                    : "Background information"}
                </h4>
                <div className="info-txt">
                  {location.pathname !== "/bug-reports"
                    ? props.errendCard.solvesWhat
                    : props.errendCard.background}
                </div>
              </div>
              {location.pathname !== "/bug-reports" ? (
                <></>
              ) : (
                <div className="info-border">
                  <h4>How to reproduce the bug</h4>
                  <div className="info-txt">{props.errendCard.reproduce}</div>
                </div>
              )}

              {/* <div className="info-border">
                <h4>Image/video/screenshot of the bug</h4>
                <div className="info-txt">{props.errendCard.}</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrendCard;
