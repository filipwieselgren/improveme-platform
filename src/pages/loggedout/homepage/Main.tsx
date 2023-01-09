import fr from "../../../assets/fr.png";
import bee from "../../../assets/bee.png";
import increase from "../../../assets/increase.png";

const Main = () => {
  return (
    <div className="main">
      <div className="main-wrapper">
        <h1 className="txt-200 main-h1">
          Take controll over your user feedback{" "}
          <span className="line-h1 txt-400">|</span> Develop better products
        </h1>
        <section className="section-one">
          Make it easy for your users to provide your development team with
        </section>
        <section className="section-two">
          <div className="errend-wrapper">
            <div className="circle circle-green"></div>
            <div className="errend-txt">Feature requests</div>
            <img src={fr} alt="feature request" className="errend-img" />
          </div>
          <div className="errend-wrapper">
            <div className="circle circle-red"></div>
            <div className="errend-txt">Bug reports</div>
            <img src={bee} alt="feature request" className="errend-img" />
          </div>
          <div className="errend-wrapper">
            <div className="circle circle-yellow"></div>
            <div className="errend-txt">General improvements</div>
            <img src={increase} alt="feature request" className="errend-img" />
          </div>
        </section>
        <section className="section-three">
          so you can develop the best product.
        </section>
      </div>
    </div>
  );
};

export default Main;
