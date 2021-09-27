import React from 'react'
import Button from '@material-ui/core/Button';
import { useLocation } from "react-router";
import { NavLink } from 'react-router-dom';
const Information = () => {

    const location=useLocation();
    return (
        <div>
        <div className="Information_wrapper">
            <div className="main_Information">
                <img src={location.state.img} alt="img"></img>
                <h1>{location.state.EventName}</h1>
                <h4>Description</h4>
                <p>{location.state.des}</p>
                <h4>Rules</h4>
                <p>{location.state.rules}</p>
                <h4>Prizes</h4>
                <p>Prize 1: {location.state.price1}</p>
                <p>Prize 2: {location.state.price2}</p>
                <h4>Event Head</h4>
                <p>{location.state.EventHead}</p>
                <h4>Rounds</h4>
                <p>{location.state.rounds}</p>
                <h4>Team Members</h4>
                <p>{location.state.team}</p>
                <h4>Event Date</h4>
                <p>{location.state.date}</p>
                <Button style={{"backgroundColor":"#298fe8"}}><NavLink to={{
                pathname:`/${location.state.EventName}/eventRegistration`,
                state:{EventName:location.state.EventName,img:location.state.imgSrc,des:location.state.des,cat:location.state.cat,rules:location.state.rules,price1:location.state.price1,price2:location.state.price2,price3:location.state.price3}
              }} style={{"textDecoration":"none","color":"white"}}>Register</NavLink></Button>
            </div>
            </div>
        </div>

    )
}

export default Information;
