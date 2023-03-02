import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay, playColor }) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
    size={35}
    className={playColor || 'text-green-900/60'}
    onClick={handlePause}
  />
) : (
  <FaPlayCircle
    size={35}
    className={playColor || 'text-green-900/60'}
    onClick={handlePlay}
  />
));

export default PlayPause;
