import React from "react";
import logo from "../assets/images/r.jpg";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import BootstrapCards from "../components/BootstrapCards";
import v1 from '../assets/videos/video1.mp4';
import v2 from "../assets/videos/video2.mp4";

const Home = () => {
  return (
    <div className="home_wrapper">
      <div className="main_div_home">
        <div className="left_div_home">
          <img src={logo} alt="logo"></img>
          <p>
            Participate<span>.</span>Learn<span>.</span>Win
          </p>
          <Button style={{ backgroundColor: "#FF7A00" }} variant="raised">
            <NavLink
              to="/exploreEvents"
              style={{ color: "white", textDecoration: "none" }}
            >
              Register Now
            </NavLink>
          </Button>
        </div>
        <div className="right_div_home">
          <lottie-player
            src="https://assets8.lottiefiles.com/private_files/lf30_k985zjll.json"
            background="transparent"
            speed="1"
            style={{
              height: "60rem",
              width: "60rem",
              transform: "translateX(10%)",
              marginTop: "-13rem",
              zIndex: "-1",
            }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
      <div className="poweredby">
        <h2>
          NATIONAL LEVEL EVENT
        </h2>
      </div>
      <div className="bootCards">
        <BootstrapCards video={v1} path="/technicalEvents" name="Technical Event"/>
        <BootstrapCards video={v2} path="/NonTechnicalEvent"  name="Non-Tech Event"/>
        {/* <BootstrapCards img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" name="Shubham Kale" Desig="President"/> */}
        
       
      </div>
    </div>
  );
};

export default Home;
