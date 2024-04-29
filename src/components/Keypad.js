// Code Keypad Component Here

function Keypad() {
  function handleChange(event) {
    console.log("Entering password...");
  }
  return (
    <div>
      <input onChange={handleChange} type="password"></input>
    </div>
  );
}

export default Keypad;
