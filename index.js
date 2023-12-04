const usernames = document.querySelector('#username')
const password = document.querySelector('#password')
const confirmp = document.querySelector('#confirm')
const button = document.querySelector('#btn')
const errors = document.querySelector('#error')
const passwordText =document.getElementById("passswordText")
// console.log(usernames)e

button.addEventListener("click",function(event) {
event.preventDefault();
chechempty(usernames)
chechempty(password)
chechempty(confirmp)
chechmpasswordmatch()

})

 function chechempty(feilds) {
if(feilds.value == ""){
    errors.style.display='block';
    usernames.classList.add("border-red-500")
    password.classList.add("border-red-500")
    confirmp.classList.add("border-red-500")
    // usernames.classList.remove("autline")
}
else{
usernames.classList.add("border-2","border-red-500")
usernames.classList.remove("border-2","border-red-500")
errors.style.display='none';
}



}

function chechpassword (){
    if(password.value.length < 6){
        passwordText.innerHTML= "week password atleast 6 character "
        passwordText.style.color="red"
    }
    else{
        passwordText.innerHTML=" "
        passwordText.style.color=" "
    }
}
//chechking is password is match
function chechmpasswordmatch(){ 
    const passworderror=document.getElementById('passworderror')
    if(confirmp.value != password.value){
       passworderror.innerHTML="password not same"
       passworderror.style.color="red"
    }
    else{
        passworderror.innerHTML= " "
        passworderror.style.color= " "
    }
}

