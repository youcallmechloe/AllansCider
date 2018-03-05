/**
 * Created by chloeallan on 27/02/2018.
 */
$(".email").on("click", function(){
    var data = {
        'Name' : $('nameInput'),
        'Email' : $('emailInput'),
        'Message' : $('messageInput')
    };
    console.log(data);
    // $.post("/sendEmail", function(data, status){
    //     alert("Data: " + data + "\nStatus: " + status);
    // });
});