"use client"
import React, { useState } from 'react'
import TimeWidget from '../time/TimeWidget'
import "./dragNdrop.css"
import WeatherWidget from '../weather/WeatherWidget'
import MusicPlayer from '../musicplayer/MusicPlayer'
import DraggableWidget from '../DraggableWidget/DraggableWidget'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function DragNDrop(props) {
  const {timeRef,weatherRef,musicRef} = props;
  const [widgets, setWidgets] = useState([
    { id: 'time', component: <TimeWidget timeRef={timeRef}/> },
    { id: 'weather', component: <WeatherWidget weatherRef={weatherRef}/> },
    { id: 'music', component: <MusicPlayer musicRef={musicRef}/> },
  ]);

  const moveWidget = (fromIndex, toIndex) => {
    const updatedWidgets = [...widgets];
    const [movedItem] = updatedWidgets.splice(fromIndex, 1);
    updatedWidgets.splice(toIndex, 0, movedItem);
    setWidgets(updatedWidgets);
  };

  return (
    <DndProvider backend={HTML5Backend}>

    <div id="dnd-area">
      {widgets.map((widget, index) => (
        <DraggableWidget
        key={widget.id}
            id={widget.id}
            index={index}
            moveWidget={moveWidget}
          >
            {widget.component}
          </DraggableWidget>
        ))}
    </div>
      </DndProvider>
  )
}
