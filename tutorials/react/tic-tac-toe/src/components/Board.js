import BoardRow from "./BoardRow";

export default function Board({ matrix }) {
  return <div className="board">
    {
      matrix.map((row, index) => {
        return <BoardRow key={index} units={row} />
      })
    }
  </div>
}