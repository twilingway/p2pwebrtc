import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../../socket";
import ACTIONS from "../../socket/action";
import s from "./Main.module.scss";

import { v4 } from "uuid";

const Main = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const rootNodeRef = useRef(null);

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
      if (rootNodeRef.current) {
        console.log("rootNodeRef :>> ", rootNodeRef.current);
        setRooms(rooms);
      }
    });
  }, []);
  console.log("rooms :>> ", rooms);
  return (
    <div className={s.root} ref={rootNodeRef}>
      <h1>Available Rooms</h1>

      <ul>
        {rooms.map((roomID) => (
          <li key={roomID}>
            {roomID}{" "}
            <button onClick={() => navigate(`/room/${roomID}`)}>
              JOIN ROOM
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(`/room/${v4()}`)}>Create New Room</button>
    </div>
  );
};

export default Main;
