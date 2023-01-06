import { useLocation } from "react-router-dom";
import { IBugReport } from "../../models/IBugReport";
import IFeatureRequest from "../../models/IFeatureRequest";
import IGeneralImprovements from "../../models/IGeneralImprovements";
import { IGetParts, IParts } from "../../models/IPart";

interface IMapCard {
  parts: IGetParts[];
  errend: IFeatureRequest[] | IGeneralImprovements[] | IBugReport[];
}

const MapCard = (props: IMapCard) => {
  const location = useLocation();
  return (
    <div className="section-card-wrapper">
      {props.parts.map((p, i) => {
        return (
          <div key={i} className="section-card-border">
            <div className="section-title">{p.section}</div>
            <div className="amout">
              {location.pathname === "/feature-requests" ? (
                `${p.featureRequest.length} Feature Requests`
              ) : location.pathname === "/general-improvements" ? (
                `${p.genralImprovments.length} General Improvements`
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MapCard;
