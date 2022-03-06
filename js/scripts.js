$(document).ready(function(){
    $("#myBirthDate").mask("99/99/9999");
});


function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    //confirm if user entered valid input for date No zeros
    var sieve= myBirthday.split('/');
    console.log(sieve);
    var wrongInput=false;
    var specific=[]
    for (var i=0; i<=sieve.length-1; i++){
        var singleDateValue=sieve[i].split('');
        console.log(singleDateValue);
        for(var j=0; j<=3; j++){
            //check if the value entered is only zero
            
            if(singleDateValue.map((val)=>parseInt(val)).reduce((ac, v)=>ac+=v)===0){
                wrongInput=true;
                specific.push(i);
            }
        }
    }
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === ""){
        document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Didn't Submit a Valid Date!</div>";
        $('#message').addClass("animated shake");
    }else if(wrongInput===true){

        var vals=''
        if(specific.includes(0)){
            vals+='Day'
        }
        if(specific.length>1){
            if(specific.includes(1)){
                vals+='/Month'
            }
            if(specific.includes(2)){
                vals+='/Year'
            }
        }else{
            if(specific.includes(1)){
                vals+=' Month'
            }
            if(specific.includes(2)){
                vals+='  Year'
            }
        }
        
     
        document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>C'MON!</strong> which "+vals+" is made up of zeros only !</div>";
        $('#message').addClass("animated shake");
        
    }
    else {
        for(var i=0;i<myGender.length;i++){
            if(myGender[i].checked){
                if(myGender[i].value === "Male"){
                    document.getElementById('message').innerHTML = "<span><i class=\"fa fa-male\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
                    $('#message span:first-child').addClass("animated fadeInDown");
                    $('#message span:last-child').addClass("animated fadeInUp");
                }
                else {
                    document.getElementById('message').innerHTML = "<span><i class=\"fa fa-female\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
                    $('#message span:first-child').addClass("animated fadeInDown");
                    $('#message span:last-child').addClass("animated fadeInUp");
                }
                break;
            }    
            else {
                document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Should Select a Gender Too Determine Your Akan Name!</div>";
                $('#message').addClass("animated shake");
            }
        }
    }
}

function clearAkanMessage(){
    document.getElementById('message').innerHTML = "";
}