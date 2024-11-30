"use client"
import "./page.module.css";
import SideBar from "@/comps/sideBar/SideBar";
import Navbar from "@/comps/navBar/Navbar";
import DragNDrop from "@/comps/drag-n-drop/DragNDrop";
import { useEffect, useRef } from "react";

export default function Home() {
  const timeRef = useRef(null)
  const musicRef = useRef(null)
  const weatherRef = useRef(null)
  useEffect(() => {
    console.log(timeRef.current)
  }, [])
  
  return (
      <div className={""}>
      <div className="wrapper">
        <SideBar timeRef={timeRef} musicRef={musicRef} weatherRef={weatherRef}/>  
        <div className="section">
        <Navbar/>
        <DragNDrop timeRef={timeRef} musicRef={musicRef} weatherRef={weatherRef}/>
        </div>
        </div> 
      </div>
  );
}
