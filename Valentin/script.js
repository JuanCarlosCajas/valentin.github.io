
function login(){
    var user, pass;

    user = document.getElementById("user").value;
    pass = document.getElementById("password").value;

    if(user == "Babymonster" && pass == "Feliz14"){
        window.location = "items.html";
    }
    else if(user== "" && pass == ""){
        alert("Coloque el usuario y contraseña para la sorpresa :3");
    }
    else{
        alert("Usuario o contraseña incorrecta :(");
    }
}