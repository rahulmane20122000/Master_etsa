import React from 'react';
import WebinarCards from '../components/WebinarCards';

const Webinars=()=>{
    return(
        <div className="Technical_wrapper" style={{"marginTop":"10rem","marginBottom":"10rem"}}>
         <div className="Explore_title">
                <h1 style={{"textAlign":"center"}}><span>W</span>ebinars </h1>
                
            </div>
         <WebinarCards/>
        </div>
    );
}

export default Webinars;