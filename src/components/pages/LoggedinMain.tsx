import face from "../../assets/ImproveMe.png";
import bee from "../../assets/bee.png";
import fr from "../../assets/fr.png";
import increase from "../../assets/increase.png";
import { useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../../pages/loggedin/dashboard/Dashboard";
import FeatureRequests from "../../pages/loggedin/featurerequests/FeatureRequests";
import GeneralImprovements from "../../pages/loggedin/generalimprovements/GeneralImprovements";
import BugReports from "../../pages/loggedin/bugreports/BugReports";
import CreatePart from "../buttons/CreatePart";
import { useEffect, useState } from "react";
import IErrends from "../../models/IErrends";
import CreatePartForm from "../wrappers/CreatePartForm";
import { VscTriangleLeft } from "react-icons/vsc";
import { IGetParts, IParts } from "../../models/IPart";
import bug from "../../assets/bug.png";
import increaseColor from "../../assets/increase-color.png";
import activeFr from "../../assets/newFeature.png";
import IFeatureRequest from "../../models/IFeatureRequest";
import IGeneralImprovements from "../../models/IGeneralImprovements";
import { IBugReport } from "../../models/IBugReport";
import { idText } from "typescript";

const LoggedinMain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [errend, setErrend] = useState<IErrends>({
    getBugReports: [],
    getFeatureRequests: [],
    getGeneralImprovements: [],
    getCountFeatureRequests: [],
    getCountBugReports: [],
    getCountGeneralImprovements: [],
  });

  const [createPart, setCreatePart] = useState<boolean>(false);
  const [menu, setMenu] = useState(false);
  const [parts, setParts] = useState<IGetParts[]>([
    {
      _id: "",
      section: "",
      featureRequest: [],
      bugs: [],
      genralImprovments: [],
    },
  ]);

  const [patch, setPatch] = useState({
    email: "",
    id: "",
    endpoint: "",
    status: "",
  });

  const [renderPage, setRenderPage] = useState({
    render: "",
  });

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/errend")
      .then((res) => res.json())
      .then((data) => setErrend(data));
  }, [patch]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/section")
      .then((res) => res.json())
      .then((data) => {
        setParts(data);
      });
  }, [renderPage]);

  const patchList = async (
    assignedTo: string,
    status: string,
    errandId: string,
    endpoint: string,
    section: string
  ) => {
    await fetch(`http://localhost:8000/api/v1/${endpoint}/${errandId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({
        assignedTo: assignedTo,
        status: status,
        section: section,
      }),
    });
    setPatch({
      email: "",
      id: "",
      endpoint: "",
      status: "",
    });
  };

  const deleteRequest = async (
    errend: IFeatureRequest | IGeneralImprovements | IBugReport,
    endpoint: string
  ) => {
    console.log("trigger");

    await fetch(`http://localhost:8000/api/v1/${endpoint}/${errend._id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({ _id: errend._id }),
    });
    if (errend.status === "Done") {
      postToStatistic(errend, endpoint);
    }
    setPatch({
      email: "",
      id: "",
      endpoint: "",
      status: "",
    });
  };

  const postToStatistic = async (
    errend: IFeatureRequest | IGeneralImprovements | IBugReport,
    endpoint: string
  ) => {
    await fetch(`http://localhost:8000/api/v1/${endpoint}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify(errend),
    });
  };

  const tooglePart = () => {
    setCreatePart(!createPart);
  };

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="wrapper">
        {createPart ? (
          <CreatePartForm
            tooglePart={tooglePart}
            setRenderPage={setRenderPage}
          />
        ) : (
          <></>
        )}
        <nav className={menu ? "menu-open side-nav" : "side-nav"}>
          <div className="closenav-wrapper" onClick={openMenu}>
            <VscTriangleLeft />
          </div>
          <img
            src={face}
            alt="face"
            className="face"
            onClick={() => navigate("/dashboard")}
          />
          <div className="list-wrapper">
            <ul>
              <div
                className="li-wrapper"
                onClick={() => navigate("/feature-requests")}
              >
                <img
                  src={
                    location.pathname === "/feature-requests" ? activeFr : fr
                  }
                  alt="feature request"
                />
                <li className="side-li">Feature requests</li>
              </div>
              <div
                className="li-wrapper"
                onClick={() => navigate("/general-improvements")}
              >
                <img
                  src={
                    location.pathname === "/general-improvements"
                      ? increaseColor
                      : increase
                  }
                  alt="general improvemennts"
                />
                <li className="side-li">General improvments</li>
              </div>
              <div
                className="li-wrapper"
                onClick={() => navigate("/bug-reports")}
              >
                <img
                  src={location.pathname === "/bug-reports" ? bug : bee}
                  alt="bee"
                />
                <li className="side-li">Bug reports</li>
              </div>
            </ul>
          </div>
        </nav>
        <div className="topnav-wrapper">
          <nav className="top-nav">
            <div className="open-menu" onClick={openMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </nav>

          <main className="loggedin-main-wrapper">
            <div className="create-part-btn-wrapper">
              <CreatePart tooglePart={tooglePart} />
            </div>
            {location.pathname === "/dashboard" ? (
              <Dashboard errend={errend} parts={parts} />
            ) : location.pathname === "/feature-requests" ? (
              <FeatureRequests
                parts={parts}
                errend={errend}
                patchList={patchList}
                deleteRequest={deleteRequest}
              />
            ) : location.pathname === "/general-improvements" ? (
              <GeneralImprovements
                parts={parts}
                errend={errend}
                patchList={patchList}
                deleteRequest={deleteRequest}
              />
            ) : location.pathname === "/bug-reports" ? (
              <BugReports
                errend={errend}
                patchList={patchList}
                deleteRequest={deleteRequest}
              />
            ) : (
              <></>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default LoggedinMain;
