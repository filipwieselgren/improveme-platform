import { useEffect, useState } from "react";
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

  return (
    <div className="section-card-wrapper">
      {props.parts.map((p: showParts, i: number) => {
        return (
          <div key={i} className="section-card-border">
            <div className="section-title">{p.part}</div>
            <div className="amout">
              {p.requests.filter((r) => r.approved === false).length}
              {location.pathname === "/feature-requests" ? (
                ` Feature ${
                  p.requests.filter((r) => r.approved === false).length < 2
                    ? "Request"
                    : "Requests"
                }`
              ) : location.pathname === "/general-improvements" ? (
                ` General ${
                  p.requests.filter((r) => r.approved === false).length < 2
                    ? "Improvement"
                    : "Improvements"
                }`
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
