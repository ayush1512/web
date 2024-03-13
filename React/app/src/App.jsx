// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDie from "./DoubleDie";
import Heading from "./Heading";
import ColorList from "./ColorList";
import ShoppingList from "./ShoppingList";
import ShoppingListItem from "./ShoppingListItem";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";
import TogglerCounter from "./ToggleCounter";
import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

const colors = [
  "#DDC30B",
  "#4169E1",
  "#FFB347",
  "#9B59B6",
  "#2ECC71",
  "#F7DC6F",
  "#9D38BD",
  "#007BFF",
  "#FF005E",
  "#E8A3A5",
];

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ColorBoxGrid colors={colors}/>
    </div>
  );
}

export default App;

{
  {
    /* <Counter/>   */
  }
  {
    /* <TogglerCounter/> */
  }
  {
    /* <Counter/> */
  }
  {
    /* <Form />
<Clicker /> */
  }
  /* <ShoppingList items={data} /> */
}
/* <Heading text="Welcome!" color="magenta" fontSize = "40px"/>
<Heading text="Ayush" color="white" fontSize = "20px"/>
<DoubleDie />
<DoubleDie />
<DoubleDie />
<ColorList colors={["red", "pink", "teal", "blue"]}/> */
/* <ListPicker values={{a:1,b:2,c:3}}/> */
/* <Die numSides={20} />
<Die numSides={15} />
<Die />

<Greeter person="Bill" from="Colt" />
<Greeter person="Ted" from="Colt" />
<Greeter />

<ListPicker values={[1, 2, 3]} />
<ListPicker values={["a", "b", "c"]} /> */

// const data = [
//   {
//     id: 1,
//     item: "eggs",
//     quantity: 12,
//     completed: false,
//   },
//   {
//     id: 2,
//     item: "milk",
//     quantity: 1,
//     completed: true,
//   },
//   {
//     id: 3,
//     item: "bread",
//     quantity: 2,
//     completed: true,
//   },
//   {
//     id: 4,
//     item: "butter",
//     quantity: 3,
//     completed: false,
//   },
// ];
