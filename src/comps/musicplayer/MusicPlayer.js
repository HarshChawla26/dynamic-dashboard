import React from 'react'
import "./music.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faForward,
    faBackward,
    faForwardStep,
    faBackwardStep,
    faPlay
  } from "@fortawesome/free-solid-svg-icons";
export default function MusicPlayer(props) {
  const {musicRef} = props
  return (
      <div id="music-player" ref={musicRef}><div className="media-controls">
    <div className="media-buttons">
      <button className="back-button media-button" label="back">
        <FontAwesomeIcon icon={faBackwardStep} className='button-icons' />
        <span className="button-text milli">Back</span>
      </button>
      <button className="rewind-button media-button" label="rewind">
      <FontAwesomeIcon icon={faBackward} className='button-icons' />
        <span className="button-text milli">Rewind</span>
      </button>
  
      <button className="play-button media-button" label="play">
      <FontAwesomeIcon icon={faPlay} className='button-icons' />
      <span className="button-text milli">Play</span>
      </button>
  
      <button className="fast-forward-button media-button" label="fast forward">
  
      <FontAwesomeIcon icon={faForward} className='button-icons' />
        <span className="button-text milli">Forward</span>
      </button>
  
      <button className="skip-button media-button" label="skip">
      <FontAwesomeIcon icon={faForwardStep} className='button-icons' />
        <span className="button-text milli">Skip</span>
      </button>
    </div>
    <div className="media-progress">
      <div className="progress-bar-wrapper progress">
        <div className="progress-bar">
        </div>
      </div>
      <div className="progress-time-current milli">
        15:23
      </div>
      <div className="progress-time-total milli">
        34:40
      </div>
    </div>
  </div></div>
  )
}
