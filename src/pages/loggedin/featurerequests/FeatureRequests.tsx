import LoggedinMain from "../../../components/pages/LoggedinMain";
import { IParts } from "../../../models/IPart";
import fr from "../../../assets/newFeature.png";
import PageTitle from "../../../components/wrappers/PageTitle";

interface IProp {
  parts: IParts[];
}

const FeatureRequests = (props: IProp) => {
  return (
    <>
      <div>
        <PageTitle text={"Feature Requests"} img={fr} />
      </div>
    </>
  );
};

export default FeatureRequests;
