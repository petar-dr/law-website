import React from 'react';
import videoBg from "../../../assets/video/video.mp4"

function VideoCover() {
  return (
    <div className='videoBox'>
        <video src={videoBg} autoPlay loop muted className='videoBox__videoBg'></video>
        <h1 className='videoBox__title'>Legal Advice. Strategy. Solutions.</h1>
    </div>
  )
}

export default VideoCover