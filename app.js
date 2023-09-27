// Import the Firebase SDK
import firebase from 'firebase/app';
import 'firebase/auth'; // If you need authentication
import 'firebase/firestore'; // If you need Firestore
import 'firebase/database'; // If you need Realtime Database
// Add other Firebase services as needed

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
  
  // Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();


// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Add the task to Firestore
        db.collection("tasks").add({
            text: taskText,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            taskInput.value = "";
        })
        .catch(error => {
            console.error("Error adding task: ", error);
        });
    }
}

// Function to display tasks from Firestore
function displayTasks() {
    const taskList = document.getElementById("taskList");

    db.collection("tasks")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => {
            taskList.innerHTML = "";
            snapshot.forEach(doc => {
                const taskData = doc.data();
                const taskItem = document.createElement("li");
                taskItem.textContent = taskData.text;
                taskList.appendChild(taskItem);
            });
        });
}

// Call the displayTasks function to initially load tasks
displayTasks();