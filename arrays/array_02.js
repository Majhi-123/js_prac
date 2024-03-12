const dc = ['Flash','Batman','Superman']
const marvel = ['spiderman','Ironman','Thor']

const all =  dc.concat(marvel);

const all_new = [...marvel,...dc];
console.log(all);
console.log(all_new);

//how to convert anythong to array
console.log(Array.from("Ranjan"));