import Project, {Todo} from './logic';
import './style.css';

let projItems = document.querySelector('.project-item');
console.log(projItems);
let projArr = [];

const projBtn = document.getElementById('projBtn');
const projForm = document.querySelector('.project-form');
const projSubBtn = document.querySelector('.project-submit');
const projExitBtn = document.querySelector('.project-exit');
 //Project button click handlers
function clickEvents() {

    projItems.addEventListener('click', function(){
        console.log('FUCK');
    })

    projBtn.addEventListener('click', function(){
        projForm.style.visibility = 'visible';
    });
    //Array to hold all of my project objects
    
    
    projSubBtn.addEventListener('click', function(){
        const projTitleText = document.querySelector('.project-input').value;
        let newProject = new Project(projTitleText);
       
        projArr.push(newProject);
        console.log(projArr);
       
        appendProject();
        projForm.style.visibility = 'hidden';
        //reselect all project items for click events;
        projItems = document.querySelectorAll('.project-item');
        console.log(projItems);
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
    
}
//The functionality of appending elements to the project box.
function appendProject() {
    //Selects the project box
    const box = document.querySelector('.project-box');
    console.log(box);
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

clickEvents();


    



