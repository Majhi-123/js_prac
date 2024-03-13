//immediately invokede function expression(IIFE)

(function hello(){
    console.log("Ranjan");
})();


((name)=>{
    console.log(`${name}`);
})("Ranjan");