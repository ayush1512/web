import ShoppingListItem from "./ShoppingListItem";
export default function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        // <ShoppingListItem
        //   key={i.key}
        //   item={i.item}
        //   quantity={i.quantity}
        //   completed={i.completed}
        // />
        <ShoppingListItem key={i.id} {...i} />
      ))}
    </ul>
  );
}
{
  /* {items.map((i) => (
  <li
    key={i.id}
    style={{
      color: i.completed ? "grey" : null,
      textDecoration: i.completed ? "line-through" : "none",
    }}
  >
    {i.item} - {i.quantity}
  </li>
))} */
}

// const data = [
//     {
//       item: "eggs",
//       quantity: 12,
//       completed: false
//     },
//     {
//       item: "milk",
//       quantity: 1,
//       completed: true
//     },
//     {
//       item: "bread",
//       quantity: 2,
//       completed: true
//     },
//     {
//       item: "butter",
//       quantity: 3,
//       completed: false
//     }
//   ];

//   function App() {
//     return <>
//     <ShoppingList/>
//     </>;
//   }
