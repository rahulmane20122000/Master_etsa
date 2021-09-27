import React from "react";
import NonTech from "../EventData/NonTechnicalData";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import TextTruncate from "react-text-truncate";

const NontechCards = () => {
  return (
    <React.Fragment>
      <div className="main_cards">
        {NonTech.map((val, Index) => {
          return (
            <div className="cards_data">
              <div className="cards_layer">
                <img src={val.imgSrc} alt="tech" />
                <h3>{val.EventName}</h3>
                <TextTruncate
                  line={2}
                  element="p"
                  truncateText="…"
                  text={val.des}
                  textTruncateChild={
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
                          EventHead:val.EventHead,
                      rounds:val.rounds,
                      team:val.team,
                      date:val.date,
                        },
                      }}
                    >
                      More
                    </NavLink>
                  }
                />
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
                        EventHead:val.EventHead,
                      rounds:val.rounds,
                      team:val.team,
                      date:val.date,
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

export default NontechCards;
