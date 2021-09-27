import React from 'react';
import NonTechCards from "../components/NontechCards";

const NonTechnicalEvent=()=>{
    return(
        <React.Fragment>
        <div className="Technical_wrapper">
        <div className="Explore_title" style={{"marginTop":"10rem"}}>
                <h1 style={{"textAlign":"center"}}><span>Non</span>-Technical <span>E</span>vents</h1>
                
            </div>
        <NonTechCards/>
        </div>
        </React.Fragment>
    );
}

export default NonTechnicalEvent;