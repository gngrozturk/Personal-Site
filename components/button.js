import styles from "./button.module.css";

function Button({ href, btnTitle }) {
  return (
    <a
      className={styles.btn}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {btnTitle}
    </a>
  );
}

export default Button;
