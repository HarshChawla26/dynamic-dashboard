import React from 'react'
import './sidebar.css'

function SideBar(props) {
  const {timeRef,weatherRef,musicRef} = props;

  function handleToggleTime(){
    timeRef.current.classList.toggle("d-none") 
  }
  function handleWeatherToggle(){
    weatherRef.current.classList.toggle("d-none") 
  }
  function handlemusicTime(){
    musicRef.current.classList.toggle("d-none") 
  }

  return (
    <div id='sidebar'>
      <div id='widget-list'>
        <hr></hr>
        <div id="timeWidget" className="widget">Time Widget
          <button onClick={handleToggleTime} className='plus'>Toggle</button>
        </div>
        <hr></hr>
        <div id="weatherWidget" className="widget">Weather Widget
          <button onClick={handleWeatherToggle} className='plus'>Toggle</button>
        </div>
        <hr></hr>
        <div id="MusicPriceWidget" className="widget">Music Widget
          <button onClick={handlemusicTime} className='plus'>Toggle</button>
        </div>
        <hr></hr>
      </div>
    </div>
  )
}

export default SideBar