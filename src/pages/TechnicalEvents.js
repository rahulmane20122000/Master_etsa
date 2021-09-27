import React from 'react'
import Cards from '../components/Cards'

const TechnicalEvents = () => {
    return (
        <div className="Technical_wrapper" style={{"marginTop":"10rem","marginBottom":"10rem"}}>
        <div className="Explore_title">
                <h1 style={{"textAlign":"center"}}><span>T</span>echnical <span>E</span>vents</h1>
                
            </div>
            <div className="cards_div_wrapper">
            <Cards/>
            </div>
        </div>
    )
}

export default TechnicalEvents;
