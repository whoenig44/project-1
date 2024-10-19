document.addEventListener('DOMContentLoaded', function() {
    const stores = JSON.parse(localStorage.getItem('stores')) || {};
    const dropdown = document.getElementById('dropdown');
    
    for (const store in stores) {
        const option = document.createElement('option');
        option.value = store;
        option.text = store;
        dropdown.add(option);

        const ul = document.createElement('ul');
        ul.id = store + '-list';
        ul.style.display = 'none';

        stores[store].forEach(storeItem => {
            const li = document.createElement('li');
            
            const itemText = document.createElement('span');
            itemText.textContent = storeItem.item;
            itemText.className = 'item-text'; // Add class for styling

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = storeItem.checked; // Use checked state from local storage
            checkbox.className = 'checkbox'; // Add class for styling
            checkbox.onclick = function() {
                updateCheckboxState(store, storeItem.item, checkbox.checked);
            };

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button'; // Add class for styling
            deleteButton.onclick = function() {
                ul.removeChild(li);
                removeItemFromLocalStorage(store, storeItem.item);
            };

            li.appendChild(checkbox);
            li.appendChild(itemText);
            li.appendChild(deleteButton);
            ul.appendChild(li);
        });

        document.getElementById('listsContainer').appendChild(ul);
    }
});

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

        let stores = JSON.parse(localStorage.getItem('stores')) || {};
        if (!stores[storeInput]) {
            stores[storeInput] = [];
        }
        localStorage.setItem('stores', JSON.stringify(stores));

        document.getElementById('storeInput').value = '';
    }
}

function showList() {
    const dropdown = document.getElementById('dropdown');
    const selectedStore = dropdown.value;

    const lists = document.querySelectorAll('#listsContainer ul');
    lists.forEach(list => list.style.display = 'none');

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

function updateCheckboxState(store, item, checked) {
    let stores = JSON.parse(localStorage.getItem('stores')) || {};
    if (stores[store]) {
        const storeItems = stores[store];
        for (let i = 0; i < storeItems.length; i++) {
            if (storeItems[i].item === item) {
                storeItems[i].checked = checked;
                break;
            }
        }
        localStorage.setItem('stores', JSON.stringify(stores));
    }
}

function removeItemFromLocalStorage(store, item) {
    let stores = JSON.parse(localStorage.getItem('stores')) || {};
    if (stores[store]) {
        stores[store] = stores[store].filter(storeItem => storeItem.item !== item);
        localStorage.setItem('stores', JSON.stringify(stores));
    }
}

function addItem() {
    const dropdown = document.getElementById('dropdown');
    const selectedStore = dropdown.value;
    const itemInput = document.getElementById('itemInput').value;

    if (selectedStore && itemInput) {
        const selectedList = document.getElementById(selectedStore + '-list');
        const li = document.createElement('li');

        const itemText = document.createElement('span');
        itemText.textContent = itemInput;
        itemText.className = 'item-text'; // Add class for styling

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox'; // Add class for styling
        checkbox.onclick = function() {
            updateCheckboxState(selectedStore, itemInput, checkbox.checked);
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button'; // Add class for styling
        deleteButton.onclick = function() {
            selectedList.removeChild(li);
            removeItemFromLocalStorage(selectedStore, itemInput);
        };

        li.appendChild(checkbox);
        li.appendChild(itemText);
        li.appendChild(deleteButton);
        selectedList.appendChild(li);

        let stores = JSON.parse(localStorage.getItem('stores')) || {};
        if (stores[selectedStore]) {
            stores[selectedStore].push({ item: itemInput, checked: false });
            localStorage.setItem('stores', JSON.stringify(stores));
        }

        document.getElementById('itemInput').value = '';
    }
}
