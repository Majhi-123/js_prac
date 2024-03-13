//=== equal value & equal data type
//!== not equal , not equal data type

// const balance =100;

// if(balance >49) console.log(balance);

const loggedin = true;
const debitcard = true;
const fromgoogle = false;
const fromemail = true;

// if(loggedin && debitcard){
//     console.log("Allowed to buy");
// }

// if(fromgoogle || fromemail){
//     console.log("User loggedin");
// }
const month  =4;
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//         case 2:
//             console.log("february");
//             break;
//         case 3:
//         console.log("March");
//         break;
//         case 4:
//         console.log("April");
//         break;
//     default:
//         break;
// }

const email = "majhi@gmail.com";

if(email){
    console.log("got useremail");
}
else{
    console.log("Don't have useremail");
}

//falsy values               false,0,-0,"",null,undefined,NaN,BigInt 0n
//for array

if(email.length ==0){
    console.log("empty");
}
const ii ={

}
if(Object.keys(ii).length ==0){
    console.log("empty");
}

let val1;
val1 = null ?? 4 ?? 10
//condion ? true : false