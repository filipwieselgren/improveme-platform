import { useNavigate } from "react-router-dom";

const ProfileImgDropdown = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="profileImg-dropdown-border">
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default ProfileImgDropdown;
