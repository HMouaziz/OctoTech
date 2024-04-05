import React from "react";
import "./timeBlock.scss";

export default function timeBlock({ hour, isGreen }) {
  return (
    <>
      <div
        className={
          isGreen ? "tracker__hour tracker__hour--green" : "tracker__hour"
        }
      >
        {hour}
      </div>
    </>
  );
}
