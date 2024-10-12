//I removed the script from the HTML file, it was casuing issues- ST.
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
    