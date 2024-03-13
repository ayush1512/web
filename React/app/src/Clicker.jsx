function handleClick(){
    alert("Clicked the button");
}
function handleHover(){
    alert("Why are you hovering");
}
export default function Clicker(){
    return(
        <div style={{display:"flex",flexDirection:"column"}}>
        <p onMouseOver={handleHover}>Click this button</p>
        <button onClick={handleClick}>Click</button>
        </div>
    )
}