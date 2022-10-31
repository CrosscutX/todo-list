'use strict'
import { data } from 'browserslist';
import Project, {Todo} from './logic';
import './style.css';

let projItems = document.getElementsByClassName('project-item');
reselectProjects();
//Array to hold all of my project objects
let projArr = [];
storeProj(0, 'Default Project');
//Storing IDs to keep track of selected project.
let currentID = 0;
let idCounter = 0;


 //Project button click handlers
(function clickEvents() {
    //Proj button click handlers
    const projBtn = document.getElementById('projBtn');
    const projForm = document.querySelector('.project-form');
    const projSubBtn = document.querySelector('.project-submit');
    const projExitBtn = document.querySelector('.project-exit');

    projBtn.addEventListener('click', function(){
        projForm.style.visibility = 'visible';
    });
     
    projSubBtn.addEventListener('click', function(){
        appendProject();
        reselectProjects();
        projForm.style.visibility = 'hidden';
    })

    projExitBtn.addEventListener('click', function(){
        projForm.style.visibility = 'hidden';
    })
    //List button click handler
    const listBtn = document.getElementById('listBtn');
    const listForm = document.querySelector('.list-form')
    const listSubBtn = document.querySelector('.list-submit');
    const listExitBtn = document.querySelector('.list-exit');

    listBtn.addEventListener('click', function(){
        listForm.style.visibility = 'visible';
    })

    listSubBtn.addEventListener('click', function(){
        listForm.style.visibility = 'hidden';
    })

    listExitBtn.addEventListener('click', function(){
        listForm.style.visibility = 'hidden';
    })
    
})();


function reselectProjects() {
    projItems = document.getElementsByClassName('project-item');
    //remove event listener from all items to avoid stacking.
    for(let i = 0; i < projItems.length; i++) {
        projItems[i].removeEventListener('click', displayTodos);
    }
    //add event listeners back so they all buttons are clickable.
    for(let i = 0; i < projItems.length; i++) {
        projItems[i].addEventListener('click', displayTodos)
       }

}
//The functionality of appending elements to the project box.
function appendProject() {
    //Selects the project box
    idCounter++
    const box = document.querySelector('.project-box');
    //Creates a new div and h2 element to insert into the project box.
    const projItem = document.createElement('div');
    const projTitle = document.createElement('h2');
    const projTitleText = document.querySelector('.project-input').value;
    //Adds the class to the item for styling purposes and adds the title defined in the click event to 
    //projTitle. Also adds the data attribute to be the title, for later use in identifying buttons.
    projItem.classList.add('project-item');
    projItem.setAttribute('data', idCounter);
    projTitle.textContent = projTitleText;
   //appending
    projItem.appendChild(projTitle);
    box.appendChild(projItem);
    //Increment ID variable and store project in array
    
    storeProj(idCounter, projTitleText);
}
//This function is needed so I can remove click events whenever a new project is added.
//The function itself should make the proper todo's visible.
function displayTodos(e){
    const currentProject = e.target;
    const todos = document.querySelectorAll('.todo-item')
    currentID = currentProject.getAttribute('data')
    
    todos.forEach(element => {
        if(element.getAttribute('data') !== currentID){
            element.style.visibility = 'hidden';
        } else{
            element.style.visibility = 'visible'
        }
    });
    
    console.log(currentProject);
}

function storeProj(id, name){
    console.log(id);
    const newProj = new Project(id, name);
    projArr.push(newProj);
    console.log(projArr);
}




