<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Reminder</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin: 20px; }
        .item { margin: 10px; padding: 10px; border: 1px solid #ccc; display: flex; justify-content: space-between; }
        .remove { color: red; cursor: pointer; }
        #shoppingPage { display: none; }
    </style>
</head>
<body>

    <!-- Login Page -->
    <div id="loginPage">
        <h1>Login</h1>
        <input type="text" id="username" placeholder="Enter username">
        <input type="password" id="password" placeholder="Enter password">
        <button id="loginButton">Login</button>
    </div>

    <!-- Shopping Reminder Page -->
    <div id="shoppingPage">
        <h1>Shopping Reminder</h1>
        <button id="logoutButton">Logout</button>
        <input type="text" id="itemInput" placeholder="Enter item">
        <button id="addItemButton">Add</button>
        <div id="items"></div>
    </div>

    <script defer>
        let items = JSON.parse(localStorage.getItem("shoppingList")) || [];

        function renderList() {
            const itemsDiv = document.getElementById("items");
            itemsDiv.innerHTML = "";
            items.forEach((item, index) => {
                itemsDiv.innerHTML += `<div class='item'>
                    ${item} <span class='remove' onclick='removeItem(${index})'>❌</span>
                </div>`;
            });
        }

        function addItem() {
            const input = document.getElementById("itemInput");
            if (input.value.trim() !== "") {
                items.push(input.value.trim());
                localStorage.setItem("shoppingList", JSON.stringify(items));
                input.value = "";
                renderList();
            }
        }

        function removeItem(index) {
            items.splice(index, 1);
            localStorage.setItem("shoppingList", JSON.stringify(items));
            renderList();
        }

        function login() {
            let user = document.getElementById("username").value;
            let pass = document.getElementById("password").value;

            if (user === "admin" && pass === "1234") {
                localStorage.setItem("loggedIn", "true");
                showShoppingPage();
            } else {
                alert("Invalid login!");
            }
        }

        function logout() {
            localStorage.removeItem("loggedIn");
            showLoginPage();
        }

        function showShoppingPage() {
            document.getElementById("loginPage").style.display = "none";
            document.getElementById("shoppingPage").style.display = "block";
            renderList();
        }

        function showLoginPage() {
            document.getElementById("loginPage").style.display = "block";
            document.getElementById("shoppingPage").style.display = "none";
        }

        // Ensure buttons work properly
        document.getElementById("loginButton").addEventListener("click", login);
        document.getElementById("logoutButton").addEventListener("click", logout);
        document.getElementById("addItemButton").addEventListener("click", addItem);

        // Load the correct page on startup
        window.onload = function() {
            if (localStorage.getItem("loggedIn") === "true") {
                showShoppingPage();
            } else {
                showLoginPage();
            }
        };
    </script>

</body>
</html>
