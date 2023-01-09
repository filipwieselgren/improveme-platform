import { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCaretDown, BsTrash } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { IBugReport } from "../../models/IBugReport";
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
    approved: Boolean
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

  useEffect(() => {
    console.log("trigger");

    setList(props.sectionList);
  }, [props.patch]);

  console.log("list:", list);

  return (
    <div className="CreatePartForm-wrapper">
      <div className="section-list-border">
        <div className="section-list-header">
          {list.part}
          <button
            className="close-section-list"
            onClick={() => props.setShowSectionList(!props.showSectionList)}
          >
            Close
          </button>
        </div>
        <table className="table-section-list">
          <tr className="tr-title">
            <th></th>
            <th>Description</th>
            <th>Problem that it solves</th>
            <th>Sent by</th>
            <th></th>
            <th></th>
          </tr>
          {list.requests.map((e, i) => {
            return e.approved === false ? (
              <tr className="tr" key={e._id} id={e._id}>
                <td className="td td-checkbox">
                  <input type="checkbox" className="checkbox" value={e._id} />
                </td>
                <td className="td">{e.description}</td>
                <td className="td request">{e.solvesWhat}</td>

                <td className="td email">
                  <a href={`mailto:${e.email}`} target="_blank">
                    {e.email}{" "}
                  </a>
                </td>

                <td
                  className="td approve"
                  onClick={() =>
                    props.patchList(
                      e.assignedTo,
                      e.status,
                      e._id,
                      location.pathname === "/feature-requests"
                        ? "/featurerequest"
                        : "/generalimprovement",
                      e.part,
                      true
                    )
                  }
                >
                  <AiOutlineCheckCircle />{" "}
                  <span className="approve-span"> Approve</span>
                </td>
                <td
                  className="delete-request"
                  onClick={() =>
                    props.deleteRequest(
                      e,
                      location.pathname === "/feature-requests"
                        ? "/featurerequest"
                        : "/generalimprovement"
                    )
                  }
                >
                  {" "}
                  <BsTrash />
                </td>
              </tr>
            ) : (
              <></>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default SectionList;
