export default function ListPicker({values}){
    const randIdx = Math.floor(Math.random() * values.length);
    const randEl = values[randIdx];
    return(
        <div>
            <p>List of values: {values}</p>
            <p>Random value: {randEl}</p>
        </div>
    )
}