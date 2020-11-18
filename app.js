// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

 
//Load all events listeners

loadEventListeners();

function loadEventListeners(){

    //Add task event
    form.addEventListener('submit', addTask);

    //Remove task event
    taskList.addEventListener('click', removeTask);;

    //Clear Task
    clearBtn.addEventListener('click', clearTasks);


};



//ADD TASK
    function addTask(e) {
        if (taskInput.value === '') {
            alert('Add a Task');            
        };

        //Create Li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';

        //create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));

        //Create New Link element
        const link = document.createElement('a');

        //Add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //Append the link to li
        li.appendChild(link);

        //Append li to ul
        taskList.appendChild(li);

        //Clear Input

        taskInput.value = '';
        e.preventDefault();
    }


//REMOVE TASK
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you Sure?')){
        e.target.parentElement.parentElement.remove();
    }}

};

// CLEAR TASKS
function clearTasks() {
    taskList.innerHTML = '';

}

function loadEventListeners(){
    clearBtn.addEventListener('click', function () {
        document.querySelector('.collection').innerHTML = '';
    });
}