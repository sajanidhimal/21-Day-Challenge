
let mbtn= document.getElementById("myBtn");


// myBtn.onclick=()=>{
// console.log("me");
// }

// myBtn.onclick=()=>{
//     console.log("me 2");
//     }

//     myBtn.onclick=()=>{
//         console.log("me 3");
//         }

let checkBox= document.getElementById("checkBox");
console.log(checkBox)
checkBox.addEventListener("click",(event)=>{
    // event.preventDefault();
})

function triggeredMe(){

        console.log("me clicked by event listener")
    
}

mbtn.addEventListener('click',triggeredMe)

function removeListner(){
mbtn.removeEventListener('click',triggeredMe)
}
// mbtn.addEventListener('click',()=>{
//     console.log("me clicked by event listener 2")
// })


function checkFn(){
    console.log("mouse click")
}

function checkDblFn(){
    console.log("mouse dbl click")

}

function checkMouseDownFn(){
    console.log("mouse down")

}

function checkMouseMoveFn(){
    console.log("mouse move")
}

function checkMouseOutFn(){
    console.log("mouse out")
}

function checkMouseOverFn(){
    console.log("mouse over")
}


function checkMouseUpFn(){
    console.log("mouse up")
}

function keyHandler(){
    console.log("handled")
}