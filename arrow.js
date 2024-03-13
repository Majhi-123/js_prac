const user = {
    username: "Ranjan",
    price: 90,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

//user.welcomemessage();
// user.username = "Majhi";
// user.welcomemessage();

// const hello = () =>{
//     let username = "Ranjan"
//     console.log(this);
// }

// hello()

const hello = (num1, num2) =>{
   // let username = "Ranjan"          explicit return
    return num1 + num2
}

// const add = (num1,num2) =>(num1+num2);    //implicit return
// console.log(add(5,8));

// const add = (num1,num2) =>({name: "Ranjan"});    //return an object
// console.log(add(5,8));