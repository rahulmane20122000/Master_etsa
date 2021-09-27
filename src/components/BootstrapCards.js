import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const style = {
  textDecoration: "none",
  color: "white",
  borderBottom: "none",
};
const BootstrapCards = (props) => {
  return (
    <div>
      <div className="members">
        <Card
          style={{
            width: "25rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "5px 5px 25px -5px rgba(0,0,0,0.3)",
            borderRadius: "25px",
            border: "none",
            marginRight: "5rem",
          }}
        >
          {/* <Card.Img style={{"borderRadius":"25px","width":"25rem","height":"25rem","boxShadow": "5px 5px 35px -5px rgba(0,0,0,0.3)"}} variant="top" src={props.img} /> */}
          <video  loop autoPlay>
            <source src={props.video} type="video/mp4" />
          </video>
          <Card.Body>
            <Card.Title style={{ fontWeight: "700", textAlign: "center" }}>
              {props.name}
            </Card.Title>
            <Card.Text style={{ fontWeight: "700", textAlign: "center" }}>
              {props.Desig}
            </Card.Text>

            <Button
              style={{
                width: "20rem",
                borderRadius: "25px",
                boxShadow: "5px 5px 15px -5px rgba(0,0,0,0.3)",
                fontWeight: "600",
                letterSpacing: "5px",
              }}
              variant="primary"
            >
              <NavLink style={style} exact to={props.path}>
                Register
              </NavLink>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default BootstrapCards;
