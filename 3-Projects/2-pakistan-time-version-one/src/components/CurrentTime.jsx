let CurrentTime = () => {
  let time = new Date();
  return (
    <p className="fs-3 fw-bold">
      This is the current time{time.toDateString()}-{time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
