const arg =process.argv.slice(2);
const num=parseFloat(arg[0]);

if(num%2==0){
    console.log("even")
}
else{
    console.log("odd")
}