# ToDoList
Use firebase connection to create and store a ToDo list 



After creating a firebase account and firebase project for your app:

Step one
Open your terminal and navigate to the root directory of your JavaScript project.
Run the following command to install the Firebase CLI globally if you haven't already:

npm install -g firebase-tools

Step two
In your project terminal in VS Code 
Authenticate with Firebase by running:

firebase login

Step 3
Iniailize firebase project:

firebase init hosting

You will want to have the project already created and use the existing project from your directory.

this will also create your firebase.json file which holds all of the hosting rules
The firebaserc files is a script to identify the porject

Also creates a index.html which will be the app.

Step 4
After "Firebase Initialization Complete"

let's serve our app locally by tyoing in the terminal:

firebase serve


