import style from "./Button.module.css";

const Button = ({ text, variant, color, size, ...props }) => {
  return (
    <button
      {...props}
      className={`${style["default"]} ${style[variant]} ${
        style[color || "default"]
      } ${style[size || "md"]}`}
    >
      {text || "Default"}
    </button>
  );
};

export default Button;
