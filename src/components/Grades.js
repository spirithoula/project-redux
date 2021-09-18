import React from "react";
import { Link } from "react-router-dom";
import letterConverter from "../data/fakeassign";
import "../style/gradebook.css";

export default function Grade(props) {
const assignment = props.assignment;
return (
    <div assignment="grading">
    <h2>Title of assignment: <Link to={`/assignment/${assignment.id}`}>{assignment.assignTitle}</Link></h2>
    <h4>Due Date: {assignment.dueDate}</h4>
    <h4>Number of Group Members: {assignment.groupSize}</h4>
    <h4>Score: {assignment.gradeCalc}</h4>
    <h4>Letter Grade: {letterConverter(assignment.gradeCalc)}</h4>
    </div>
);
}