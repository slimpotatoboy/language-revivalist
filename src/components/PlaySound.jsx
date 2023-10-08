import { useRef } from "react";

const PlaySound = ({ audioRef, src }) => {
  return (
    <div>
      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default PlaySound;
