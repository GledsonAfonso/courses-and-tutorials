import Board from "./components/Board";

export default function App() {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return <Board matrix={matrix}/>
}