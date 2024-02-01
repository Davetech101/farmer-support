import Menu from "../_components/menu/Menu";
import MenuDxtp from "../_components/menu/MenuDxtp";
import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <section className="flex w-screen items-top justify-center lg:justify-between bg-secondaryColor lg:pr-[20px] xl:pr-[200px]">
      <Menu/>
      <MenuDxtp/>
      <Dashboard/>
    </section>
  )
}
