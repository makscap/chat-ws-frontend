import Rooms from "../Rooms/Rooms";
import Messages from "../Messages/Messages";
import s from "./Chat.module.css";
import { useEffect, useState } from "react";

function Chat() {
  const [connected, setConnected] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    const webSocket = new WebSocket(`ws://127.0.0.1:8080/?email=${userEmail}`);

    webSocket.onopen = function (data) {
      console.log(data);
      setConnected(true);
      webSocket.send(JSON.stringify({ event: "rooms" }));
      webSocket.onmessage = (event) => {
        const eventData = JSON.parse(event.data);

        console.log(eventData);

        if (eventData.event === "rooms") {
          setRooms((prev) => {
            console.log("oldValue", prev);
            return eventData.rooms;
          });
        }
        if (eventData.event === "new-room") {
          setRooms((prev) => {
            console.log("oldValue-new", prev);
            return [...rooms, eventData.room];
          });
        }
      };
    };
  }, []);

  return (
    <div className={s.chat}>
      <div className="w-[300px] border-1 border-black border-r ">
        {connected && rooms && <Rooms rooms={rooms} />}
      </div>
      <div className="flex-1 text-left ">{connected && <Messages />}</div>
    </div>
  );
}

export default Chat;
