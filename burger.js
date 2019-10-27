function fieldMe(){
    var z = document.getElementById("email-id").value = "adityapramudita23@gmail.com";
    var x = document.getElementById("pass").value = "gemscool";
}
function editProf(){
    var n =  document.getElementById("name").value;
    document.getElementById("name").innerHTML = "Hario Budiharjo";
    let t = document.getElementById("title").value;
    document.getElementById("desc-title").innerHTML = "Android Developer";
}
function checkLogin(){
    var mail = document.getElementById("email-id").value.indexOf("@");
    var word = document.getElementById("pass").value;
    submited = true;
    
    if(mail == -1){
        confirm("Field full your email");
        submited = false;
    }
    if(word <=6 ){
        confirm("Password Not Match");
        submited = false;
    }
    if(submited == false){
        return false;
    }
}

function toggleBurger() {
    document.getElementById("side-bar").classList.toggle('active');
}