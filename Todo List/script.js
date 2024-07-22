document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const clearAllButton = document.getElementById('clearAllButton');

    addTaskButton.addEventListener('click', addTask);
    clearAllButton.addEventListener('click', clearAllTasks);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Lütfen bir görev girin.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    function clearAllTasks() {
        taskList.innerHTML = '';
    }
});
