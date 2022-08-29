import style from "./Button.module.css";

const Button = ({ title, variant, text = "Default", ...props }) => {
  return (
    <div className={style.BtnContainer}>
      {title ? (
        <span>{title}</span>
      ) : (
        <span className={style.hoverFocusBtn}>&:hover, &:focus</span>
      )}
      <button className={`${style["default"]} ${style[variant]}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
