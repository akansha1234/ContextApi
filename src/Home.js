import React, { useContext } from "react";
import { UserContext } from "./UserContext";
const Home = () => {
  const { user } = useContext(UserContext);
  console.log(useContext(UserContext));
  return <div>{user}</div>;
};
export default Home;
