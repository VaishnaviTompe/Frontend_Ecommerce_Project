var attempt = 3; 

function myFunction(){

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

if ( email == "admin@admin.com" && password == "123456"){
    alert ("Login successfully");
    window.open("http://127.0.0.1:5500/Home.html");
    return false;
}
else{
    attempt --;
    alert("You have left "+attempt+" attempt;");
    if( attempt == 0){
        document.getElementById("email").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
    }
}
}
