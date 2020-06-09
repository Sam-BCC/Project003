import React from 'react';
import ReactDOM from 'react-dom';
import PlainFunction from "./plainFunction";
import ArrowFunction from "./arrowFunction";
import MediaCard from "./mediaCard";
import Gate from "./gate";
import './index.css';

const Assignments = () => {
    return (
    <div className="assignmentDiv">
        <h3>Bootcamp 2020 - React Assignment 3</h3>
        <PlainFunction firstName="Tarzan" lastName="Coon"/>
        <ArrowFunction/>
        <MediaCard title="Below is my pic" body="I know .. I know .. I am so Majestic!" imageUrl="https://i.pinimg.com/originals/5f/ff/5c/5fff5c8d4a97503b5c45ab0d43e992aa.jpg"/>
        <Gate isOpen={false}/>  

        My human's name is <strong>Samra </strong>
    </div>
    )
}

ReactDOM.render(<Assignments/>, document.querySelector('#root'));