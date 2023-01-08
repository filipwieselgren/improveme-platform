import { useLocation } from "react-router-dom";
import { IBugReport } from "../../models/IBugReport";
import IFeatureRequest from "../../models/IFeatureRequest";
import IGeneralImprovements from "../../models/IGeneralImprovements";
import { IGetParts, IParts, showParts } from "../../models/IPart";

interface IMapCard {
  parts: showParts[];
  errend: IFeatureRequest[] | IGeneralImprovements[] | IBugReport[];
}

const MapCard = (props: IMapCard) => {
  const location = useLocation();

  const showRequests = (p: any) => {
    console.log(p);
  };

  return (
    <div className="section-card-wrapper">
      {props.parts.map((p: any, i: number) => {
        return (
          <div
            key={i}
            className="section-card-border"
            onClick={() => showRequests(p)}
          >
            <div className="section-title">{p.part}</div>
            <div className="amout">
              {p.requests.length}{" "}
              {location.pathname === "/feature-requests" ? (
                "Feature Requests"
              ) : location.pathname === "/general-improvements" ? (
                "General Improvements"
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
