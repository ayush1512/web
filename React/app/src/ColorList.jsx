export default function ColorList({ colors }) {
  // const elements = [<p>Hello!</p>, <p>Bye Bye</p>]
  //   const lis = colors.map(color => <li>{color}</li>);
  return (
    <div>
      <p>Color List</p>
      <ol>
        {colors.map((c) => (
          <li style={{ color: c }}>{c}</li>
        ))}
      </ol>
    </div>
  );
}
