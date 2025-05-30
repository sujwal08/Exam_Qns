const form = document.getElementById('taskForm');
const input = document.getElementById('nameInput');
const list = document.getElementById('taskList');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const taskText =input.ariaValueMax.trim();
    if (taskText === '') return;

    const li =document.createElement('li');
    li.textContent = taskText + ' ';

    const deleteBtn = document
})