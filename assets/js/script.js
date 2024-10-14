/*function addToDropdown() {
    const input = document.getElementById('storeInput').value;
    const dropdown = document.getElementById('dropdown');

    if (storeInput) {
        const newOption = document.createElement('option');
        newOption.value = input;
        newOption.textContent = input;
        dropdown.appendChild(newOption);
        document.getElementById('store_value').innerHTML = input;
        document.getElementById('storeInput').value = ''; // Clear input
    } else {
        alert('Please enter store name');
    }
}*/

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

            document.getElementById('storeInput').value = '';
        }
    }

    function showList() {
        const dropdown = document.getElementById('dropdown');
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



//I removed the script from the HTML file, it was casuing issues- ST.
       /* let items = [];

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
    */

        /*This is the code from the activities we did in week 4 26- local storage todos:
        I think this is a good example of how to store the data in local storage. I will use this as a reference to store the data in local storage. -ST.
        
        const todoInput = document.querySelector('#todo-text');
        const todoForm = document.querySelector('#todo-form');
        const todoList = document.querySelector('#todo-list');
        const todoCountSpan = document.querySelector('#todo-count');

const todos = [];

//I found this and think it may be what we need for the item checkboxes. 
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'listCheckbox';
checkbox.name = 'listCheckbox';

//Checkbox label
const label = document.createElement('label');
label.hemlFor = 'listCheckbox';
label.appendChild(document.createTextNode('List Item'));

//Append the checkbox and label to a container element
const container = document.getElementById('listContainer');
container.appendChild(checkbox);
container.appendChild(label);
 */       