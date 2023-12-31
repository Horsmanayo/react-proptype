import React, { useRef, useState } from "react";

function RefExample() {
  let [name, setName] = useState("Ned stark");
  // we declare the input inside the variable
  let nameRefExample = useRef();
  // we are referring to input to change the value
  const submitButton = () => {
    setName(nameRefExample.current.value);
  };

  return (
    <div className="App">
      <p>{name}</p>
      <h1>Who is your favorite Games of throne character</h1>

      <div>
        <input
          placehoder="enter your preferred GOT character..."
          ref={nameRefExample}
          type="text"
        />
        <button type="button" onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default RefExample;
