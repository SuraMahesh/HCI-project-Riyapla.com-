import React from 'react';
import "./PartTime.css";
import { Button } from '@material-ui/core';
import SearchResults from "../SearchResults";

function PartTime() {
    return (
        <div className="partPage">
        <div className="partPage__info">
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
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRunX3T-1SzjsZv_shCjjYYGGHU8zvlu421Vw&usqp=CAU"
            location="Malabe"
            title="Data Entry Operators/Part Time"
            description="Data Entry Jobs for Work From Home"
            star={10.00}

        />
        <SearchResults
            img="https://lh3.googleusercontent.com/proxy/B3XZvxa4d0mtORaL_Ba8UF0NvvQ6kugXC13iuZMSWP5pQ0oz_Swok1Y5aO6hu39nR1m6CelTqMgA8kiwHTICJPgJuYI0oy7qrkCg2IgjlXzESYl6aImb"
            location="Colombo"
            title="Financial Analyst/Part Time"
            description="A Fast growing startup under hSenid Mobile is looking for a Financial Analyst to work with their senior team in developing a financial model and plans for its next phase of growth."
            star={5.75}

        />
        <SearchResults
            img="https://www.jobawareness.com/wp-content/uploads/2012/10/call-center-responsibilities.jpg"
            location="Katunayaka"
            title="Call Center Executives/Part Time"
            description="Fluency in Sinhala with a good understanding of English"
            star={9.40}

        />
        <SearchResults
            img="https://www.ziprecruiter.com/blog/zrs-0005/blog/wp-content/uploads/2019/11/1017296670_Computer-Support-SpecialIst-628x419.jpg"
            location="Kiribathgoda"
            title="Computer Support Specialist/Part Time"
            description="Complete office work to include cash reconciliation and time edits. Support in providing a well merchandised and in-stock store for the customer to shop. Complete merchandise operations to include RTVs, Price Changes and NOHs. Delivering friendly customer service."
            star={18.20}

        />
        <SearchResults
            img="https://1.bp.blogspot.com/-YYzMfp9s5HA/W1vds1Xu04I/AAAAAAAABfw/r7hIGy_q0usiIFXEtVsUNRQUGEyoPI9IQCLcBGAs/s1600/office-assistant-resume-concept-art-1.jpg"
            location="Negombo"
            title="Office Assistant/Part Time"
            description="We welcome people of different backgrounds, experiences, abilities and perspectives. We are an equal opportunity employer and a fun and supportive place to work."
            star={25.50}

        />
        <SearchResults
            img="https://www.york.ac.uk/media/cll/images/penimagecreative.jpg"
            location="Battaramulla"
            title="Creative Writer/Part Time"
            description="We are looking for a dynamic and creative writer to be part of our marketing team on part time"
            star={10.49}

        />
        <SearchResults
            img="https://whova.com/wp-content/uploads/2014/08/event-organizer-Felena-Hanson.jpg"
            location="Borella"
            title="Event Organizer/Part Time"
            description="Preferred age 22 to 28 years old. A very attractive package and incentive scheme will be offered for the successful candidate."
            star={15.52}

        />
        <SearchResults
            img="https://cdn.slidesharecdn.com/ss_thumbnails/a-3-916482d72f1e4eb6c99db6e95d4f46fa0f605e46-150506121555-conversion-gate02-thumbnail-4.jpg?cb=1430914819"
            location="Gampaha"
            title="Project Coordinator/Part Time"
            description="We’re on the hunt for the best talent for the development center established in Sri Lanka "
            star={35.00}

        />
        <SearchResults
            img="https://www.isoc.com/wp-content/uploads/Nick-Walshe-Media-Training-Shot-05-1.jpg"
            location="Wattala"
            title="Media Trainers/Part Time"
            description="At least five years’ experience working for international media development agencies as a lead trainer"
            star={9.16}

        />
        <SearchResults
            img="https://lh3.googleusercontent.com/proxy/oG5KPHwFPO4Hjl45MAgwdnBDLWK2hjGZO-hGzoJYOx-TqTubEUK-jEi7HEo2BT25eQwNhDhUNQMK2ZE_"
            location="Chilaw"
            title="Retail Sale Associate - Product Specialist/Part Time"
            description="High School Diploma or GED equivalent. 1 years of retail experience in a direct customer interactive environment preferred."
            star={10.00}

        />
      

    </div>
    )
}

export default PartTime

