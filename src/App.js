import { useState } from "react";

function Status() {
  return (
    <div>this is player's info round</div>
  );
}

function Grid({value,onGridClick}){
  return (
    <div className="square" onClick={onGridClick}>{value}</div>
  );
}

function ChessBoard() {
  const [val,setVal]=useState(Array(9).fill(null));
  const [flag,setFlag]=useState(true);

  const winner=calculateWinner(val);
  let stat;
  if(winner){
    stat='winner is '+winner;
  }else{
    stat='next is '+(flag?'X':'O');
  }

  function handleClick(i) {
    const val_ectype = val.slice();
    if(val_ectype[i]||calculateWinner(val)){return;}
    if (flag) {
      val_ectype[i]='X';
    }else{
      val_ectype[i]='O';
    }
    setFlag(!flag);
    setVal(val_ectype);
  }

  return(
    <>
      <div>{stat}</div>
      <div className="board-row">
        <Grid value={val[0]} onGridClick={()=>handleClick(0)}/>
        <Grid value={val[1]} onGridClick={()=>handleClick(1)}/>
        <Grid value={val[2]} onGridClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Grid value={val[3]} onGridClick={()=>handleClick(3)}/>
        <Grid value={val[4]} onGridClick={()=>handleClick(4)}/>
        <Grid value={val[5]} onGridClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Grid value={val[6]} onGridClick={()=>handleClick(6)}/>
        <Grid value={val[7]} onGridClick={()=>handleClick(7)}/>
        <Grid value={val[8]} onGridClick={()=>handleClick(8)}/>
      </div>
    </>
  );
}

export default function Body() {
  return (
    <>
      <Status />
      <ChessBoard />
    </>
  );
}

function calculateWinner(val) {
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
    if (val[a] && val[a] === val[b] && val[a] === val[c]) {
      return val[a];
    }
  }
  return null;
}