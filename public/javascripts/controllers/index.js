/**
 * Created by chloeallan on 27/02/2018.
 */
$("button").on("click", function(){
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

function sendContact(){
    var data = {
        'Name' : $('.nameInput').val(),
        'Message' : $('.messageInput').val(),
        'Phone' : $('.phoneInput').val(),
        'Email' : $('.emailInput').val()
    };
    console.log(data);
    $.post("/sendEmail", data)
        .then( function(data){
        console.log(data);
        if(data === 'sent'){
            alert("Your message has been sent!");
        }
        else{
            alert('Sorry there has been a problem, please try again');
        }
        location.reload();
    });
}