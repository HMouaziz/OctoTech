import { Link } from "react-router-dom";
import img from "../../assets/images/app-home.png";
import GreenTracker from "../../components/GreenTracker/GreenTracker";
import "./Homepage.scss";
export const Homepage = () => {
  return (
    <>
      <div className="home__top"></div>
      <GreenTracker />
      <div className="home__image">
        <Link to="/info" className="home__navigate">
          <button className="home__info">See How Now</button>
        </Link>
      </div>
    </>
  );
};
