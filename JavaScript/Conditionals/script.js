
// let random=prompt("Type a Number: ");
// if(random > 0.9){
//     console.log("Math still works...")
//     console.log(random);
// }
// else if(random > 0.8){
//     console.log("Else-If is working...")
// }
// else{
//     console.log("The number was smaller than 0.8")
// }
// console.log(random);


//Nesting

const password = prompt("please enter your password");
//Password length must be 6+ characters
//Password cannot include spaces
if (password.length>=6) {
    if(password.indexOf(' ')===-1){
        console.log("VALID PASSWORD!")
    }else{
        console.log("Spaces in password...")
    }
} else {
    console.log("INVALID PASSWORD!")
}
