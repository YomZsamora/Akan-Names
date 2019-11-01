$(document).ready(function(){

    $("#myBirthDate").mask("99/99/9999");

});


function getAkanName(){
    var myBirthday = document.getElementById("myBirthDate").value;
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === ""){
        document.getElementById('message').innerHTML = "Please Enter a <span>Valid Date</span>.";
    }

}