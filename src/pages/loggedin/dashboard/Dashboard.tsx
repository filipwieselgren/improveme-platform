import PartCard from "../../../components/cards/PartCard";
import PageTitle from "../../../components/wrappers/PageTitle";
import bee from "../../../assets/bee.png";
import fr from "../../../assets/fr.png";
import gi from "../../../assets/increase.png";
import IErrends from "../../../models/IErrends";
import IFeatureRequest from "../../../models/IFeatureRequest";
import { useEffect, useState } from "react";
import { IBugReport } from "../../../models/IBugReport";
import IGeneralImprovements from "../../../models/IGeneralImprovements";

interface IDashboard {
  errend: IErrends;
}

const Dashboard = (props: IDashboard) => {
  const [fixedFeaturesRequests, setFixedFeaturesRequests] = useState<any>([]);
  const [fixedBugReports, setFixedBugReports] = useState<any>([]);
  const [fixedGeneralImprovements, setFixedGeneralImprovements] = useState<any>(
    []
  );

  useEffect(() => {
    const getFixedFeaturesRequests = props.errend.getFeatureRequests.filter(
      (fr: any) => fr.status === "done"
    );

    const getFixedBugReports = props.errend.getBugReports.filter(
      (br: IBugReport) => br.status === "done"
    );

    const getFixedGeneralImprovements =
      props.errend.getGeneralImprovements.filter(
        (gi: IGeneralImprovements) => gi.status === "done"
      );

    setFixedFeaturesRequests(getFixedFeaturesRequests);
    setFixedBugReports(getFixedBugReports);
    setFixedGeneralImprovements(getFixedGeneralImprovements);
  }, [
    props.errend.getBugReports,
    props.errend.getFeatureRequests,
    props.errend.getGeneralImprovements,
  ]);

  return (
    <div className="dashboard-wrapper">
      <PageTitle text={"Welcome Filip"} />
      <div className="card-wrapper-dashboard">
        <div className="second-title-wrapper">
          <h4>You have fixed</h4>
        </div>
        <div className="cards-dashboard">
          <PartCard
            img={fr}
            title={fixedFeaturesRequests.length}
            info={"Feature Requests"}
          />
          <PartCard
            img={gi}
            title={fixedGeneralImprovements.length}
            info={"General Improvements"}
          />
          <PartCard
            img={bee}
            title={fixedBugReports.length}
            info={"Bug Reports"}
          />
        </div>
      </div>

      <div className="top-three-wrapper">
        <h4>Top 3 parts that receives the most</h4>
      </div>
    </div>
  );
};

export default Dashboard;
