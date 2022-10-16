import Project, {Todo} from './logic';
import './style.css';

let projItems = document.getElementsByClassName('project-item');
console.log(projItems);
let projArr = [];

const projBtn = document.getElementById('projBtn');
const projForm = document.querySelector('.project-form');
const projSubBtn = document.querySelector('.project-submit');
const projExitBtn = document.querySelector('.project-exit');
 //Project button click handlers
(function clickEvents() {
    
    projBtn.addEventListener('click', function(){
        projForm.style.visibility = 'visible';
    });
    //Array to hold all of my project objects
    
    projSubBtn.addEventListener('click', function(){
        const projTitleText = document.querySelector('.project-input').value;
        let newProject = new Project(projTitleText);
       
        projArr.push(newProject);
       
        appendProject();
        projForm.style.visibility = 'hidden';
        //reselect all project items for click events;
        reselectProjects();
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
        projItems[i].removeEventListener('click', printStuff);
    }
    //add event listeners back so they all buttons are clickable.
    for(let i = 0; i < projItems.length; i++) {
        projItems[i].addEventListener('click', printStuff)
       }
    console.log(projItems);
}
//The functionality of appending elements to the project box.
function appendProject() {
    //Selects the project box
    const box = document.querySelector('.project-box');
    //Creates a new div and h2 element to insert into the project box.
    const projItem = document.createElement('div');
    const projTitle = document.createElement('h2');
    const projTitleText = document.querySelector('.project-input').value;
    //Adds the class to the item for styling purposes and adds the title defined in the click event to 
    //projTitle. Also adds the data attribute to be the title, for later use.
    projItem.classList.add('project-item');
    projItem.setAttribute('data', projTitleText);
    projTitle.textContent = projTitleText;
   //appending
    projItem.appendChild(projTitle);
    box.appendChild(projItem);

}

function printStuff(){
    console.log('AHHHHHHHHHHHHH');
}




