var userPassword = document.getElementById("userPassword");
var userName = document.getElementById("userName");
var loginBtn = document.getElementById("loginBtn");

var user = "admin";
var pass = "123";

loginBtn.addEventListener("click", login);
function login() {
  var userInput = { UN: userName.value, UP: userPassword.value };
  if (userInput.UN == user && userInput.UP == pass) {
    document.getElementById("screen").style.visibility = "visible";
    document.getElementById("screen").innerHTML = "Welcome";
  } else {
    document.getElementById("screen").style.visibility = "visible";
    document.getElementById("screen").innerHTML = "Not Registered";
  }
}
// -----------------
document.getElementById("mergeBtn").addEventListener("click", mergeArrays);

function mergeArrays() {
  // Get the input values as strings
  const array1Str = document.getElementById("str1").value;
  const array2Str = document.getElementById("str2").value;

  // Convert the input strings into arrays by splitting at commas and converting to numbers
  var arr1 = array1Str.split(",");
  var arr2 = array2Str.split(",");
  var arr3 = [];

  arr1.forEach((element) => {
    if (!arr3.includes(element)) {
      arr3.push(element);
    }
  });
  arr2.forEach((element) => {
    if (!arr3.includes(element)) {
      arr3.push(element);
    }
  });

  alert(arr3);
}

// -----------------
var taskThree = document.getElementById("taskThree");
var taskName = document.getElementById("taskName");
var addBtn = document.getElementById("addBtn");

var taskList = document.createElement("ul");
var tasks = [{ name: "task1", status: "done" }];

// Function to display tasks from the array
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach(function (task, index) {
    var newTask = document.createElement("li");
    newTask.innerHTML =
      "<span class='task-name'>" +
      task.name +
      "</span>" +
      "<button class='taskDone'>✔</button>" +
      "<button class='taskDelete'>✘</button>";

    // Mark task as done if status is "done"
    if (task.status === "done") {
      newTask.style.color = "green";
    }

    // Add event listener to mark task as done
    newTask.querySelector(".taskDone").addEventListener("click", function () {
      markTaskDone(index);
    });

    // Add event listener to delete task
    newTask.querySelector(".taskDelete").addEventListener("click", function () {
      deleteTask(index);
    });

    taskList.appendChild(newTask);
  });
  taskThree.appendChild(taskList);
}

// Function to add new task
addBtn.addEventListener("click", function () {
  var taskNameValue = taskName.value.trim();
  if (taskNameValue !== "") {
    tasks.push({ name: taskNameValue, status: "not done" });
    taskName.value = ""; // Clear the input
    renderTasks(); // Re-render the task list
  }
});

// Function to mark task as done
function markTaskDone(index) {
  tasks[index].status = "done"; // Update the status in the array
  renderTasks(); // Re-render the task list
}

// Function to delete task
function deleteTask(index) {
  tasks.splice(index, 1); // Remove task from the array
  renderTasks(); // Re-render the task list
}

// Initial render of tasks
renderTasks();
