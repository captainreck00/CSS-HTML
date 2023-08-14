document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("login_form");
    const emailValidationMessage = document.getElementById("emailValidationMessage");
  
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const form_data = new FormData(form);
        const email = form_data.get('email');
        const password = form_data.get('password');
  
        if (email.includes("@") && email.includes(".com")) {
            emailValidationMessage.textContent = "Valid email";
            emailValidationMessage.style.color = "green";
        } else {
            emailValidationMessage.textContent = "Invalid email";
            emailValidationMessage.style.color = "red";
        }
    });
  });
//   By wrapping your code within the DOMContentLoaded event listener, you ensure that the code only executes after the entire DOM has been loaded, which will prevent the getElementById call from returning null.
  
  
  
  
  
  