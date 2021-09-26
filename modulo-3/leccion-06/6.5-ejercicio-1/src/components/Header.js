import "../styles/components/Header.scss";
import "../styles/core/Variables.scss";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <div>
      <Logo />
      <Menu />
    </div>
  );
}

export default Header;
