const CreatePart = () => {
  const handleCreatePart = () => {
    console.log("CreatePart");
  };
  return (
    <button className="create-part-btn" onClick={handleCreatePart}>
      + Create Part
    </button>
  );
};

export default CreatePart;
