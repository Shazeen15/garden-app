import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./../context/UserContext";
import { setUser } from "./../utils/actions/userAction";

function Home() {
  const { user, userDispatch } = useContext(UserContext);

  const changeUser = () => {
    userDispatch(setUser("jamile"));
  };
  return (
    <section className="home">
      <h1>Welcome {user.user.userName}</h1>
      <Link to="/plant">View All Your Plants</Link>
      <Link to="/add-plant">Add A New Plant</Link>
      <button onClick={changeUser}>Change User</button>
    </section>
  );
}

export default Home;
