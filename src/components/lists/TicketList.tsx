import IErrends from "../../models/IErrends";
import { BsTrash } from "react-icons/bs";
import { useEffect, useState } from "react";
import { IUser } from "../../models/IUser";
import { users } from "../../data/user";
import IFeatureRequest from "../../models/IFeatureRequest";
import IGeneralImprovements from "../../models/IGeneralImprovements";
import { BsCaretDown } from "react-icons/bs";
import { IBugReport } from "../../models/IBugReport";
import { IShowParts } from "../../models/IPart";
import { IErrendCard } from "../../models/IErrendCard";

interface ITicketList {
  errend: IFeatureRequest[] | IGeneralImprovements[] | IBugReport[];
  errendTxt: string;
  patchList(
    assignedTo: string,
    status: string,
    errandId: string,
    endpoint: string,
    section: string,
    approved: Boolean,
    sectionList: IShowParts
  ): void;
  endpoint: string;
  deleteRequest(
    errend: IFeatureRequest | IGeneralImprovements | IBugReport,
    endpoint: string
  ): void;
  showErrend(err: IFeatureRequest | IGeneralImprovements | IBugReport): void;
}

const TicketList = (props: ITicketList) => {
  const [user, setUser] = useState<IUser[]>(users);

  const [statusOptions, setStatusOptions] = useState([
    {
      id: "1",
      option: "Not started",
    },
    {
      id: "2",
      option: "In progress",
    },
    {
      id: "3",
      option: "Done",
    },
  ]);

  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [isStausOpen, setIsStatusOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    if (isOpen === i) {
      return setIsOpen(null);
    }

    setIsOpen(i);
  };
  const toggleStatus = (i: number) => {
    if (isStausOpen === i) {
      return setIsStatusOpen(null);
    }

    setIsStatusOpen(i);
  };

  useEffect(() => {
    setUser([
      {
        id: "0",
        email: "Not assigned",
        userName: "",
        password: "tes123",
      },
      ...user,
    ]);
  }, []);

  return (
    <>
      <div className="outer-wrapper">
        <div className="table-wrapper">
          <table>
            <tr className="tr-title">
              <th></th>
              <th>Section</th>
              <th>{props.errendTxt}</th>
              <th>Assigned to</th>
              <th>Status</th>
              <th></th>
            </tr>

            {props.errend.map((err, i) => {
              return err.approved === true ? (
                <tr
                  key={err._id}
                  className={
                    err.status === "Done"
                      ? "tr-main done"
                      : err.status === "In progress"
                      ? "tr-main in-progress"
                      : "tr-main issue"
                  }
                  id={err._id}
                >
                  <td className="td td-open-errend">
                    <button
                      className="oppen-errend-btn"
                      onClick={() => props.showErrend(err)}
                    >
                      Open
                    </button>
                  </td>
                  <td className="td">{err.part}</td>
                  <td className="td request">{err.description.slice(0, 20)}</td>
                  <td className="td email" onClick={() => toggle(i)}>
                    <div className="dropdown">
                      <button className="dropbtn">
                        {err.assignedTo === ""
                          ? "Not assigned"
                          : err.assignedTo}
                      </button>
                      <BsCaretDown className="arrow-down" />
                      <div
                        className={
                          isOpen === i
                            ? "dropdown-content show-email"
                            : "dropdown-content noshow-email"
                        }
                      >
                        {user.map((u) => {
                          return (
                            <>
                              <div
                                key={u.id}
                                onClick={() =>
                                  props.patchList(
                                    u.email,
                                    err.status,
                                    err._id,
                                    props.endpoint,
                                    err.part,
                                    err.approved,
                                    {
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
                                    }
                                  )
                                }
                              >
                                {u.email}
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </td>
                  <td className="td status" onClick={() => toggleStatus(i)}>
                    <div className="dropdown">
                      <button className="dropbtn">
                        {err.status === "" ? "Not started" : err.status}
                      </button>
                      <BsCaretDown className="arrow-down" />
                      <div
                        className={
                          isStausOpen === i
                            ? "dropdown-content show-status"
                            : "dropdown-content noshow-status"
                        }
                      >
                        {statusOptions.map((s) => {
                          return (
                            <>
                              <div
                                className="option"
                                key={s.id}
                                onClick={() =>
                                  props.patchList(
                                    err.assignedTo,
                                    s.option,
                                    err._id,
                                    props.endpoint,
                                    err.part,
                                    err.approved,
                                    {
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
                                    }
                                  )
                                }
                              >
                                {s.option}{" "}
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </td>
                  <td
                    className="td delete"
                    onClick={() => props.deleteRequest(err, props.endpoint)}
                  >
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
    </>
  );
};

export default TicketList;
