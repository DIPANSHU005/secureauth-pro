const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();
    const button = document.querySelector(".primary-btn");

button.disabled = true;

button.innerHTML="Creating Account...";

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const response = await fetch("https://secureauth-pro-qfqm.onrender.com",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            name,
            email,
            password

        })

    });

    const data = await response.json();

    const message = document.getElementById("message");

    if(data.success){

        message.style.color="lightgreen";

        message.innerText=data.message;

        form.reset();

    }

    else{

        message.style.color="tomato";

        message.innerText=data.message;

    }

});
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    if(password.type==="password"){

        password.type="text";

        togglePassword.innerHTML="🙈";

    }

    else{

        password.type="password";

        togglePassword.innerHTML="👁️";

    }

});