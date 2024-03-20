import { useState } from "react";

export default function Scorekeeper() {
  const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
  function incP1Score() {
    const oldScores = { ...scores, p1Score: scores.p1Score + 1 };
    setScores(oldScores);
  }
  function incP2Score() {
    const oldScores = { ...scores, p2Score: scores.p2Score + 1 };
    setScores(oldScores);
  }
  return (
    <>
      <p>Player 1: {scores.p1Score}</p>
      <p>Player 2: {scores.p2Score}</p>
      <button onClick={incP1Score}>+1 Player 1</button>
      <button onClick={incP2Score}>+1 Player 2</button>
    </>
  );
}
