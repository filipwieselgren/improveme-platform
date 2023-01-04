interface IPartCard {
  img: string;
  title: string;
  info: string;
}

const PartCard = (props: IPartCard) => {
  return (
    <>
      <div className="card-border">
        <div className="title-card-wrapper">
          <img src={props.img} alt="" className="card-img" />
          <h1 className="card-title">{props.title}</h1>
        </div>

        <div className="card-info">{props.info}</div>
      </div>
    </>
  );
};

export default PartCard;
