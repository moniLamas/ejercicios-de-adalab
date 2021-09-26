import "../styles/components/Nav-bar.scss";
import Link from "./Link";

function Menu() {
  return (
    <div>
      <nav>
        <ul className="nav-bar">
          <Link
            text="Blog"
            title="Blog"
            className="link"
            href="./blog.htlm"
            target="_blank"
          ></Link>
          <Link
            text="Contacto"
            title="Contacto"
            class="link"
            href="./contact.html"
            target="_blank"
          ></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
