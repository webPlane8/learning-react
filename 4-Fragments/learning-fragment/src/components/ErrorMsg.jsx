const ErrorMsg = (props) => {
  return <>{props.itm.length === 0 && <h3>I am still hungry.</h3>}</>;
};
export default ErrorMsg;
