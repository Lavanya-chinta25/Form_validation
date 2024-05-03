styles=`
border-bottom:solid;
border-bottom-color:purple;
border-bottom-width:2px;
`
nostyles=`
border-bottom:solid;
border-bottom-color:black;
border-bottom-width:1.5px;
`
function highlight1(){
document.querySelector("#b1").style=styles;
}
function highlight2(){
document.querySelector("#b2").style=styles;
}
function highlight3(){
document.querySelector("#b7").style=styles;
}
function nohighlight1(){
document.querySelector("#b1").style=nostyles;
}
function nohighlight2(){
document.querySelector("#b2").style=nostyles;
}
function nohighlight3(){
document.querySelector("#b7").style=nostyles;
}

function view(){
    document.getElementById("lock").src="unlock.png"
    document.getElementById("password").type="text"
}
function unview(){
    document.getElementById("lock").src="lock.png"
    document.getElementById("password").type="password"
}
function view1(){
    document.getElementById("lock").src="unlock.png"
    document.getElementById("password1").type="text"
}
function unview1(){
    document.getElementById("lock").src="lock.png"
    document.getElementById("password1").type="password"
}

function check(){
regex1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/
regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
email1=document.getElementById("mail").value
password=document.getElementById("password").value
console.log(email1)
if(!regex.test(email1)&& email1!=""){
    val=document.getElementById("invalid")
    val.style.color="red"
    val.style.visibility="visible"
}
if(!regex1.test(password)&&password!="")
{alert("Invalid password,Password should contain atleast one uppercase alphabet,one lowercase alphabet & one digit")}
if(regex.test(email1)&&regex1.test(password)&&email1!=""&&password!=""){
    alert("Login Successful")
}
else{
    alert("OOPS!Login Failed enter email and password")
}
}
function check1(){
    regex1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/
    regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    email1=document.getElementById("mail1").value
    password=document.getElementById("password1").value
    name=document.getElementById("name").value
    console.log(email1)
    if(!regex.test(email1)&& email1!=""){
        val=document.getElementById("invalid")
        val.style.color="red"
        val.style.visibility="visible"
    }
    if(!regex1.test(password)&&password!="")
    {alert("Invalid password,Password should contain atleast one uppercase alphabet,one lowercase alphabet & one digit")}
    if(regex.test(email1)&&regex1.test(password)&&email1!=""&&password!=""&&name!=""){
        alert("Signup Successful")
    }
    else{
        alert("OOPS!Signin Failed enter email and password and name")
    }
}