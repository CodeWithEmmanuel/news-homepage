import close from "../img/close.svg";
import CloseMenu from "./CloseMenu";
import MenuItems from "./MenuItems";

function Menu() {
  return (
    <div class="menu">
      <img onClick={CloseMenu} src={close} className="close-btn" />
      <MenuItems />
    </div>
  );
}

export default Menu;
