import style from './Button.module.css';

const Button = ({ variant, size, text = 'Default', color, ...props }) => {
  return (
    <button
      {...props}
      className={`${style['default']} ${style[variant]} ${style[size]} ${style[color]}`}
    >
      {text}
    </button>
  );
};

export default Button;
