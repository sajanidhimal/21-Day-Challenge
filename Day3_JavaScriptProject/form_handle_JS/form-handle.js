let myForm=document.getElementById("myForm");
console.log(myForm)

myForm.addEventListener("submit",(event)=>{
    // let username=document.getElementById("username");
    // console.log(username.value);
    let username=event.target.username.value;
    let address=event.target.address.value;

    if(username == "" || address == ""){


        if(username==""){
            let userNameError=document.getElementById("username-error");
            userNameError.style.backgroundColor="red";
            userNameError.style.color="white";
            userNameError.innerText="this is required field";
        }

        event.preventDefault();
    }

    
})


// function userNameChange(){
//     let username=document.getElementById("username");
//     let userNameError=document.getElementById("username-error");
    
//     if(username.value!=""){
//         userNameError.innerText=""
//     }else{
//         userNameError.style.backgroundColor="red";
//         userNameError.style.color="white";
//         userNameError.innerText="this is required field";
//     }
// }


function validation(){
    
}