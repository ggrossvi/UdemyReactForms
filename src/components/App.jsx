import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    // console.log(event.target.placeholder);  // input placeholder "What's your name"
    // console.log(event.target.type);
    // in forms the input take care of their own state event.target.value a controlled component.
    setName(event.target.value);
  }

  function handleClick() {
    //take from inut and put in <H1></H1>
    setHeading(name); //you can use the variable directly
    // console.log(name);   value
    // console.log({name});  object
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
