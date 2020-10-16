import React from 'react';
import "./Jobs.css";
import Card from "./JobsCard";
import Banner from "./JBanner"
import { Link } from "react-router-dom";

function Jobs() {
    return (
        <div className="job">
            <Banner />
            <div className="job__section">
                    <Link to="/parttime">
                    <Card 
                    src="https://allied-paper.co.uk/wp-content/uploads/2020/03/parttime-1024x512-1.jpg"
                    title="Part Time Jobs"
                    description="Workers are considered to be part-time if they commonly work fewer than 30 hours per week."
                     />
                    </Link>
                    <Link to="/fulltime">
                    <Card 
                    src="https://www.careeraddict.com/uploads/article/3819/user-1823160-2017-03-17-11-05-08.jpg"
                    title="Full Time Jobs"
                    description="Join togethr to do your best with us."
                    />
                    </Link>

                </div>
            
        </div>
    )
}

export default Jobs
