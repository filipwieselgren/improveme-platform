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
import Chart, { Chart as ChartJS, ChartType } from "chart.js/auto";
import Bars from "../../../components/statistic/Bars";

interface IDashboard {
  errend: IErrends;
  parts: IGetParts[];
}

const Dashboard = (props: IDashboard) => {
  const [fixedFeaturesRequests, setFixedFeaturesRequests] = useState<number>(0);
  const [fixedBugReports, setFixedBugReports] = useState<number>(0);
  const [fixedGeneralImprovements, setFixedGeneralImprovements] =
    useState<number>(0);
  const [allFeaturesRequests, setAllFeaturesRequests] = useState<number>(0);
  const [allBugReports, setAllBugReports] = useState<number>(0);
  const [allGeneralImprovements, setAllGeneralImprovements] =
    useState<number>(0);
  const [frAmout, setFrAmout] = useState<number>(0);
  const [brAmout, setBrAmout] = useState<number>(0);
  const [giAmout, setGiAmout] = useState<number>(0);

  const [allRequests, setAllRequests] = useState<number>(0);
  const [displayName, setDisplayName] = useState({
    auth: true,
    token: "",
    userName: "",
  });

  useEffect(() => {
    // Count Done Features Requests
    const getFixedFeaturesRequests = props.errend.getFeatureRequests.filter(
      (fr: IFeatureRequest) => fr.status === "Done"
    );
    const fixedFeaturesRequests = getFixedFeaturesRequests.concat(
      props.errend.getCountFeatureRequests
    );

    // Count Done Bug Reports

    const getFixedBugReports = props.errend.getBugReports.filter(
      (br: IBugReport) => br.status === "Done"
    );

    const fixedBugReports = getFixedBugReports.concat(
      props.errend.getCountBugReports
    );

    // Count Done General Improvements

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
    props.errend.getCountGeneralImprovements,
    props.errend.getCountBugReports,
  ]);

  useEffect(() => {
    // Concats all Features requests
    const allFeaturesRequests = props.errend.getFeatureRequests;

    const allDoneFeaturesRequests = allFeaturesRequests.concat(
      props.errend.getCountFeatureRequests
    );

    // Concats all Bug reports
    const allBugReports = props.errend.getBugReports;

    const allDoneBugReports = allBugReports.concat(
      props.errend.getCountBugReports
    );

    // Concats all General improvements
    const allGeneralImprovements = props.errend.getGeneralImprovements;

    const allDoneGeneralImprovements = allGeneralImprovements.concat(
      props.errend.getCountGeneralImprovements
    );

    setAllFeaturesRequests(allDoneFeaturesRequests.length);
    setAllBugReports(allDoneBugReports.length);
    setAllGeneralImprovements(allDoneGeneralImprovements.length);
  }, [
    props.errend.getBugReports,
    props.errend.getFeatureRequests,
    props.errend.getGeneralImprovements,
    props.errend.getCountFeatureRequests,
    props.errend.getCountGeneralImprovements,
    props.errend.getCountBugReports,
  ]);

  useEffect(() => {
    const allRequests =
      allFeaturesRequests + allBugReports + allGeneralImprovements;

    const frProcent = (allFeaturesRequests / allRequests) * 100;
    const brProcent = (allBugReports / allRequests) * 100;
    const giProcent = (allGeneralImprovements / allRequests) * 100;

    setFrAmout(Math.round(frProcent));
    setBrAmout(Math.round(brProcent));
    setGiAmout(Math.round(giProcent));
    setAllRequests(allRequests);
  }, [allFeaturesRequests, allBugReports, allGeneralImprovements]);

  return (
    <div className="dashboard-wrapper">
      <PageTitle text={`Welcome Filip`} img={""} />
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

        <Bars
          frAmout={frAmout}
          brAmout={brAmout}
          giAmout={giAmout}
          allRequests={allRequests}
        />
      </div>
    </div>
  );
};

export default Dashboard;
