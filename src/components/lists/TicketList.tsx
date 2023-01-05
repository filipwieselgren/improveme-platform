import IErrends from "../../models/IErrends";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import { IUser } from "../../models/IUser";
import { users } from "../../data/user";

interface ITicketList {
  errend: IErrends;
  errendTxt: string;
}

const TicketList = (props: ITicketList) => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [user, setUser] = useState<IUser[]>(users);

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

  const handleDropDown = () => {
    setToggleDropDown(!toggleDropDown);
  };
  return (
    <>
      <table>
        <tr className="tr-title">
          <th></th>
          <th>Id</th>
          <th>Section</th>
          <th>{props.errendTxt}</th>
          <th>Assigned to</th>
          <th>Status</th>
          <th></th>
        </tr>
        {props.errend.getFeatureRequests.map((fr) => {
          return fr.approved === true ? (
            <tr
              className={
                fr.status === "Done"
                  ? "tr-main done"
                  : fr.status === "In progress"
                  ? "tr-main in-progress"
                  : "tr-main issue"
              }
            >
              <td className="td">
                <input type="checkbox" />
              </td>
              <td className="td">{1}</td>
              <td className="td">{fr.part}</td>
              <td className="td request">{fr.description}</td>
              <td className="td email">
                <div className="dropdown">
                  <button className="dropbtn">
                    {fr.assignedTo === "" ? "Not assigned" : fr.assignedTo}
                  </button>
                  <select className="dropdown-content">
                    <option value=""></option>
                    {user.map((u) => {
                      return (
                        <>
                          <option key={u.id} value={u.email}>
                            {u.email}
                          </option>
                          ;
                        </>
                      );
                    })}
                  </select>
                </div>
              </td>
              <td className="td status">
                <div className="dropdown">
                  <button className="dropbtn">{fr.status}</button>
                  <select className="dropdown-content">
                    <option value=""></option>
                    {statusOptions.map((s) => {
                      return (
                        <>
                          <option key={s.id} value={s.option}>
                            {s.option}
                          </option>
                          ;
                        </>
                      );
                    })}
                  </select>
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
