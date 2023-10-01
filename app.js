// Initialize Firebase with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYRGv9ywL0jo-pmFb5kGT2R9nDZYmSd0c",
    authDomain: "todolist-5c9c3.firebaseapp.com",
    databaseURL: "https://todolist-5c9c3-default-rtdb.firebaseio.com",
    projectId: "todolist-5c9c3",
    storageBucket: "todolist-5c9c3.appspot.com",
    messagingSenderId: "745955379661",
    appId: "1:745955379661:web:89b10e17d9a73b37e65c84",
    measurementId: "G-EGJZKGL0XG"
  };
  
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const taskRef = database.ref("tasks");

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to add a new task to Firebase
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const newTaskRef = taskRef.push();
        newTaskRef.set({
            text: taskText,
            completed: false
        });
        taskInput.value = "";
    }
}

// Function to display tasks from Firebase
function displayTasks(snapshot) {
    const tasks = snapshot.val();
    taskList.innerHTML = "";
    for (const taskId in tasks) {
        const task = tasks[taskId];
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""}>
            <span>${task.text}</span>
        `;
        taskItem.querySelector("input").addEventListener("change", (e) => {
            const updatedTaskRef = taskRef.child(taskId);
            updatedTaskRef.update({ completed: e.target.checked });
        });
        taskList.appendChild(taskItem);
    }
}

// Event listener for adding a new task
addTaskBtn.addEventListener("click", addTask);

// Event listener for displaying tasks when the page loads
taskRef.on("value", displayTasks);
