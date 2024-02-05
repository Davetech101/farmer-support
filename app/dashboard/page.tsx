"use client";

import { SetStateAction, useState } from "react";
import Layout from "../_components/menu/Layout";
import Menu from "../_components/menu/Menu";
import MenuDxtp from "../_components/menu/MenuDxtp";
import MenuHeader from "../_components/menu/MenuHeader";
import Dashboard from "./Dashboard";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <MenuHeader showMenu={showMenu} setShowMenu={setShowMenu} />
      <Layout showMenu={showMenu} setShowMenu={setShowMenu}/>
      <Dashboard />
    </>
  );
}
