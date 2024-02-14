"use client";

import React, { useState } from "react";
import Menu from "./Menu";
import MenuDxtp from "./MenuDxtp";


interface ChildProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const Layout: React.FC<ChildProps> = ({ showMenu, setShowMenu }) => {
  return (
    <div className="w-[10px]">
      <Menu showMenu={showMenu} setShowMenu={setShowMenu}/>
    </div>
  );
};

export default Layout;
