import "../styles/components/Link.scss";
import "../styles/core/Variables.scss";
function Link(props) {
  const openInNewTab = props.target === undefined ? "" : props.target;
  return (
    <li>
      <a
        title={props.title}
        className={props.class}
        href={props.href}
        target={openInNewTab}
        rel={props.rel}
      >
        {props.text}
      </a>
    </li>
  );
}

export default Link;
