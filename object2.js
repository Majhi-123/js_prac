const User = new Object();

User.Id = "123ab";
User.name = "Ranja";
User.Loggedin = true;

const User1 = {
    email : "mm@gmail.com",
    fullname :{
        first: "Ranjan",
        last : "Majhi"
    }
}

//mergin objects
const obj1 = {
    1: "jrrj",
    2: "mgrnjn"
}

const obj2 = {
    5: "jrrttj",
    7: "mhygrnjn"
}
//const obj3 = Object.assign(obj1,obj2);
const obj3 = {...obj1,...obj2}
//console.log(obj3);

const Course = {
    Name : "Js tutorial",
    price : "999",
    courseInstructor : "Ranjan"
}

const {courseInstructor: instructor} = Course;
//console.log(instructor);


// api type of object
// {

// }
