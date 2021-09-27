import React, { useState } from "react";
import { useLocation, useHistory } from "react-router";
import Button from "@material-ui/core/Button";


const EventRegistration = () => {
  const [data, setdata] = useState({
    name: "",
    EventName: "",
    subCat: "",
    mobile: "",
    email: "",
  });

  const location = useLocation();
  const history = useHistory();

  const handleEvent = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendData = async () => {
    const res = await fetch("https://v1.nocodeapi.com/etsa2021/google_sheets/wgvpGPVuDMRqEvVq?tabId=Sheet1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([[data.name,location.state.EventName,location.state.cat,data.mobile,data.email]]),
    });
    if(res){
      setdata({name:"",email:"",mobile:""});
      alert("Registration Done");
      history.push("/exploreEvents");
    }else{
      alert("REgistration failed");
    }
    
    
     
  };
  return (
    <div className="main_reg" style={{ marginTop: "10rem" }}>
      <div className="reg_content">
        <div className="Explore_title">
          <h1 style={{ textAlign: "center" }}>
            <span>E</span>vent <span>R</span>egistration
          </h1>
        </div>
        {console.log(location)}
        <div className="participant_form">
          <form method="POST">
            <h3>{location.state.EventName}</h3>
            <input name="Name" value={location.state.EventName} />
            <input name="subCat" value={location.state.cat} />
            <input
              placeholder="Enter Your Name"
              name="name"
              value={data.name}
              onChange={handleEvent}
              required
            />
            <input
              placeholder="Enter Your Email address"
              type="email"
              name="email"
              value={data.email}
              onChange={handleEvent}
              required
            />
            <input
              placeholder="Enter Your Mobile Number"
              type="tel"
              pattern="[0-9]{10}"
              name="mobile"
              value={data.mobile}
              onChange={handleEvent}
              required
            />
            <Button style={{ backgroundColor: "#298fe8" }} onClick={sendData}>
              Submit
            </Button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
