// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";

function App() {
  return (
    <>
      <Die numSides={20} />
      <Die numSides={15} />
      <Die />
      <Greeter person="Bill" from="Colt" />
      <Greeter person="Ted" from="Colt" />
      <Greeter />
    </>
  );
}

export default App;

{
}
