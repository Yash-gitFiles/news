import React, { useContext } from "react";
import { UserContext } from "../provider/UserProvider";
import { useNavigate } from "react-router-dom";

function AuthGuard({ children }) {
  const user = useContext(UserContext);

  const navigate = useNavigate();

  if (!user) {
    return navigate("/login");
  }
  return <div>{children}</div>;
}

export default AuthGuard;
