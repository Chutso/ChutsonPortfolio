$(document).ready(function() {
	  $("#contact").on("submit", function() {
      var valid = true;
    if ( $("#name").prop("validity").valid ) {
      $("#name_error").hide();
    } else {
      $("#name_error").show();
      valid = false;
    }
    if ( $("#email").prop("validity").valid ) {
      $("#email_error").hide();
    } else {
      $("#email_error").show();
      valid = false;
    }
    if ( $("#message").prop("validity").valid ) {
      $("#message_error").hide();
    } else {
      $("#message_error").show();
      valid = false;
    }
    return valid;
  });

});