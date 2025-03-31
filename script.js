document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("loggedIn")) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("app-container").style.display = "block";
    }
});

function login() {
    let username = document.getElementById("username").value;
    if (username.trim() !== "") {
        localStorage.setItem("loggedIn", true);
        document.getElementById("login-container").style.display = "none";
        document.getElementById("app-container").style.display = "block";
    } else {
        alert("Enter a valid username!");
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    location.reload();
}

function addItem() {
    let item = document.getElementById("item").value;
    if (item.trim() !== "") {
        let list = document.getElementById("list");
        let li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
        document.getElementById("item").value = "";
    } else {
        alert("Enter a valid item!");
    }
}
