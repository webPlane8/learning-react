function Hello() {
  let name = "Zohaib";
  let messageNumber = 123;
  let fullName = () => {
    return "Zohaib Akram";
  };

  return (
    <p>
      Message is: {messageNumber} {fullName()}
    </p>
  );
}

export default Hello;
