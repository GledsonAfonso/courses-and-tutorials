import Square from "./Square";

export default function BoardRow({ units, mark, setMark }) {
  return <div className="board-row">
    {
      units.map(number => {
        return <Square key={number} mark={mark} setMark={setMark} />
      })
    }
  </div>
}