import React from "react";
import { Link } from "react-router-dom";
import { setUser } from "./../utils/actions/userAction";
import { connect } from "react-redux";
function Home(props) {
  const { user, setUser } = props;
  const changeUser = () => {
    setUser("Jamile");
  };
  return (
    <section className="home">
      <h1>Welcome {user.userName}</h1>
      <Link to="/plant">View All Your Plants</Link>
      <Link to="/add-plant">Add A New Plant</Link>
      <button onClick={changeUser}>Change User</button>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, { setUser })(Home);
