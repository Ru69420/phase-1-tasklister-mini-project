// prevent default behaviour : done

// * As a user, I should be able to type a task into the input field.

// when i write a task and click create new task button i expect to see the task i created as a list on My Todos section


// * As a user, I should be able to click some form of a submit button.:done

// the create new task button to work:done


// * As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

// 



const taskList = document.getElementById('tasks')
const taskInput = document.getElementById('new-task-description')
const form = document.getElementById('create-task-form')
const delBtn = document.createElement('button');


document.addEventListener("DOMContentLoaded", () => {

  form.addEventListener('submit' , function (event) {
  event.preventDefault();
  


let inputValue = event.target.children[1].value;

const newTask = document.createElement('li')

newTask.innerText = inputValue;

taskList.appendChild(newTask);

 delBtn.textContent = 'x';
 delBtn.addEventListener('click', (e) =>{
 li.appendChild(delBtn)
  e.target.parentNode.remove();
  newTask.append(delBtn)
 })
})

})