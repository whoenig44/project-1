

document.addEventListener('DOMContentLoaded', function() {
    // Populate dropdown with stored data on page load
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
        stores[store].forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
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

function addItem() {
    const dropdown = document.getElementById('dropdown');
    const selectedStore = dropdown.value;
    const itemInput = document.getElementById('itemInput').value;
    if (selectedStore && itemInput) {
        const selectedList = document.getElementById(selectedStore + '-list');
        const li = document.createElement('li');
        li.textContent = itemInput;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            selectedList.removeChild(li);
        };
        li.appendChild(deleteButton);
        selectedList.appendChild(li);

        let stores = JSON.parse(localStorage.getItem('stores')) || {};
        if (stores[selectedStore]) {
            stores[selectedStore].push(itemInput);
            localStorage.setItem('stores', JSON.stringify(stores));
        }

        document.getElementById('itemInput').value = '';
    }
}
