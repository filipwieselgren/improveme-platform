import { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCaretDown, BsTrash } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { IBugReport } from "../../models/IBugReport";
import { IErrendCard } from "../../models/IErrendCard";
import IFeatureRequest from "../../models/IFeatureRequest";
import IGeneralImprovements from "../../models/IGeneralImprovements";
import { IShowParts } from "../../models/IPart";

interface ISectionList {
  sectionList: IShowParts;
  setShowSectionList: React.Dispatch<React.SetStateAction<boolean>>;
  showSectionList: boolean;
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
  patch: {
    email: string;
    id: string;
    endpoint: string;
    status: string;
  };
  setSection: React.Dispatch<React.SetStateAction<string>>;
  showErrend(err: IFeatureRequest | IGeneralImprovements | IBugReport): void;
}

const SectionList = (props: ISectionList) => {
  const location = useLocation();
  const [list, setList] = useState<IShowParts>({
    part: "",
    requests: [
      {
        _id: "",
        description: "",
        solvesWhat: "",
        part: "",
        email: "",
        approved: false,
        status: "",
        assignedTo: "",
      },
    ],
  });

  const [section, setSection] = useState(props.sectionList.part);

  useEffect(() => {
    setList(props.sectionList);
  }, [props.patch]);

  return (
    <div className="CreatePartForm-wrapper">
      <div className="section-list-border">
        <div className="section-list-header">
          {section}
          <button
            className="close-section-list"
            onClick={() => props.setShowSectionList(!props.showSectionList)}
          >
            Close
          </button>
        </div>
        <table className="table-section-list">
          <thead>
            <tr className="tr-title">
              <th className="first-child-th"></th>
              <th>Description</th>
              <th>Problem that it solves</th>
              <th>Sent by</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.sectionList.requests.map((err, i) => {
              return err.approved === false && err._id !== "" ? (
                <tr className="tr" key={err._id} id={err._id}>
                  <td className="first-child-td"></td>
                  <td className="td">{err.description.slice(0, 20)}</td>
                  <td className="td request">{err.solvesWhat.slice(0, 20)}</td>

                  <td className="td email">
                    <a href={`mailto:${err.email}`} target="_blank">
                      {err.email}{" "}
                    </a>
                  </td>

                  <td
                    className="td approve"
                    onClick={() =>
                      props.patchList(
                        err.assignedTo,
                        err.status,
                        err._id,
                        location.pathname === "/feature-requests"
                          ? "/featurerequest"
                          : "/generalimprovement",
                        err.part,
                        true,
                        props.sectionList
                      )
                    }
                  >
                    <AiOutlineCheckCircle />{" "}
                    <span className="approve-span"> Approve </span>
                  </td>
                  <td className="td delete">
                    <button
                      className="oppen-errend-btn"
                      onClick={() => props.showErrend(err)}
                    >
                      Open
                    </button>{" "}
                    <button
                      className="delete-btn"
                      onClick={() =>
                        props.deleteRequest(
                          err,
                          location.pathname === "/feature-requests"
                            ? "/featurerequest"
                            : "/generalimprovement"
                        )
                      }
                    >
                      <BsTrash />
                    </button>
                  </td>
                </tr>
              ) : (
                <></>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SectionList;
