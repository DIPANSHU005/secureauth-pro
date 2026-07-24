const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

fetch("http://localhost:5000/api/auth/profile", {

    method: "GET",

    headers: {

        Authorization: `Bearer ${token}`

    }

})

.then(response => response.json())

.then(data => {

    if (!data.success) {

        localStorage.removeItem("token");

        window.location.href = "login.html";

        return;

    }

    document.getElementById("userName").innerHTML = data.user.name;
    document.getElementById("profileAvatar").innerHTML =
    data.user.name.charAt(0).toUpperCase();
    document.getElementById("navUser").innerHTML =
`Hi, ${data.user.name}`;

    document.getElementById("userEmail").innerHTML = data.user.email;

})

.catch(error => {

    console.error(error);

});

function logout(){

    localStorage.removeItem("token");

    window.location.href="login.html";

}

document.getElementById("logoutBtn").addEventListener("click", logout);

document.getElementById("logoutBtnNav").addEventListener("click", logout);