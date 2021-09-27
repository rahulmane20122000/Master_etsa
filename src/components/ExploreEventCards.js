import React from 'react';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";


const style={
  "textDecoration":"none",
  "color":"white",
  "borderBottom":"none"
}

const ExploreEventCards=(props)=>{
    return(
       <React.Fragment>
        <div className="main_cards_div">
        <div className="card_det">
             
              <h1>{props.title}</h1>
              {/* <NavLink className="Explore_link" exact to="/">Explore<i style={{"marginLeft":"0.25rem"}} class="fas fa-angle-double-right"></i></NavLink> */}
              <Button style={{"backgroundColor":"#FF7A00"}}><NavLink style={style} exact to={props.path}>Explore</NavLink><i style={{"marginLeft":"0.25rem"}} class="fas fa-angle-double-right"></i></Button>
        </div>
        </div>
      </React.Fragment>
    )
}

export default ExploreEventCards;