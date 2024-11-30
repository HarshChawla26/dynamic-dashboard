import React from 'react'
import './sidebar.css'

function SideBar() {
  return (
    <div id='sidebar'>
      <div id='widget-list'>
        <hr></hr>
        <div id="timeWidget" className="widget">Time Widget
          <button className='plus'>+</button>
          <button className='minus'>-</button>
        </div>
        <hr></hr>
        <div id="weatherWidget" className="widget">Weather Widget
          <button className='plus'>+</button>
          <button className='minus'>-</button>
        </div>
        <hr></hr>
        <div id="stockPriceWidget" className="widget">Stock Widget
          <button className='plus'>+</button>
          <button className='minus'>-</button>
        </div>
        <hr></hr>
      </div>
    </div>
  )
}

export default SideBar