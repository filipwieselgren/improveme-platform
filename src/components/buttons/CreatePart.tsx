interface ICreatePart {
  tooglePart(): void;
}

const CreatePart = (props: ICreatePart) => {
  return (
    <button className="create-part-btn" onClick={() => props.tooglePart()}>
      + Create Section
    </button>
  );
};

export default CreatePart;
