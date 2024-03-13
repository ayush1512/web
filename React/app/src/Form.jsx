function handleFormSubmit(evt){
    evt.preventDefault();
    console.log("Trying to submit the form aye!")

}

export default function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <button type="submit">Submit</button>
        </form>
    )
}