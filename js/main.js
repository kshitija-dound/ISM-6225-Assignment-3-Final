


document.addEventListener('DOMContentLoaded', function() {
  var ulElement = document.getElementById('links');
  var liElement = document.createElement('li');
  liElement.appendChild(document.createTextNode('created by main.js'));

  ulElement.appendChild(liElement);
});

function deleteAlert() {
    alert("Are you sure you want to delete?");
}

function addAlert() {
    alert("New condition added!");
}

function updateAlert() {
    alert("Condition updated!");
}

