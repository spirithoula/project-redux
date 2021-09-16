import React from "react";
import moment from "moment";

weekdayshort = moment.weekdaysShort();
let weekdayshortname = this.weekdayshort.map(day => {
    return (
      <th key={day} className="week-day">
       {day}
      </th>
    );
 });

export default class Calendar extends React.Component {
  render() {
    return (
      <div>
        <h2>Calendar</h2>
      </div>
    );
  }
}