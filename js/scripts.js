$(document).ready(function(){

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
            
    $("#myBirthDate").mask("99/99/9999");

});


function getAkanName(){
    var myBirthday = document.getElementById("myBirthDate").value;
    console.log(myBirthday);
}