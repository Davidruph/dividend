import { Navigate } from "react-router-dom";

const Protected = ({ LoggedIn, children }) => {
  if (!LoggedIn) {
    //return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
