import Rooms from "../Rooms/Rooms";
import Messages from "../Messages/Messages";
import s from "./Chat.module.css";
import { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
  const rooms = new Set(state)
  switch (action.type) {
    case 'rooms': {
      action.rooms.forEach(room => rooms.add(room));
      return Array.from(rooms);
    }
    case 'new-room': {
      rooms.add(action.room);
      return Array.from(rooms);
    }
    case 'delete-room': {
      rooms.delete(action.room);
      return Array.from(rooms);
    }
    default: {
      console.log('Unknown action: ' + action.type);
    }
  }
}

function Chat() {
  const [connected, setConnected] = useState(false);
  const [state, dispatch] = useReducer(reducer, [])


  useEffect(() => {
    function connect () {
      const userEmail = localStorage.getItem("email");
      const webSocket = new WebSocket(`ws://127.0.0.1:8080/?email=${userEmail}`);

      webSocket.onopen = function () {
        setConnected(true);
        console.log('Connected!')

        webSocket.onmessage = (event) => {
          const eventData = JSON.parse(event.data);
          if (eventData.type === 'room') {
            dispatch({
              type: eventData.event,
              rooms: eventData.rooms || [],
              room: eventData.room || [],
            })
          }
        };
      };

      webSocket.onclose = function(e) {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
        setTimeout(function() {
          connect();
        }, 1000);
      };
    
      webSocket.onerror = function(err) {
        console.error('Socket encountered error: ', err.message, 'Closing socket');
        webSocket.close();
      };
    }

    connect();
  }, []);

  return (
    <div className={s.chat}>
      <div className="w-[300px] border-1 border-black border-r ">
        {connected && <Rooms rooms={state} />}
      </div>
      <div className="flex-1 text-left ">{connected && <Messages />}</div>
    </div>
  );
}

export default Chat;
