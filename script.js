//Access elements from the DOM and store them in variables
var newItem = document.getElementById('new-item');
var addItemButton = document.getElementById('add-item');
var clearItemButton = document.getElementById('clear-items');
var groceryListItems = [];

newItem.addEventListener('keyup', checkIfEmpty);
addItemButton.addEventListener('click', addListItem);
clearItemButton.addEventListener('click', clearList);

function checkIfEmpty() {
  if(newItem.value != '') {
    addItemButton.removeAttribute('disabled');
  }
  else {
    addItemButton.setAttribute('disabled', 'true');
  }
}

function addListItem() {
  groceryListItems.push(newItem.value);

  var item = document.createElement('span');
    item.setAttribute('class','list-item-name');

    var itemText = document.createTextNode(newItem.value);
    item.appendChild(itemText);

    
    var removeItemButton = document.createElement('button');
    var confirmItemButton = document.createElement('button');

    removeItemButton.setAttribute('class','remove-item');
    confirmItemButton.setAttribute('class','confirm-item');

    removeItemButton.innerHTML = `<i class="far fa-trash-alt"></i>`;
    confirmItemButton.innerHTML = `<i class="fas fa-check"></i>`;
    
    var div = document.createElement('div');
    div.setAttribute('class','list-row');
    div.appendChild(item);
    div.appendChild(removeItemButton);
    div.appendChild(confirmItemButton);

    var section = document.getElementById('grocery-list');
    
    section.appendChild(div);

    newItem.value = '';
    checkIfEmpty();
}

function clearList() {
  var section = document.getElementById('grocery-list');
  var divItems = document.querySelectorAll('.list-row');

  section.innerHTML = '';
}