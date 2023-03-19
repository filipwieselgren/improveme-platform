export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      return JSON.parse(token);
    } catch (error) {
      console.error("Error parsing token: ", error);
    }
  }
  return null;
};
