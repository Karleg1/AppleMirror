import React, { useState, useEffect } from 'react';

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="clock-container">
      <div className="clock">
        <p> Time : {date.toLocaleTimeString()}</p>
      </div>
      <div className="date">
        <p> Date : {date.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default DateTime;
