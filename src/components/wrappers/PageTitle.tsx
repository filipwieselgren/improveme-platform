interface IPageTitle {
  text: string;
  img: string;
}

const PageTitle = (props: IPageTitle) => {
  return (
    <div className="page-title-wrapper">
      {props.img === "" ? (
        <></>
      ) : (
        <img src={props.img} alt="title-img" className="title-img" />
      )}
      <h3 className="title">{props.text}</h3>
    </div>
  );
};

export default PageTitle;
