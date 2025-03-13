import React, { useState } from "react";
import TimeSelector from "./TimeSelector";
import "./AppointmentScheduler.css";
import Navigation from "../Navigation/Navigation";

function AppointmentScheduler() {
  const [workDays, setWorkDays] = useState({
    "Thứ 2": true,
    "Thứ 3": true,
    "Thứ 4": true,
    "Thứ 5": true,
    "Thứ 6": true,
    "Thứ 7": false,
    "Chủ nhật": false,
  });

  const [timeRange, setTimeRange] = useState({
    start: "8:00",
    end: "12:00",
  });

  const handleDayChange = (day) => {
    setWorkDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const handleTimeChange = (type, value) => {
    setTimeRange((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div>
      <nav>
        <Navigation />
      </nav>

      <div className="appointment-scheduler-container">
        <div className="scheduler-card">
          <div className="scheduler-info">
            <p>
              Khách hàng của bạn chỉ có thể đặt lịch hẹn trong ngày làm việc và
              thời gian làm việc
            </p>
          </div>

          <div className="work-days-section">
            <h3>Ngày làm việc trong tuần</h3>
            <div className="day-checkboxes">
              {Object.keys(workDays).map((day) => (
                <div key={day} className="day-checkbox">
                  <input
                    type="checkbox"
                    id={day}
                    checked={workDays[day]}
                    onChange={() => handleDayChange(day)}
                  />
                  <label htmlFor={day}>{day}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="time-section">
            <h3>Giờ hẹn</h3>
            <TimeSelector
              startTime={timeRange.start}
              endTime={timeRange.end}
              onTimeChange={handleTimeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentScheduler;
