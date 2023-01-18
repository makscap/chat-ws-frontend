// import { useState, useEffect } from "react";
import s from "./Rooms.module.css";

function Rooms({ rooms }) {
  return (
    <div className={s.rooms}>
      <h2 className={s.title}>My messages</h2>
      <ul>
        {rooms.map((message, i) => (
          <li key={i}>
            <button className={s.button}>
              <div className={s.nameBlock}>
                <div className={s.avatar}>{message}</div>
                <div>{message}</div>
              </div>
              {/* <div>{message.date}</div> */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rooms;
