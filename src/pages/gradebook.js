import React from "react";
import Grades from "../components/Grades";

export default function Gradebook(props) {
    return (
        <div>
        <h1 className="hi">Gradebook</h1>
        <div className="gradebook">
        {props.projects.map(project => {
            return <Grade project={project}/>
        })}
        </div>
        </div>
    );
    }