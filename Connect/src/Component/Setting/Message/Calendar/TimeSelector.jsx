import React from "react";
import "./TimeSelector.css";

function TimeSelector({ startTime, endTime, onTimeChange }) {
  const timeOptions = [
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ];

  return (
    <div className="time-selector">
      <div className="time-dropdown">
        <select
          value={startTime}
          onChange={(e) => onTimeChange("start", e.target.value)}
        >
          {timeOptions.map((time) => (
            <option key={`start-${time}`} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="time-separator">Đến</div>

      <div className="time-dropdown">
        <select
          value={endTime}
          onChange={(e) => onTimeChange("end", e.target.value)}
        >
          {timeOptions.map((time) => (
            <option key={`end-${time}`} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TimeSelector;
