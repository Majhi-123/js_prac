// function myname(){
//      console.log("Ranjan");
// }
// myname();

function addnumbers(number1,number2){

     return number1 + number2;
} 

let result = addnumbers(4,8);
//console.log(result);

function loginuser(username){
     if(!username){
          console.log("Please enter username"); 
          return;
     }
     return `${username} just logged in`;
}

// console.log(loginuser("Ranjan"));
// console.log(loginuser())

function price(val1,val2,...number){
     return number;
}

//console.log(price(100,400,200,300));

obj1 = {
     name : "Ranjan",
     age : 21
}

function temp(anyobject){
     console.log(`My name is ${anyobject.name} and i am ${anyobject.age} years's old`);
}

//temp(obj1);
// temp({
//      name:"xyz",
//      age: 88
// })

const add = function addone(value){
     return value +1;
}

console.log(add(6));