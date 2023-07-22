// JavaScript
const cardsContainer = document.querySelector(".to-do .tasks-container");
let addedTasks = [];

function fetchTasks() {
  fetch("https://64bbf2317b33a35a4446d640.mockapi.io/Tasks")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error Occurred");
      }
    })
    .then((data) => {
      data.forEach((task) => {
        createTaskElement(task.name);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

fetchTasks();

function createTaskElement(taskName) {
  const task = document.createElement("div");
  task.classList.add("task");

  const taskNameElement = document.createElement("span");
  taskNameElement.textContent = taskName;
  taskNameElement.classList.add("task-name");
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("id", "delete");
  
  const updateBtn = document.createElement("button");
  updateBtn.textContent = "Update";
  updateBtn.setAttribute("id", "update");

  task.appendChild(taskNameElement);
  task.appendChild(deleteBtn);
  task.appendChild(updateBtn);

  cardsContainer.appendChild(task);
}

function addTask() {
  const taskText = document.getElementById("task-desc").value;
  if (taskText.trim() === "") {
    return;
  }
  
  createTaskElement(taskText);
  addedTasks.push(taskText);
  localStorage.setItem("TaskName", JSON.stringify(addedTasks));
  location.reload();
}

const addTaskBtn = document.querySelector(".to-do #add-task");
addTaskBtn.addEventListener("click", addTask);

if (localStorage.length !== 0) {
  addedTasks = JSON.parse(localStorage.getItem("TaskName"));
  addedTasks.forEach((taskName) => {
    createTaskElement(taskName);
  });
}

/////////////////Delete a Task//////////////////


function deleteTask(taskElement) {
    let taskNameElement = document.querySelector(".task-name");
    let taskName = taskNameElement.textContent;
    
    taskElement.remove();
     
    addedTasks = addedTasks.filter((task) => task !== taskName);
    localStorage.setItem("TaskName", JSON.stringify(addedTasks));
  }
  
  cardsContainer.addEventListener("click", (event) => {
    if (event.target.matches("#delete")) {
        let taskElement = event.target.closest(".task");
      deleteTask(taskElement);
    }
});

/////////////////Search A Task//////////////////

function searchTasks() {
    const searchText = document.getElementById("search").value.trim().toLowerCase();
    const tasks = document.querySelectorAll(".task");
  
    tasks.forEach((task) => {
      const taskNameElement = task.querySelector(".task-name");
      const taskName = taskNameElement.textContent.toLowerCase();
  
      if (taskName.includes(searchText)) {
        task.style.display = "flex";
      } else {
        task.style.display = "none";
      }
    });
}

  const searchInput = document.getElementById("search");
searchInput.addEventListener("input", searchTasks);


/////////////////Update A Task//////////////////

function updateTaskName(taskElement) {
    const taskNameElement = taskElement.querySelector(".task-name");
    const currentTaskName = taskNameElement.textContent;
  
    
    const newTaskName = prompt("Enter the new task name:", currentTaskName);
  
    if (newTaskName === null || newTaskName.trim() === "") {
      return;
    }
  
    taskNameElement.textContent = newTaskName;
  
    
    const index = addedTasks.indexOf(currentTaskName);
      addedTasks[index] = newTaskName;
      localStorage.setItem("TaskName", JSON.stringify(addedTasks));
}
  
cardsContainer.addEventListener("click", (event) => {
    if (event.target.matches("#delete")) {
      const taskElement = event.target.closest(".task");
      deleteTask(taskElement);
    } else if (event.target.matches("#update")) {
      const taskElement = event.target.closest(".task");
      updateTaskName(taskElement);
    }
});