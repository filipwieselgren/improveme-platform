import { IBugReport } from "./IBugReport";
import IFeatureRequest from "./IFeatureRequest";
import IGeneralImprovements from "./IGeneralImprovements";

interface IErrends {
  getBugReports: IBugReport[];
  getFeatureRequests: IFeatureRequest[];
  getGeneralImprovements: IGeneralImprovements[];
}

export default IErrends;
