document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("login_form");
  const emailValidationMessage = document.getElementById("emailValidationMessage");

  form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const form_data = new FormData(form);
      const email = form_data.get('email');
      const password = form_data.get('password');

  });
});


const data_sent = {
  email: "lmao@gmail.com",
  password: "lmao1233"
};

const Authorization = {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data_sent)
};

// Replace with the actual URL where your Flask server is running
const serverURL = "http://127.0.0.1:5000";

fetch(serverURL, Authorization)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    document.getElementById("work").innerHTML = data.Check;
  })
  .catch(error => {
    console.error('Error:', error);
  });
