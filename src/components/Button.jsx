import style from "./Button.module.css";

const Button = ({
  title,
  variant,
  size,
  text = "Default",
  disabled,
  color,
}) => {
  if (!disabled) {
    return (
      <div className={style.BtnContainer}>
        {<span>{title}</span>}
        <button
          className={`${style["default"]} ${style[variant]} ${style[size]} ${style[color]}`}
        >
          {text}
        </button>
      </div>
    );
  } else {
    return (
      <div className={style.BtnContainer}>
        <button className={`${style["default"]}`} disabled>
          Disabled
        </button>
      </div>
    );
  }
};

export default Button;
