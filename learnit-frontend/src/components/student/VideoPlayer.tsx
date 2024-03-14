import { Player } from "video-react";

const VideoPlayer = () => {
  return (
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
  );
};

export default VideoPlayer;
