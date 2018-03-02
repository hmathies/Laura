
$( document ).ready(function() {

       $('fieldset').submit(function(event) {
           event.preventDefault();

           $.ajax({
               url: "https://formspree.io/godslaura@yahoo.com",
               method: "POST",
               dataType: "json",
               data: {
                   name: $('#js-name').val(),
                   email: $('#js-email').val(),
                   message: $('#js-message').val()
               },
               success: function(data){
                   $("fieldset").trigger("reset"); //reset form
                   alert("Thanks for getting in touch.  I appreciate you!");

               }
       });

   });

 $('body').scrollspy({ target: '#navbarToggler' });
 });
