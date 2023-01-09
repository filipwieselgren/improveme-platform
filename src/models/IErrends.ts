import { IBugReport } from "./IBugReport";
import IFeatureRequest from "./IFeatureRequest";
import IGeneralImprovements from "./IGeneralImprovements";
import { IShowParts } from "./IPart";

interface IErrends {
  getBugReports: IBugReport[];
  getFeatureRequests: IFeatureRequest[];
  getGeneralImprovements: IGeneralImprovements[];
  getCountFeatureRequests: IFeatureRequest[];
  getCountBugReports: IBugReport[];
  getCountGeneralImprovements: IGeneralImprovements[];
  featureRequestSections: IShowParts[];
  generalImprovementSections: IShowParts[];
}

export default IErrends;
