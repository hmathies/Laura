<<<<<<< HEAD

=======
//beginning of script file  
>>>>>>> c8da896... Finishing up
$( document ).ready(function() {

       $('form').submit(function(event) {
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
                   $("form").trigger("reset"); //reset form
                   console.log("submit was clicked");
                   alert("Thanks for getting in touch.  I appreciate you!");
                   $('form').find('#js-name, #js-email, #js-message').val('');
               },
               error: function(data){
                  $("form").trigger("reset"); //reset form
                  alert('Uh oh, something went wrong. Please try again.');

               }
       });

   });

 $('body').scrollspy({ target: '#navbarToggler' });
 });
