$(document).ready(function(){

    $("#myBirthDate").mask("99/99/9999");

});


function getAkanName(){
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === ""){
        document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Didn't Submit a Valid Date! <a href=\"\" class=\"alert-link\">Try Again</a>.</div>";
    }
    else {
        for(var i=0;i<myGender.length;i++){
            if(myGender[i].checked){
                if(myGender[i].value === "Male"){
                    console.log(maleAkanNames[dayOfTheWeek]);
                }
                else {
                    console.log(femaleAkanNames[dayOfTheWeek]);
                }
            }
        }
        
    }




    // else if(!document.getElementsByName('gender').checked  ) {
    //     document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Should Select a Gender Too Determine Your Akan Name! <a href=\"\" class=\"alert-link\">Try Again</a>.</div>";
    // }
    // else if(document.getElementsByName('genderMale').checked && !document.getElementsByName('genderFemale').checked) {
    //     document.getElementById('message').innerHTML = "Born on a <span>" + dayOfTheWeek + "</span>, Your Akan Name's" + maleAkanNames[dayOfTheWeek] + "";
    // }
    // else if(document.getElementsByName('genderFemale').checked && !document.getElementsByName('genderMale').checked) {
    //     document.getElementById('message').innerHTML = "Born on a <span>" + dayOfTheWeek + "</span>, Your Akan Name's" + femaleAkanNames[dayOfTheWeek] + "";
    // }
    // else {
    //         // alert(femaleNames[day]);
    // }

}