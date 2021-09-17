import React from "react";
import { Link } from "react-router-dom";
import letterConverter from "../data/fakeassign";

export default function Grade(props) {
const assignment = props.assignment;
return (
    <div project="grading">
    <h2>Title of Project: <Link to={`/project/${project.id}`}>{project.projTitle}</Link></h2>
    <h4>Due Date: {project.dueDate}</h4>
    <h4>Number of Group Members: {project.groupSize}</h4>
    <h4>Score: {project.gradeCalc}</h4>
    <h4>Letter Grade: {letterConverter(project.gradeCalc)}</h4>
    </div>
);
}