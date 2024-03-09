// export default function Greeter(props){
//     console.log(props.person);
//     return(
//         <>

//         <p>Hi There!, {props.person} </p>
//         </>
//     )
// }
export default function Greeter({ person = "everyone", from = "anonymous" }) {
  return (
    <>
      <h3>Hi There!, {person}</h3>
      <h6>~{from}</h6>
    </>
  );
}
