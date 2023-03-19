export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("token") || "");

  console.log("token:", token);

  return token;
};
