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
import { IGetParts, IParts, IShowParts } from "../../models/IPart";
import bug from "../../assets/bug.png";
import increaseColor from "../../assets/increase-color.png";
import activeFr from "../../assets/newFeature.png";
import IFeatureRequest from "../../models/IFeatureRequest";
import IGeneralImprovements from "../../models/IGeneralImprovements";
import { IBugReport } from "../../models/IBugReport";
import SectionList from "../lists/SectionList";
import { BsPersonCircle } from "react-icons/bs";
import ErrendCard from "../cards/ErrendCard";
import { IErrendCard } from "../../models/IErrendCard";

const LoggedinMain = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [createPart, setCreatePart] = useState(false);
  const [menu, setMenu] = useState(false);
  const [showSectionList, setShowSectionList] = useState(false);
  const [showErrendCard, setShowErrendCard] = useState(false);

  const [errend, setErrend] = useState<IErrends>({
    getBugReports: [],
    getFeatureRequests: [],
    getGeneralImprovements: [],
    getCountFeatureRequests: [],
    getCountBugReports: [],
    getCountGeneralImprovements: [],
    featureRequestSections: [],
    generalImprovementSections: [],
  });
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
  const [sectionList, setSectionList] = useState<IShowParts>({
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
  const [errendCard, setErrendCard] = useState<IErrendCard>({
    _id: "",
    approved: false,
    assignedTo: "",
    description: "",
    background: "",
    files: [],
    email: "",
    part: "",
    solvesWhat: "",
    reproduce: "",
    status: "",
  });
  const [renderPage, setRenderPage] = useState({
    render: "",
  });

  const [section, setSection] = useState("");
  const [page, setPage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/api/v1/errend")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setErrend(data);
  //     });
  // }, [patch]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/api/v1/errend");
      const data = await res.json();
      setErrend(data);
    };

    fetchData();
  }, [patch]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/api/v1/section");
      const data = await res.json();
      setParts(data);
    };

    fetchData();
  }, [renderPage]);

  useEffect(() => {
    if (page === "/featurerequest") {
      errend.featureRequestSections.forEach((fr) => {
        if (fr.part === section) {
          setSectionList(fr);
        }
      });
    } else {
      errend.generalImprovementSections.forEach((gi) => {
        if (gi.part === section) {
          setSectionList(gi);
        }
      });
    }
  }, [errend]);

  const patchList = async (
    assignedTo: string,
    status: string,
    errandId: string,
    endpoint: string,
    section: string,
    approved: Boolean,
    sectionList: IShowParts
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
        approved: approved,
      }),
    });

    setSection(sectionList.part);
    setPage(endpoint);

    setPatch({
      email: "",
      id: "",
      endpoint: "",
      status: "",
    });
  };

  const deleteRequest = async (
    err: IFeatureRequest | IGeneralImprovements | IBugReport,
    endpoint: string
  ) => {
    console.log("delete");

    await fetch(`http://localhost:8000/api/v1/${endpoint}/${err._id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({ _id: err._id }),
    });
    if (err.status === "Done") {
      postToStatistic(err, endpoint);
    }

    errend.featureRequestSections.forEach((fr) => {
      if (fr.part === err.part && fr.requests.length === 1) {
        setSectionList({
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
      }
    });
    errend.generalImprovementSections.forEach((gi) => {
      if (gi.part === err.part && gi.requests.length === 1) {
        setSectionList({
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
      }
    });

    setSection(err.part);
    setPage(endpoint);

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

  const showRequests = (requests: IShowParts) => {
    setShowSectionList(!showSectionList);

    setSectionList(requests);
  };

  const showErrend = (err: IErrendCard) => {
    console.log("err:", err);

    setErrendCard(err);
    setShowErrendCard(!showErrendCard);
  };

  const changePage = (url: string) => {
    if (url === "/feature-requests") {
      navigate("/feature-requests");
    } else if (url === "/general-improvements") {
      navigate("/general-improvements");
    } else if (url === "/bug-reports") {
      navigate("/bug-reports");
    }
    setPatch({
      email: "",
      id: "",
      endpoint: "",
      status: "",
    });
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
        {showSectionList ? (
          <SectionList
            sectionList={sectionList}
            setShowSectionList={setShowSectionList}
            showSectionList={showSectionList}
            patchList={patchList}
            deleteRequest={deleteRequest}
            patch={patch}
            setSection={setSection}
            showErrend={showErrend}
          />
        ) : (
          <></>
        )}

        {showErrendCard ? (
          <ErrendCard
            errendCard={errendCard}
            setShowErrendCard={setShowErrendCard}
            showErrendCard={showErrendCard}
            deleteRequest={deleteRequest}
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
                onClick={() => changePage("/feature-requests")}
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
                onClick={() => changePage("/general-improvements")}
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
                onClick={() => changePage("/bug-reports")}
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

            <BsPersonCircle className="profile-nav" />
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
                setRenderPage={setRenderPage}
                showRequests={showRequests}
                showErrend={showErrend}
              />
            ) : location.pathname === "/general-improvements" ? (
              <GeneralImprovements
                parts={parts}
                errend={errend}
                patchList={patchList}
                deleteRequest={deleteRequest}
                setRenderPage={setRenderPage}
                showRequests={showRequests}
                showErrend={showErrend}
              />
            ) : location.pathname === "/bug-reports" ? (
              <BugReports
                errend={errend}
                patchList={patchList}
                deleteRequest={deleteRequest}
                showErrend={showErrend}
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
