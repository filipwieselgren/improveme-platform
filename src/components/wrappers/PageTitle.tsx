interface IPageTitle {
  text: string;
}

const PageTitle = (props: IPageTitle) => {
  return (
    <div className="page-title-wrapper">
      <h3 className="title">{props.text}</h3>
    </div>
  );
};

export default PageTitle;
