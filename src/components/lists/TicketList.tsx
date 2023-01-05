import IErrends from "../../models/IErrends";
import { BsTrash } from "react-icons/bs";
import { useEffect, useState } from "react";
import { IUser } from "../../models/IUser";
import { users } from "../../data/user";
import IFeatureRequest from "../../models/IFeatureRequest";
import IGeneralImprovements from "../../models/IGeneralImprovements";

interface ITicketList {
  errend: IFeatureRequest[] | IGeneralImprovements[];
  errendTxt: string;
  patchList(email: string, errandId: string, endpoint: string): void;
}

const TicketList = (props: ITicketList) => {
  const [user, setUser] = useState<IUser[]>(users);
  const [email, setEmail] = useState<string>("");

  const [statusOptions, setStatusOptions] = useState([
    {
      id: "1",
      option: "-",
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

  return (
    <>
      <table>
        <tr className="tr-title">
          <th></th>
          <th>Section</th>
          <th>{props.errendTxt}</th>
          <th>Assigned to</th>
          <th>Status</th>
          <th></th>
        </tr>
        {props.errend.map((e) => {
          return e.approved === true ? (
            <tr
              key={e._id}
              className={
                e.status === "Done"
                  ? "tr-main done"
                  : e.status === "In progress"
                  ? "tr-main in-progress"
                  : "tr-main issue"
              }
              id={e._id}
            >
              <td className="td td-checkbox">
                <input type="checkbox" className="checkbox" value={e._id} />
              </td>
              <td className="td">{e.part}</td>
              <td className="td request">{e.description}</td>
              <td className="td email">
                <div className="dropdown">
                  <button className="dropbtn">
                    {e.assignedTo === "" ? "Not assigned" : e.assignedTo}
                  </button>
                  <div className="dropdown-content">
                    {user.map((u) => {
                      return (
                        <>
                          <div
                            key={u.id}
                            onClick={() =>
                              props.patchList(
                                u.email,
                                e._id,
                                "assignfeaturerequest"
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
              <td className="td status">
                <div className="dropdown">
                  <button className="dropbtn">{e.status}</button>
                  <div className="dropdown-content">
                    {statusOptions.map((s) => {
                      return (
                        <>
                          <div key={s.id}>{s.option}</div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </td>
              <td className="td delete">
                <BsTrash />
              </td>
            </tr>
          ) : (
            <></>
          );
        })}
      </table>
    </>
  );
};

export default TicketList;
