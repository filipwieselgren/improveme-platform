import { IBugReport } from "./IBugReport";
import IFeatureRequest from "./IFeatureRequest";
import IGeneralImprovements from "./IGeneralImprovements";

interface IErrends {
  getBugReports: IBugReport[];
  getFeatureRequests: IFeatureRequest[];
  getGeneralImprovements: IGeneralImprovements[];
  getCountFeatureRequests: IFeatureRequest[];
  getCountBugReports: IBugReport[];
  getCountGeneralImprovements: IGeneralImprovements[];
}

export default IErrends;
