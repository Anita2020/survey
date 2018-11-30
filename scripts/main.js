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
});