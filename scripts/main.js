$(document).ready(function() {
    // DOM is fully loaded

    // Capitalize the first letter of First Name
    $('#firstName').on('change', function (e) {
        var $this = $(this),
            val = $this.val();
        regex = /\b[a-z]/g;

        val = val.charAt(0).toUpperCase() + val.substr(1);
    });

    // Capitalize the first letter of Last Name
    $('#lastName').on('change', function (e) {
        var $this = $(this),
            val = $this.val();
        regex = /\b[a-z]/g;

        val = val.charAt(0).toUpperCase() + val.substr(1);
    });

    // change the email to lowercase
    $('#email').on('change', function (e) {
        var $this = $(this),
            val = $this.val();
        val = val.toLowerCase();
    });

    // Hide the products fields until yes is clicked
    $('#yes').click(function(e) {
        $('#productsNservices').prop("disabled",false);
    });

    // Hide the products fields if no is clicked
    $('#no').click(function (e) {
        $('#productsNservices').prop("disabled", true);
    });

    $('form').submit(function(event) {
        event.preventDefault();
        
        //  put form data into variables
        var firstName = $.trim(document.getElementById('firstName').value);
        var lastName = $.trim(document.getElementById('lastName').value);
        var email = $.trim(document.getElementById('email').value);
        var phone = $.trim(document.getElementById('phone').value);
        var chapter = document.getElementById('chapter').value;
        var howToBePromoted = $.trim(document.getElementById('howToBePromoted').value);
        var showcase = document.querySelector('input[name="showcase"]:checked').value;
        var productsNservices = $.trim(document.getElementById('productsNservices').value);
        var dataString = 'firstName=' + firstName + '&lastName=' + lastName + '&email=' + email + '&phone=' + phone + '&chapter=' + chapter + '&howToBePromoted=' + howToBePromoted + '&showcase=' + showcase + '&productsNservices=' + productsNservices;

    //  Check to see if the user has already submitted a survey
        $.ajax({
            type: 'POST',
            url: 'submit.php',
            data: dataString,
            success: function(result) {
                if(result == 'user_exists') {
                    swal("Survey Already Submitted", "You have already submitted a survey!", "error");
                    setTimeout(function() {
                        window.location = 'https://awlo.org'
                    }, 3000);
                } else if(result == 'success') {
                    swal("Submission Successful", "You have successfully submitted the survey!", "success");
                    setTimeout(function () {
                        window.location = 'https://awlo.org'
                    }, 3000);
                }
            }
        });
    });
});