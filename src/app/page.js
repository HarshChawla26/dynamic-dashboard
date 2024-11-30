import "./page.module.css";
import SideBar from "@/comps/sideBar/SideBar";
import Navbar from "@/comps/navBar/Navbar";
import DragNDrop from "@/comps/drag-n-drop/DragNDrop";

export default function Home() {
  return (
    <div className={""}>
     <div className="wrapper">
      <SideBar/>  
      <div className="section">
      <Navbar/>
      <DragNDrop/>
      </div>
      </div> 
    </div>
  );
}
