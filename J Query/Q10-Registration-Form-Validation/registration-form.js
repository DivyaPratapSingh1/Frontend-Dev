// Q10: Registration Form Validation
// Validate name non-empty, email format & uniqueness (demo), password length >=8, show success and highlight invalid fields.

$(function(){
  // Mock existing emails (for uniqueness demo)
  var existing = ['test@example.com','user@domain.com'];

  function isEmailValid(email){
    var re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return re.test(email);
  }

  $('#regForm').on('submit', function(e){
    e.preventDefault();
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var password = $('#password').val();

    var valid = true;
    $('#name,#email,#password').removeClass('error');

    // Name not empty
    if(name === ''){
      $('#name').addClass('error');
      valid = false;
    }

    // Email format and uniqueness
    if(!isEmailValid(email)){
      $('#email').addClass('error');
      valid = false;
    } else if(existing.indexOf(email.toLowerCase()) !== -1){
      $('#email').addClass('error');
      valid = false;
      $('#message').text('Email already taken').css('color','red');
    }

    // Password length
    if(password.length < 8){
      $('#password').addClass('error');
      valid = false;
    }

    if(valid){
      $('#message').text('Registration successful!').addClass('successMsg');
      // Optionally add the email to existing to simulate uniqueness next time
      existing.push(email.toLowerCase());
    }
  });
});
