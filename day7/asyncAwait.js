async function asAw() {
    setTimeout(function(){
        console.log("hello");},
        5000)
    
    
}
console.log(asAw().then())
console.log(asAw().catch())