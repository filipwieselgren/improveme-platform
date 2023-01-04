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

const LoggedinMain = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="wrapper">
        <nav className="side-nav">
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
                <img src={fr} alt="feature request" />
                <li>Feature requests</li>
              </div>
              <div
                className="li-wrapper"
                onClick={() => navigate("/general-improvements")}
              >
                <img src={increase} alt="general improvemennts" />
                <li>General improvments</li>
              </div>
              <div
                className="li-wrapper"
                onClick={() => navigate("/bug-reports")}
              >
                <img src={bee} alt="bee" />
                <li>Bug reports</li>
              </div>
            </ul>
          </div>
        </nav>
        <div className="topnav-wrapper">
          <nav className="top-nav"></nav>
          <main className="main-wrapper">
            <div className="create-part-btn-wrapper">
              <CreatePart />
            </div>
            {location.pathname === "/dashboard" ? (
              <Dashboard />
            ) : location.pathname === "/feature-requests" ? (
              <FeatureRequests />
            ) : location.pathname === "/general-improvements" ? (
              <GeneralImprovements />
            ) : location.pathname === "/bug-reports" ? (
              <BugReports />
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
