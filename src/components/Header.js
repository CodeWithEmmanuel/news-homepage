import menu from "../img/menu.svg";
import OpenMenu from "./OpenMenu";
import MenuItems from "./MenuItems";

function Header() {
  return (
    <div className="header-menu">
      <h1>W.</h1>
      <img onClick={OpenMenu} src={menu} />
      <MenuItems className="menu-items" />
    </div>
  );
}

export default Header;
