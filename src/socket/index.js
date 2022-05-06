import { io } from "socket.io-client";

const options = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

const socket = io("http://localhost:3001", options);
// const socket = io("http://websocket.aksakova.keenetic.name", options);
// const socket = io("http://192.168.1.57:3001", options);

export default socket;
