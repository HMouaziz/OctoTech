import { useEffect, useState } from "react";
import "./GreenTracker.scss";
import TimeBlock from "../timeBlock/timeBlock";
const formatHour = (hour) => {
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  const suffix = hour < 12 ? "am" : "pm";
  return `${hour12}${suffix}`;
};
const calculateSavings = (greenHours, savingsPerHour) => {
  return greenHours.length * savingsPerHour;
};

export default function GreenTracker() {
  const [greenHours, setGreenHours] = useState([]);
  const [startHour, setStartHour] = useState(null);
  const [endHour, setEndHour] = useState(null);

  // Function to generate a random sequence of consecutive hours
  const generateGreenHours = () => {
    const start = Math.floor(Math.random() * 24); // to ensure at least 2 consecutive hours
    const end = start + Math.floor(Math.random() * (24 - start));
    setStartHour(start);
    setEndHour(end);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  const savingsPerHour = 0.1;
  useEffect(() => {
    setGreenHours(generateGreenHours());
  }, []); // The empty array ensures this effect only runs on mount, mimicking a refresh

  const isGreen = (hour) => greenHours.includes(hour);
  const savings = calculateSavings(greenHours, savingsPerHour);

  return (
    <div className="tracker">
      <h2 className="tracker__title">Today's Green Tracker</h2>
      <div className="tracker__container">
        {Array.from({ length: 24 }, (_, i) => (
          <TimeBlock key={i} hour={i} isGreen={isGreen(i)} />
        ))}
      </div>
      <div className="tracker__flex">
        <div className="tracker__time">12am</div>
        <div className="tracker__time">12am</div>
      </div>
      <div className="tracker__text">
        {startHour !== null &&
          endHour !== null &&
          `The best time to use energy today: ${formatHour(startHour)} - ${formatHour(endHour)}`}
      </div>
      <div className="tracker__text">
        By using electricity now, You will be saving up to :
        <span style={{ color: "#18f0b8" }}> £ {savings.toFixed(2)} </span>
      </div>
    </div>
  );
}
