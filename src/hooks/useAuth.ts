import { useEffect, useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState({ loggedIn: true });
  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");

    tokenLocal ? setToken({ loggedIn: true }) : setToken({ loggedIn: false });
  }, []);

  return token && token.loggedIn;
};
