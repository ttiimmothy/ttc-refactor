import { useState } from "react";
import { BaseBarComponents } from "./BaseBarComponents";
import { RxHamburgerMenu } from "react-icons/rx";

export function BottomBar({ width }: { width: number }) {
  return width < 800 ? (
    <nav className="bottomNav">
      <BaseBarComponents width={width} sideNavOpen={true}/>
    </nav>
  ) : null;
}

export function SideBar({ width }: { width: number }) {
  const [sideNavOpen, setSideNavOpen] = useState(localStorage.getItem("sideNavOpen") ? JSON.parse(localStorage.getItem("sideNavOpen") as string) : true);
  return width >= 800 ? (
    <nav className={`sideNav ${sideNavOpen ? "sideNavOpen" : "sideNavClose"}`}>
      <BaseBarComponents width={width} sideNavOpen={sideNavOpen}/>
      <div className="sideNavHover" onClick={() => {
        setSideNavOpen(!sideNavOpen)
        localStorage.setItem("sideNavOpen", JSON.stringify(!sideNavOpen))
      }}>
        <RxHamburgerMenu size={"2em"}/>
      </div>
    </nav>
  ) : null;
}
