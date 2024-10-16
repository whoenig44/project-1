
 const storeInput = document.querySelector('.storeInput');
    const itemInput = document.querySelector('.itemInput');
function addToDropdown() {
    const storeInput = document.getElementById('storeInput').value;
    if (storeInput) {
        const dropdown = document.getElementById('dropdown');
        const option = document.createElement('option');
        option.value = storeInput;
        option.text = storeInput;
        dropdown.add(option);

        const listsContainer = document.getElementById('listsContainer');
            const ul = document.createElement('ul');
            ul.id = storeInput + '-list';
            ul.style.display = 'none';
            listsContainer.appendChild(ul);

            // Retrieve existing data from local storage
        let stores = JSON.parse(localStorage.getItem('stores')) || {};

        // Add new store to the data
        if (!stores[storeInput]) {
            stores[storeInput] = [];
        }

        // Save updated data back to local storage
        localStorage.setItem('stores', JSON.stringify(stores));

            document.getElementById('storeInput').value = '';
        }
    }
localStorage.setItem('storeInput', JSON.stringify(item));

let itemList = JSON.parse(localStorage.getItem('items')) || {};
 
    
    localStorage.setItem('items', JSON.stringify(items));
        document.getElementById('itemInput').value = '';
    
    function showList() {
        const dropdown = document.getElementById('dropdown');
    let stores = localStorage.getItem("storeInput");
        const selectedStore = dropdown.value;

        // Hide all lists
        const lists = document.querySelectorAll('#listsContainer ul');
        lists.forEach(list => list.style.display = 'none');

        // Show the selected store's list
        if (selectedStore) {
            const selectedList = document.getElementById(selectedStore + '-list');
            if (selectedList) {
                selectedList.style.display = 'block';
                document.getElementById('itemInputContainer').style.display = 'block';
            }
        } else {
            document.getElementById('itemInputContainer').style.display = 'none';
        }
    }


    function addItem() {
        const dropdown = document.getElementById('dropdown');
        const selectedStore = dropdown.value;
        const itemInput = document.getElementById('itemInput').value;
        const myArray = ["${itemInput}"];

        if (selectedStore && itemInput) {
            const selectedList = document.getElementById(selectedStore + '-list');
            const li = document.createElement('li');
            li.textContent = itemInput;

            // Add delete button to each item
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function() {
                selectedList.removeChild(li);
            };
            li.appendChild(deleteButton);

            selectedList.appendChild(li);

            // Clear the item input field
            document.getElementById('itemInput').value = '';
        }
    }



        

//I found this and think it may be what we need for the item checkboxes. 
//const checkbox = document.createElement('input');
//checkbox.type = 'checkbox';
//checkbox.id = 'listCheckbox';
//checkbox.name = 'listCheckbox';

//Checkbox label
//const label = document.createElement('label');
//label.hemlFor = 'listCheckbox';
//label.appendChild(document.createTextNode('List Item'));

//Append the checkbox and label to a container element
//const container = document.getElementById('listContainer');
//container.appendChild(checkbox);
//container.appendChild(label);
       