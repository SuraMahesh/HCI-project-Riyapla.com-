import React from 'react';
import "./FullTime.css";
import { Button } from '@material-ui/core';
import SearchResults from "../SearchResults";

function FullTime() {
    return (
        <div className="fullPage">
            <div className="fullPage__info">
            <Button
                variant="outlined">Job Title
            </Button>
            <Button
                variant="outlined">Location
            </Button>
            <Button
                variant="outlined">More filter
            </Button>
            </div>
            <SearchResults
                img="https://i.ytimg.com/vi/RmISPXl7bYY/maxresdefault.jpg"
                location="Nugegoda"
                title="Store Manager/Full Time"
                description="minimum 3 years of experience in a similar capacity with high level of communication skills.
                Prior experience in working for a retail store overseas, will be an added advantage."
                star={11.73}
                

            />

            <SearchResults
                img="https://www.mindinventory.com/blog/wp-content/uploads/2019/06/python-developer.png"
                location="Kandy"
                title="Python developer"
                description="We Are Looking For a Highly Motivated And Dynamic Developers To Join Our Team"
                star={20.73}
                

            />
            <SearchResults
                img="https://www.backblaze.com/blog/wp-content/uploads/2019/08/image1.jpg"
                location="Colombo"
                title="Senior Engineering Manager"
                description="Atleast we expect 3 years work experience with sound communication and leadership with efficiency "
                star={30.26}
                

            />
            <SearchResults
                img="https://resources.workable.com/wp-content/uploads/2017/08/shutterstock_589535042.jpg"
                location="Kadana"
                title="HR Executive"
                description="2-3 experience with extra communication skills required"
                star={11.30}
                

            />
            <SearchResults
                img="https://scholarship-positions.com/wp-content/uploads/2019/08/How-to-Become-a-University-Lecturer-1024x731.jpg"
                location="Colombo"
                title="Lecturer"
                description="Applications are invited for all candidates to fill the Lecturer Job Role "
                star={30.13}
                

            />
            <SearchResults
                img="https://dmi-uploads.imgix.net/general/How-to-Become-a-Freelance-Digital-Marketer_blog.jpg?fm=jpg&ixlib=php-1.1.0&q=3&w=2060&s=c80ba8d3deae477c67ce60ac23055c7a"
                location="Maharagama"
                title="Marketing Officer"
                description="Require highest qualification and talent with marketing skills"
                star={35,54}
                

            />
            <SearchResults
                img="https://miro.medium.com/max/5432/1*Ef8-opcxHXYVHqSSy5xqOA.jpeg"
                location="Battaramulla"
                title="House keeper"
                description="Family live in Battaramulla required female housekeeper."
                star={40.73}
                

            />
            <SearchResults
                img="https://mydream.lk/oc-content/uploads/93/10981.jpg"
                location="katunayaka"
                title="Account Assistant/Full Time"
                description="required 2 year work experience"
                star={11.73}
                

            />
            <SearchResults
                img="https://cdn.dubootcamp.com/wp-content/uploads/sites/66/2019/11/Denver_1.png"
                location="Kiribathgoda"
                title="Senior Web developer"
                description="3 year Work experience required and programming skills"
                star={11.73}
                

            />
            <SearchResults
                img="https://www.etcourse.com/sites/default/files/2019-01/Highlights-Job%20Opportunities.jpg"
                location="Chilaw"
                title="Electronic Technician"
                description="5 year work experience of male technician required"
                star={20.25}
                

            />

        </div>
    )
}

export default FullTime
