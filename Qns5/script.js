const form=document.getElementById('taskForm');
const input=document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

form.addEventListener('submit',function(e) {
    e.preventDefault()
     const taskText = input.value.trim();
    if (taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
      taskList.appendChild(li);
      input.value = '';
    }
});