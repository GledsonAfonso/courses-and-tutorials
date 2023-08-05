import Square from "./Square";

export default function BoardRow({ units }) {
  return <div className="board-row">
    {
      units.map(number => {
        return <Square key={number} value={number} />
      })
    }
  </div>
}