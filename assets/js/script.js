<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Dropdown Example</title>
</head>
<body>
    <input type="text" id="textInput" placeholder="Enter text here">
    <button onclick="addToDropdown()">Add to Dropdown</button>
    <select id="dropdown">
        <option value="">Select an option</option>
    </select>

    <select id="itemDropdown" onchange="addItemToList()">
        <option value="Item 1">Item 1</option>
        <option value="Item 2">Item 2</option>
    </select>

    <script>
        let items = [];

        function addToDropdown() {
            const textInput = document.getElementById('textInput').value;
            if (textInput) {
                items.push(textInput);
                const dropdown = document.getElementById('dropdown');
                const option = document.createElement('option');
                option.value = textInput;
                option.text = textInput;
                dropdown.add(option);
                console.log(items); // Log the array to verify the items
            }
        }
    </script>
</body>
</html>