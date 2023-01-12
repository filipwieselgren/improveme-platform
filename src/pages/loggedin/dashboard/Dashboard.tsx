import PartCard from "../../../components/cards/PartCard";
import PageTitle from "../../../components/wrappers/PageTitle";
import bee from "../../../assets/bug.png";
import fr from "../../../assets/newFeature.png";
import gi from "../../../assets/increase-color.png";
import IErrends from "../../../models/IErrends";
import IFeatureRequest from "../../../models/IFeatureRequest";
import { useEffect, useState } from "react";
import { IBugReport } from "../../../models/IBugReport";
import IGeneralImprovements from "../../../models/IGeneralImprovements";
import { IGetParts } from "../../../models/IPart";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

interface IDashboard {
  errend: IErrends;
  parts: IGetParts[];
}

const Dashboard = (props: IDashboard) => {
  const [fixedFeaturesRequests, setFixedFeaturesRequests] = useState<number>(0);
  const [fixedBugReports, setFixedBugReports] = useState<number>(0);
  const [fixedGeneralImprovements, setFixedGeneralImprovements] =
    useState<number>(0);

  // const [data, setData] = useState({
  //   labels: props.parts.map((part) => part._id),
  //   datasets: [
  //     {
  //       label: "User Gained",
  //       data: props.parts.map((part) => part.featureRequest.length),
  //     },
  //   ],
  // });

  useEffect(() => {
    // Count fixed Features Requests
    const getFixedFeaturesRequests = props.errend.getFeatureRequests.filter(
      (fr: IFeatureRequest) => fr.status === "Done"
    );
    const fixedFeaturesRequests = getFixedFeaturesRequests.concat(
      props.errend.getCountFeatureRequests
    );

    // Count fixed Bug Reports

    const getFixedBugReports = props.errend.getBugReports.filter(
      (br: IBugReport) => br.status === "Done"
    );

    const fixedBugReports = getFixedBugReports.concat(
      props.errend.getCountBugReports
    );

    // Count fixed General Improvements

    const getFixedGeneralImprovements =
      props.errend.getGeneralImprovements.filter(
        (gi: IGeneralImprovements) => gi.status === "Done"
      );

    const fixedGeneralImprovements = getFixedGeneralImprovements.concat(
      props.errend.getCountGeneralImprovements
    );

    setFixedFeaturesRequests(fixedFeaturesRequests.length);
    setFixedBugReports(fixedBugReports.length);
    setFixedGeneralImprovements(fixedGeneralImprovements.length);
  }, [
    props.errend.getBugReports,
    props.errend.getFeatureRequests,
    props.errend.getGeneralImprovements,
    props.errend.getCountFeatureRequests,
  ]);

  return (
    <div className="dashboard-wrapper">
      <PageTitle text={"Welcome Filip"} img={""} />
      <div className="card-wrapper-dashboard">
        <div className="second-title-wrapper">
          <h4>Your team has fixed</h4>
        </div>
        <div className="cards-dashboard">
          <PartCard
            img={fr}
            title={fixedFeaturesRequests}
            info={
              fixedFeaturesRequests === 1
                ? "Feature Request"
                : "Feature Requests"
            }
          />
          <PartCard
            img={gi}
            title={fixedGeneralImprovements}
            info={
              fixedGeneralImprovements === 1
                ? "General Improvement"
                : "General Improvements"
            }
          />
          <PartCard
            img={bee}
            title={fixedBugReports}
            info={fixedBugReports === 1 ? "Bug Report" : "Bug Reports"}
          />
        </div>
      </div>
      {/* 
      <div className="top-three-wrapper">
        <h4>Top 3 parts that receives the most</h4>
        <Bar data={data} />
      </div> */}
    </div>
  );
};

export default Dashboard;
