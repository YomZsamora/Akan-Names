$(document).ready(function(){

    $("#myBirthDate").mask("99/99/9999");

});


function getAkanName(){
    var myBirthday = document.getElementById("myBirthDate").value;
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === ""){
        document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Didn't Submit a Valid Date! <a href=\"\" class=\"alert-link\">Try Again</a>.</div>";
    }
    else {
        var gender = document.getElementsByName("gender");
    }

}