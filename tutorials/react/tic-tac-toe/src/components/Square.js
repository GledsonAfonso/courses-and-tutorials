import { useState } from "react";

export default function Square({ mark, setMark }) {
  const [localMark, setLocalMark] = useState(mark);

  const handleClick = () => {
    if (localMark === "") {
      const value = getXO();
      setMark(value);
      setLocalMark(value);
    }
  };

  const getXO = () => {
    if (["", "O"].includes(mark)) {
      return "X";
    } else {
      return "O";
    }
  };

  return <button onClick={handleClick} className="square">{ localMark }</button>;
}