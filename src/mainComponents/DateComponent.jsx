import { useState, useEffect } from 'react';
import './DateComponent.css';

function DateComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(formatDate(currentDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDate = new Date();
      if (newDate.getDate() !== currentDate.getDate()) {
        setCurrentDate(newDate);
        setFormattedDate(formatDate(newDate));
        console.log(formattedDate);
      }
    }, 1000 * 60); // Update every minute for demonstration, adjust as needed

    return () => clearInterval(intervalId);
  });

  function formatMonth(date) {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return month[date.getMonth()];
  }
  function formatDay(date) {
    return date.getDate().toString();
  }
  function formatWeekDay(date) {
    const weekDay = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    return weekDay[date.getDay()];
  }

  function formatDate(date) {
    var obj = {
      month: formatMonth(date),
      day: formatDay(date),
      weekDay: formatWeekDay(date)
    };
    // console.log(obj);
    return obj;
  }
  return (
    <div className='date-container'>
      <div className='date-weekday'>{formattedDate.weekDay}</div>
      <div className='date-day'>{formattedDate.day}</div>
      <div className='date-month'>{formattedDate.month}</div>
    </div>
  );
}

export default DateComponent;
