const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

function addTask() {

  const title = prompt("Enter task title:");
  const description = prompt("Enter task description:");
  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();


  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status! Please enter: todo, doing, or done.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }



  const newTask = {
    id: initialTasks.length + 1,
    title: title,
    description: description,
    status: status,
  };

  initialTasks.push(newTask);
}
while (initialTasks.length < 6) {
  addTask();
}



function getCompletedTasks() {
  return initialTasks.filter(function(task) {
    return task.status === "done";
  });
}


function showAllTasks() {
  console.log("All tasks:", initialTasks);
}


function showCompletedTasks() {
  const completedTasks = getCompletedTasks();
  console.log("Completed tasks:", completedTasks);
}



if (initialTasks.length === 6) {
  alert("There are enough tasks on your board, please check them in the console.");
}

showAllTasks();
showCompletedTasks();