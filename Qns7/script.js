const form = document.getElementById('taskForm');
const input = document.getElementById('nameInput');
const list=document.getElementById('taskList');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const li=document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value='';
});