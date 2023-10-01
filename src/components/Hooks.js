import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [num, setNum] = useState(0);
  const [input, setInput] = useState();

  useEffect(() => {
    console.log(num);
  }, [num]);

  function add() {
    setNum((prev) => prev + 1);
  }

  function subtract() {
    if (num === 0) return;
    setNum((prev) => prev - 1);
  }

  const handleAdd = () => {
    const newNum = Number(input);
    setNum((prev) => prev + newNum);
    setInput(0);
    console.log("input", input);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
        maxWidth: "50%",
        alignContent: "center",
      }}
    >
      <button onClick={add}>Add</button>
      <p>{num}</p>
      <button onClick={subtract}>Subtract</button>

      <input
        type="number"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
        value={input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />
    </div>
  );
};

export default Hooks;
