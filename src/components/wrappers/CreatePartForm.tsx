import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IParts } from "../../models/IPart";
import logo from "../../assets/ImproveMe.png";

interface ICreatePartForm {
  tooglePart(): void;
  setRenderPage: React.Dispatch<
    React.SetStateAction<{
      render: string;
    }>
  >;
}

const CreatePartForm = (props: ICreatePartForm) => {
  const [section, setSection] = useState<IParts>({
    section: "",
    featureRequest: [],
    bugs: [],
    genralImprovments: [],
  });

  const [success, setSuccess] = useState<boolean>(false);

  const createSection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSection({
      section: e.target.value,
      featureRequest: [],
      bugs: [],
      genralImprovments: [],
    });
  };

  const sendSectionFetch = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (section.section.length > 0) {
      await fetch("http://localhost:8000/api/v1/section", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify(section),
      });
      setSuccess(true);
      props.setRenderPage({ render: "" });
      return;
    }

    console.log("No value");
  };

  return (
    <div className="CreatePartForm-wrapper">
      <div className="form-border">
        <div className="create-part-title-wrapper">
          {success ? <h4></h4> : <h4>Create new section</h4>}
          <AiFillCloseCircle
            className="close-create-part"
            onClick={() => props.tooglePart()}
          />
        </div>

        {success ? (
          <div className="success-wrapper">
            <h3>Your section has been created</h3>

            <img src={logo} alt="Logo image" />
          </div>
        ) : (
          <form>
            <label htmlFor="create-part">Name of the section</label>
            <input
              type="text"
              id="create-part"
              onChange={(e) => createSection(e)}
            />
            <button
              className="submit-section"
              onClick={(e) => sendSectionFetch(e)}
            >
              Create Section
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreatePartForm;
