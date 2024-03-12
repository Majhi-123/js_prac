
const Jsuser ={
    name : "Ranjan",
    age : 20,
    location : "Jsg",
    Email : "hh@gmail.com"
}

// console.log(Jsuser.name);
// console.log(Jsuser["name"]);   //both are same
//Object.freeze(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Jsuser");
}

Jsuser.greetingtwo = function(){
    console.log(`Hello Jsuser, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());