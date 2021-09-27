import React from 'react'
import ExploreEventCards from '../components/ExploreEventCards'


const Explore = () => {
    return (
       
        <div className="main_explore">
            <div className="Explore_title">
                <h1><span>E</span>xplore <span>E</span>vents</h1>
                
            </div>
            <div className="Event_cards">
            <ExploreEventCards title="Technical Event's" path="/technicalEvents" />
            <ExploreEventCards title="Non-Technical Event's" path="/NonTechnicalEvent"/>
            {/* <ExploreEventCards title="Webinar's" path="/webinars"/> */}
            </div>
        </div>
       
    )
}

export default Explore;
