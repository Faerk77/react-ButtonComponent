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
      className={`${style['default']} ${style[variant]} ${
        style[color || 'default']
      } ${style[size || 'md']} ${props.disabled && style['disabled']}`}
    >
      {EndIcon && (
        <span>
          <EndIcon width="1rem" />
        </span>
      )}
      {text && <span>{text}</span>}
      {StartIcon && (
        <span>
          <StartIcon width="1rem" />
        </span>
      )}
    </button>
  );
};

export default Button;
