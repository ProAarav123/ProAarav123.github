<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Reminder</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        .item { margin: 10px; padding: 10px; border: 1px solid #ccc; }
        .remove { color: red; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Shopping Reminder</h1>
    <input type="text" id="itemInput" placeholder="Enter item">
    <button onclick="addItem()">Add</button>
    <div id="items"></div>

    <script>
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

        window.onload = renderList;
    </script>
</body>
</html>
