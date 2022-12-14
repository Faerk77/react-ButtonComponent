import style from './Button.module.css';

const Button = ({
  type,
  text,
  variant,
  color,
  size,
  startIcon: StartIcon,
  endIcon: EndIcon,
  disabledShadow,
  ...props
}) => {
  return (
    <button
      type={type || 'button'}
      {...props}
      className={`${style['default']} ${variant ? style[variant] : ''} ${
        color ? style[color] : ''
      } ${size ? style[size] : ''} ${
        disabledShadow ? style['disabledShadow'] : ''
      }`}
    >
      {EndIcon && (
        <span>
          <EndIcon width="1.5rem" />
        </span>
      )}
      {text ? <span>{text}</span> : ''}
      {StartIcon && (
        <span>
          <StartIcon width="1.5rem" />
        </span>
      )}
    </button>
  );
};

export default Button;
