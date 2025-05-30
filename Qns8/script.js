const form = document.getElementById('taskForm');
const input = document.getElementById('nameInput');
const list = document.getElementById('taskList');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const taskText = input.value.trim();
    if (taskText === '') return;

    const li =document.createElement('li');
    li.textContent = taskText + ' ';

    const deleteBtn = documment.createElement('button');
    deleteBtn.textContent ='Delete';
    deleteBtn.addEventListener('click', function () {
    list.removeChild(li);
    
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value='';
});