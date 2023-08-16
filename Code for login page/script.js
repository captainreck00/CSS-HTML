document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("login_form");
    const emailValidationMessage = document.getElementById("emailValidationMessage");
  
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const form_data = new FormData(form);
        const email = form_data.get('email');
        const password = form_data.get('password');
  
        if (email.includes("@") && email.includes(".com")) {
            
        } else {
            
        }
    });
  });
//   By wrapping your code within the DOMContentLoaded event listener, you ensure that the code only executes after the entire DOM has been loaded, which will prevent the getElementById call from returning null.

const data_sent={
  email:"lmao@gmail.com",
  password:"lmao1233"
}


const Authorization={
  method : "POST",
  headers: {
    'Content_type':"application/json"},
  body:JSON.stringify(data_sent)
};  


fetch("http://127.0.0.1:5000",Authorization)
  .then(response =>{
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json()
  })
  .then(data =>{
    document.getElementById("work").innerHTML=data[1]
  })
  .catch(error => {
    // Handle errors here
    console.error('Error:', error);
  });


  
  
  