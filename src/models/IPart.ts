// export interface IPart {
//   id: string;
//   parts: IParts[];
// }

import { IBugReport } from "./IBugReport";
import IFeatureRequest from "./IFeatureRequest";
import IGeneralImprovements from "./IGeneralImprovements";

export interface IParts {
  section: string;
  featureRequest: IFeatureRequest[];
  bugs: IBugReport[];
  genralImprovments: IGeneralImprovements[];
}

export interface IGetParts {
  _id: string;
  section: string;
  featureRequest: IFeatureRequest[];
  bugs: IBugReport[];
  genralImprovments: IGeneralImprovements[];
}

export interface IShowParts {
  part: string;
  requests: [
    {
      _id: string;
      description: string;
      solvesWhat: string;
      part: string;
      email: string;
      approved: boolean;
      status: string;
      assignedTo: string;
    }
  ];
}
