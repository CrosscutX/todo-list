'use strict'
import './style.css';

let projItems = document.getElementsByClassName('project-item');
let todoItems = document.getElementsByClassName('todo-item');

reselectProjects();
reselectTodos();
//Array to hold all of my project objects
let todoArr = [{id: 0, title: 'Title', description: 'lorum ipsum', date: '2022-12-31', priority: 'Low'}];

//Storing IDs to keep track of selected project.
let currentID = 0;
let idCounter = 0;


 //Project button click handlers
(function clickEvents() {
    //Proj button click handlers-------------------------------------
    const projBtn = document.getElementById('projBtn');
    const projDel = document.querySelector('.project-delete');
    const projForm = document.querySelector('.project-form');
    const projSubBtn = document.querySelector('.project-submit');
    const projExitBtn = document.querySelector('.project-exit');

    projBtn.addEventListener('click', function(){
        projForm.style.visibility = 'visible';
    });

    projDel.addEventListener('click', function() {
        console.log('delete');
        for(let i = 0; i < projItems.length; i++) {
            if(projItems[i].getAttribute('data') === currentID){
                projItems.removeChild;
            }
        }
    });
     
    projSubBtn.addEventListener('click', function(){
        appendProject();
        reselectProjects();
        projForm.style.visibility = 'hidden';
    })

    projExitBtn.addEventListener('click', function(){
        projForm.style.visibility = 'hidden';
    })
    //-----------------------------------------------------------
    
    //List button click handler----------------------------------
    const listBtn = document.getElementById('listBtn');
    const listForm = document.querySelector('.list-form')
    const listSubBtn = document.querySelector('.list-submit');
    const listExitBtn = document.querySelector('.list-exit');

    listBtn.addEventListener('click', function(){
        listForm.style.visibility = 'visible';
    })

    listSubBtn.addEventListener('click', function(){
        appendTodos();
        reselectTodos();
        listForm.style.visibility = 'hidden';
    })

    listExitBtn.addEventListener('click', function(){
        listForm.style.visibility = 'hidden';
    })
    //---------------------------------------------------------
    const infoForm = document.querySelector('.todo-info')
    const infoExit = document.querySelector('.info-exit')
    
    infoExit.addEventListener('click', function(){
        infoForm.style.visibility = 'hidden';
        clearInfo();
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

function reselectTodos() {
    todoItems = document.getElementsByClassName('todo-item');

    //remove event listener from all items to avoid stacking.
    for(let i = 0; i < todoItems.length; i++) {
        todoItems[i].removeEventListener('click', displayInfo);
    }
    //add event listeners back so they all buttons are clickable.
    for(let i = 0; i < todoItems.length; i++) {
        todoItems[i].addEventListener('click', displayInfo)
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
    const projTitleText = document.querySelector('.project-input');
    //Adds the class to the item for styling purposes and adds the title defined in the click event to 
    //projTitle. Also adds the data attribute to be the title, for later use in identifying buttons.
    projItem.classList.add('project-item');
    projItem.setAttribute('data', idCounter);
    
    projTitle.setAttribute('data', idCounter);
    projTitle.textContent = projTitleText.value;
   //appending
    projItem.appendChild(projTitle);
    box.appendChild(projItem);
    
    projTitleText.value = '';
}

function appendTodos() {
    const body = document.querySelector('.list-body');
    const listTitle = document.querySelector('#list-title');
    const listDescription = document.querySelector('#list-description');
    const listDate = document.querySelector('#list-date');
    const radioLow = document.querySelector('#list-priority-low');
    const radioMedium = document.querySelector('#list-priority-medium');
    const radioHigh = document.querySelector('#list-priority-high');
    let radioChoice = 'Low';
    
    if(radioLow.checked){
        radioChoice = 'Low'
    } else if(radioMedium.checked){
        radioChoice = 'Medium';
    } else if(radioHigh.checked){
        radioChoice = 'High';
    }

    const newTodo = document.createElement('div');
    const newTitle = document.createElement('h2');
    const newDate = document.createElement('p');
    const newDel = document.createElement('span')
    //Add todo block--------------------------------------------
    newTitle.textContent = listTitle.value;
    newDate.textContent = listDate.value;
    newDel.textContent = 'delete';

    //Set the classlists for formatting, and add the data/id attributes to the delete button and
    //the todo card so that I can reference them later in the program to delete and pull up
    //the proper info.
    newTodo.classList.add('todo-item');
    newTodo.setAttribute('data', currentID);
    newTodo.setAttribute('id', newTitle.textContent);

    newTitle.setAttribute('data', currentID);
    newTitle.setAttribute('id', newTitle.textContent);

    newDate.setAttribute('data', currentID);
    newDate.setAttribute('id', newTitle.textContent);
    
    newDel.classList.add('material-symbols-outlined');
    newDel.setAttribute('data', currentID);
    newDel.setAttribute('id', newTitle.textContent);
    
    
    //append the new todos and info
    body.appendChild(newTodo);
    newTodo.appendChild(newTitle);
    newTodo.appendChild(newDate);
    newTodo.appendChild(newDel);
    //----------------------------------------------------------
    //Add to array to compare later on
    addTodoToArray(currentID, listTitle.value, listDescription.value, listDate.value, radioChoice);

    //After the input is added, clear the boxes
    listTitle.value = '';
    listDescription.value = 'Enter description here';
    listDate.value = '';
    radioLow.checked = false;
    radioMedium.checked = false;
    radioHigh.checked = false;

}

function addTodoToArray(id,title,description,date,priority){
    const newTodo = {
        id: id,
        title: title,
        description: description,
        date: date,
        priority: priority
    }

    todoArr.push(newTodo);
    console.log(todoArr);
}
//This function is needed so I can remove click events whenever a new project is added.
//The function itself should make the proper todo's visible.
function displayTodos(e){
    const currentProject = e.target;
    console.log(currentProject);
    const todos = document.querySelectorAll('.todo-item');
    currentID = currentProject.getAttribute('data');
    //Display is changed here instead of visibility, as visibility will have an impact on formatting.
    todos.forEach(element => {
        if(element.getAttribute('data') !== currentID){
            element.style.display = 'none';
        } else{
            element.style.display = 'flex'
        }
    });
    
}

function displayInfo(e) {
    const infoPanel = document.querySelector('.todo-info');
    infoPanel.style.visibility = 'visible';
    const currentTodo = e.target;
    const titleLbl = document.querySelector('.info-title');
   
    //loop through todo array and append the proper info to the info page.
    for(let i = 0; i < todoArr.length; i++){
        if(currentTodo.getAttribute('id') === todoArr[i].title && currentTodo.getAttribute('data') == todoArr[i].id){
            const newTitle = document.createElement('p');
            newTitle.textContent = todoArr[i].title;
            titleLbl.appendChild(newTitle);
            console.log('works');
        }
    }
   

}



function deleteTodos() {
    const delBtns = document.querySelectorAll('')
}

function clearInfo() {
    const titleLbl = document.querySelector('.info-title');
    const title = document.querySelector('.info-title p')

    
    titleLbl.removeChild(title);
}


