//forEach doesn't return any value

const mynums =[1,2,3,4,5,6,7,8,9,10]

// const myres = mynums.filter((num) => {
//     return num>4;
// })

// console.log(myres);

// const nums = mynums.map( (num) => num +10);
// console.log(nums);

const mytotal = mynums.reduce(function(acc,curval){
     console.log(`acc: ${acc}, curval: ${curval}`);
     return acc+curval;
},0)
