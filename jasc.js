function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value === '') return;
    
    const taskList = document.querySelector('#todo .task-list');
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `<span>${input.value}</span> <button onclick="editTask(this)">Edit</button>`;
    
    taskList.appendChild(taskDiv);
    input.value = '';
}

function editTask(button) {
    const span = button.previousElementSibling;
    const newValue = prompt("Edit your task:", span.innerText);
    if (newValue) span.innerText = newValue;
}