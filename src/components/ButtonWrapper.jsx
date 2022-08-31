const ButtonWrapper = ({ text, btn: Button }) => {
  return (
    <div className="btn-div">
      <p>{text}</p>
      {Button}
    </div>
  );
};

export default ButtonWrapper;
