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
  const [fixedFeaturesRequests, setFixedFeaturesRequests] = useState<number>(0);
  const [fixedBugReports, setFixedBugReports] = useState<number>(0);
  const [fixedGeneralImprovements, setFixedGeneralImprovements] =
    useState<number>(0);

  useEffect(() => {
    const getFixedFeaturesRequests = props.errend.getFeatureRequests.filter(
      (fr: IFeatureRequest) => fr.status === "Done"
    );

    const getFixedBugReports = props.errend.getBugReports.filter(
      (br: IBugReport) => br.status === "Done"
    );

    const getFixedGeneralImprovements =
      props.errend.getGeneralImprovements.filter(
        (gi: IGeneralImprovements) => gi.status === "Done"
      );

    setFixedFeaturesRequests(getFixedFeaturesRequests.length);
    setFixedBugReports(getFixedBugReports.length);
    setFixedGeneralImprovements(getFixedGeneralImprovements.length);
  }, [
    props.errend.getBugReports,
    props.errend.getFeatureRequests,
    props.errend.getGeneralImprovements,
  ]);

  return (
    <div className="dashboard-wrapper">
      <PageTitle text={"Welcome Filip"} img={""} />
      <div className="card-wrapper-dashboard">
        <div className="second-title-wrapper">
          <h4>Your team have fixed</h4>
        </div>
        <div className="cards-dashboard">
          <PartCard
            img={fr}
            title={fixedFeaturesRequests}
            info={"Feature Requests"}
          />
          <PartCard
            img={gi}
            title={fixedGeneralImprovements}
            info={"General Improvements"}
          />
          <PartCard img={bee} title={fixedBugReports} info={"Bug Reports"} />
        </div>
      </div>

      <div className="top-three-wrapper">
        <h4>Top 3 parts that receives the most</h4>
      </div>
    </div>
  );
};

export default Dashboard;
