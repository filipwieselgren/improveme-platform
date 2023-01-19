interface IBars {
  frAmout: number;
  brAmout: number;
  giAmout: number;
  allRequests: number;
}

const Bars = (props: IBars) => {
  return (
    <div className="bars-full-wrapper">
      <div className="bars-title-wrapper">
        <h4 className="bars-title">Distribution of requests</h4>
        <div className="box-wrapper">
          <div className="fr-box box "></div> <span>Feature Requests</span>
          <div className="gi-box box"></div> <span>General Improvements</span>
          <div className="br-box box"></div> <span>Bug Reports</span>
        </div>
      </div>
      <div className="bars-wrapper">
        <div className="bar fr-bar" style={{ height: `${props.frAmout}%` }}>
          {Number.isNaN(props.frAmout) ? "0 %" : `${props.frAmout} %`}
        </div>
        <div className="bar gi-bar" style={{ height: `${props.brAmout}%` }}>
          {Number.isNaN(props.brAmout) ? "0 %" : `${props.brAmout} %`}
        </div>
        <div className="bar br-bar" style={{ height: `${props.giAmout}%` }}>
          {Number.isNaN(props.giAmout) ? "0 %" : `${props.giAmout} %`}
        </div>
      </div>
      <div className="total-requests">Total requests: {props.allRequests}</div>
    </div>
  );
};

export default Bars;
