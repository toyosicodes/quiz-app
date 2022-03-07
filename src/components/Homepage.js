import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="home">
      <p>How well do you know pop culture? Take this quiz to find out!</p>
      <div className="btn">
        <Link to="quiz">Go</Link>
      </div>
    </div>
  );
};

export default Homepage;
