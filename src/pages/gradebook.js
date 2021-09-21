import React from "react";
import Grades from "../components/Grades";
import "../style/gradebook.css";

export default function Grades(props) {
    return (
        <div>
        <h1 className="header">Gradebook</h1>
        <div className="gradebook">
        {props.assignment.map(assignment => {
            return <Grade project={assignment}/>
        })}
        </div>
        </div>
    );
    }