const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

const sendToAllUserConnections = (userSockets, payload) => {
  userSockets.forEach((socket) => socket.send(JSON.stringify(payload)));
};

const TYPE = {
  ROOM: "room",
  MESSAGE: "message",
};

const ROOM_EVENT = {
  NEW_ROOM: "new-room",
  DELETE_ROOM: "delete-room",
  LIST: "rooms",
};

const socketMapper = new Map();

wss.on("connection", function connection(ws, req) {
  const userEmail = req.url.split("=")[1];

  socketMapper.forEach((userSockets, key) => {
    if (userEmail !== key) {
      sendToAllUserConnections(userSockets, {
        type: TYPE.ROOM,
        event: ROOM_EVENT.NEW_ROOM,
        room: userEmail,
      });
    }
  });

  if (socketMapper.has(userEmail)) {
    socketMapper.get(userEmail).push(ws);
  } else {
    socketMapper.set(userEmail, [ws]);
  }

  ws.send(
    JSON.stringify({
      type: TYPE.ROOM,
      event: ROOM_EVENT.LIST,
      rooms: Array.from(socketMapper.keys()),
    })
  );

  ws.on("message", function incoming(rawData) {});

  ws.on("close", function close() {
    socketMapper.delete(userEmail);
    socketMapper.forEach((userSockets) =>
      sendToAllUserConnections(userSockets, {
        type: TYPE.ROOM,
        event: ROOM_EVENT.DELETE_ROOM,
        room: userEmail,
      })
    );
  });
});

console.log("Started");
