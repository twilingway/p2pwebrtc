import { useParams } from "react-router-dom";
import useWebRtc, { LOCAL_VIDEO } from "../../hooks/useWebRtc";
import s from "./Room.module.scss";

const Room = () => {
  const { id: roomID } = useParams();
  const { clients, provideMediaRef } = useWebRtc(roomID);

  console.log("clients :>> ", clients);

  return (
    <div className={s.root}>
      <h1>Room {roomID}</h1>
      <div className={s.video}>
        {clients.map((clientID) => {
          return (
            // <div key={clientID}>
            <video
              key={clientID}
              ref={(instance) => {
                provideMediaRef(clientID, instance);
              }}
              autoPlay
              playsInline
              muted={clientID === LOCAL_VIDEO}
            />
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Room;
