import { useState } from "react";
import BoardRow from "./BoardRow";

export default function Board({ matrix }) {
  let [mark, setMark] = useState("");

  return <div className="board">
    {
      matrix.map((row, index) => {
        return <BoardRow key={index} units={row} mark={mark} setMark={setMark} />
      })
    }
  </div>
}