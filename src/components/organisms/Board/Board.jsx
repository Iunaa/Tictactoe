import { useState } from "react";
import Square from "../../molecules/Square";
import "./board.scss";

function Board() {
  const[xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
     if (squares[i] || calculateWinner(squares)) {
     return;
  }
    
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = "X";
    } else{
      nextSquares[i] = "0"
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
 const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Vencedor: " + winner;
  } else {
    status = "Próximo a jogar: " + (xIsNext ? "X" : "O");
  }


  return(
    <>
    
      <div className="status">{status}</div>
      <div className="board-row">
        {
        squares.map(function(element,index){
          return(
            <Square value={squares[index]} onSquareClick={() => handleClick(index)}/>
          );
        })
      }
        
      </div>
      
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;