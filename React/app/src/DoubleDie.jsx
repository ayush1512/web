import "./DoubleDie.css";

export default function DoubleDie() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  // const styles = { color: "purple", fontSize: "40px"};
  const styles = {color : num1 === num2 ? 'green' : 'red'};
  return (
    <>
      <div className="DoubleDie" style={styles}>
        <h2>Double Dice</h2>
        {/* {num1 === num2 ? <h3>"You Win!"</h3> : null} */}
        {num1 === num2 && <h3>You Win!</h3>}
        <p>Num1: {num1} </p>
        <p>Num2: {num2} </p>
      </div>
    </>
  );
}
// export default function DoubleDie() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;
//   const result = num1 === num2 ? "You Win!" : "You Lose :(";
//   if (num1 === num2) {
//     return (
//       <>
//         <h2>{result}</h2>
//         <p>Num1: {num1} </p>
//         <p>Num2: {num2} </p>
//       </>
//     );
//   }
//   return (
//     <>
//       <h2>{result}</h2>
//       <p>Num1: {num1} </p>
//       <p>Num2: {num2} </p>
//     </>
//   );
// }
