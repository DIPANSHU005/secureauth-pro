// =============================
// LOGIN FORM
// =============================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const button = document.querySelector(".primary-btn");

    button.disabled = true;
    button.innerHTML = "Logging In...";

    try {

        const response = await fetch("https://secureauth-pro-qfqm.onrender.com", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });

        const data = await response.json();

        const message = document.getElementById("message");

        if (data.success) {

            message.style.color = "#22C55E";
            message.innerHTML = "✅ Login Successful";

            // Save JWT Token
            localStorage.setItem("token", data.token);

            // Redirect after 1 second
            setTimeout(() => {

                window.location.href = "profile.html";

            }, 1000);

        } else {

            message.style.color = "#EF4444";
            message.innerHTML = data.message;

        }

    } catch (error) {

        document.getElementById("message").style.color = "#EF4444";
        document.getElementById("message").innerHTML =
            "Server Error. Please try again.";

        console.error(error);

    }

    button.disabled = false;
    button.innerHTML = "Login";

});


// =============================
// SHOW / HIDE PASSWORD
// =============================

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.innerHTML = "🙈";

    } else {

        passwordInput.type = "password";
        togglePassword.innerHTML = "👁️";

    }

});