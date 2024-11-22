


let bulbSection=document.getElementsByClassName("bulb-section")[0];
console.log(bulbSection.children)


function changeCss(){
    let myBtn= document.getElementById("myBtn");
    myBtn.classList.toggle("bulb-css-class")
    // myBtn.style.backgroundColor="Red";
    // myBtn.style.color="white";
    // myBtn.style.borderRadius="1rem";
    console.log(myBtn)
}

function turnOn(){
    let bulb=document.getElementById("bulb");
    bulb.style.backgroundColor="white";
}

function turnOff(){
    let bulb=document.getElementById("bulb");
    bulb.style.backgroundColor="black";
}


function clickMeToAppend(){
    let p= document.createElement("p");
    p.innerText="this is my appended paragraph";
    
    let appendPortion=document.getElementsByClassName("append-portion")[0];

    appendPortion.prepend(p);
}

function addItem(){

    let ul=document.getElementsByTagName("ul")[0];

    let list= document.getElementsByTagName("li")[2];

    let list2= document.getElementsByTagName("li")[1];
    console.log(list2)

    let li= document.createElement("li");
    li.innerText="4";

    ul.insertBefore(li,list)

    ul.removeChild(list2)


}