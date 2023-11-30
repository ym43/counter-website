let plus = document.getElementById("increase")
let minues = document.getElementById("decrease")
let zero = document.getElementById("reset")
let counter1 = 0;

plus.addEventListener("click",()=>{
    counter1++;
    document.querySelector("h1").innerHTML = counter1;
})

minues.addEventListener("click",()=>{
    counter1--;
    document.querySelector("h1").innerHTML = counter1;
    if (counter1 < 1) {
        counter1 = 0;
        document.querySelector("h1").innerHTML = counter1
    }
})

reset.addEventListener("click",()=>{
    if (counter1 > -1) {
        counter1--;
        counter1 = 0
        document.querySelector("h1").innerHTML = counter1;
    }
    
})