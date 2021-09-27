import React from "react";
import webinardata from "../EventData/WebinarData";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const WebinarCards = () => {
  return (
    <React.Fragment>
      <div className="main_cards">
        {webinardata.map((val, Index) => {
          return (
            <div className="cards_data">
              <div className="cards_layer">
                <img src={val.imgSrc} alt="tech" />
                <h3>{val.EventName}</h3>
                <p style={{"padding":"20px"}}>{val.des}</p>
                <Button style={{ backgroundColor: "#298fe8" }}>
                  <NavLink
                    to={{
                      pathname: `/${val.EventName}/eventDetails`,
                      state: {
                        EventName: val.EventName,
                        img: val.imgSrc,
                        des: val.des,
                        cat: val.cat,
                        rules: val.rules,
                        price1: val.price1,
                        price2: val.price2,
                        price3: val.price3,
                      },
                    }}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Register
                  </NavLink>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default WebinarCards;
