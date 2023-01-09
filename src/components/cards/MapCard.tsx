import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IBugReport } from "../../models/IBugReport";
import IFeatureRequest from "../../models/IFeatureRequest";
import IGeneralImprovements from "../../models/IGeneralImprovements";
import { IGetParts, IParts, IShowParts } from "../../models/IPart";

interface IMapCard {
  errend: IShowParts[];
  showRequests(requests: IShowParts): void;
}

const MapCard = (props: IMapCard) => {
  const location = useLocation();

  return (
    <>
      <div className="section-card-wrapper">
        {props.errend.map((p: IShowParts, i: number) => {
          return p.requests.filter((r) => r.approved === false).length > 0 ? (
            <div
              key={i}
              className="section-card-border"
              onClick={() => props.showRequests(p)}
            >
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
          ) : (
            <></>
          );
        })}
      </div>
    </>
  );
};

export default MapCard;
