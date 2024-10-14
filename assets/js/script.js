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
        