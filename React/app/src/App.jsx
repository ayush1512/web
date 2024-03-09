// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDie from "./DoubleDie";

function App() {
  return (
    <>
      <DoubleDie />
      <DoubleDie />
      <DoubleDie />
    </>
  );
}

export default App;

/* <ListPicker values={{a:1,b:2,c:3}}/> */
/* <Die numSides={20} />
<Die numSides={15} />
<Die />

<Greeter person="Bill" from="Colt" />
<Greeter person="Ted" from="Colt" />
<Greeter />

<ListPicker values={[1, 2, 3]} />
<ListPicker values={["a", "b", "c"]} /> */
