function PassEye(){
    passField = document.getElementById("passField").value;
    if(passField.length > 0){
        document.getElementById("eyeShow").className = ""
    }
    else{
        document.getElementById("eyeShow").className = "hidden"
    }
}
function showEye(){
    eye = document.getElementById("eyeIcon").className
    if(eye == "fa fa-eye"){
        document.getElementById("eyeIcon").className = "fa fa-eye-slash"
        document.getElementById("passField").type = "password"
    }else{
        document.getElementById("eyeIcon").className = "fa fa-eye"
        document.getElementById("passField").type = "text"
    }
}
function Close(){
    document.getElementById("ModalContainer").classList.add("hidden")
    document.getElementById("create_form").reset();
}
function PopupModal(){
    document.getElementById("ModalContainer").classList.remove("hidden")
}
