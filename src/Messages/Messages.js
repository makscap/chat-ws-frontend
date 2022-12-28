import { useState, useEffect } from "react";
import s from "./Messages.module.css";

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: true,
      },
      {
        id: 2,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
      {
        id: 3,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
      {
        id: 4,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: true,
      },
      {
        id: 5,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
      {
        id: 6,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
      {
        id: 7,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: true,
      },
      {
        id: 8,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: true,
      },
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: true,
      },
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: true,
      },
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: true,
      },
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
      {
        id: 1,
        text: "Merry Christmas! 🌲",
        date: "31.12.22",
        my: false,
      },
    ]);
  }, []);

  return (
    <div className={s.wrap}>
      <div className={s.content}>
        <ul className="">
          {messages.map((message, i) => (
            <li key={i} className={message.my ? s.item : s.itemRight}>
              <div className={s.date}>{message.date}</div>
              <span className={message.my ? s.text : s.companion}>
                {message.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.control}>
        <textarea rows="1" type="text" placeholder="Write your message" />
        <button className={s.button}>SEND</button>
      </div>
    </div>
  );
}

export default Messages;
