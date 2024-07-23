import React, { useRef, useState } from 'react'
import video from "./../assets/college-video.mp4"


const Videoplayer = ( {playstate,setPlayState}) => {
    const player = useRef(null);
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }

  return (
    <div onClick={closePlayer} ref={player} className={`Videoplayer ${playstate ? '' : "hide"}`}>
    <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
