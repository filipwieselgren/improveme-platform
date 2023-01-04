import PartCard from "../../../components/cards/PartCard";
import PageTitle from "../../../components/wrappers/PageTitle";
import bee from "../../../assets/bee.png";
import fr from "../../../assets/fr.png";
import gi from "../../../assets/increase.png";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <PageTitle text={"Welcome Filip"} />
      <div className="card-wrapper-dashboard">
        <div className="second-title-wrapper">
          <h4>You have fixed</h4>
        </div>
        <div className="cards-dashboard">
          <PartCard img={fr} title={"200"} info={"Feature Requests"} />
          <PartCard img={gi} title={"54"} info={"General Improvements"} />
          <PartCard img={bee} title={"223"} info={"Bug Reports"} />
        </div>
      </div>

      <div className="top-three-wrapper">
        <h4>Top 3 parts that receives the most</h4>
      </div>
    </div>
  );
};

export default Dashboard;
