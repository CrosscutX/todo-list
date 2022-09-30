import Project from './logic';
import './style.css';

function clickEvents() {
    //Project button click handlers
    const projBtn = document.getElementById('projBtn');
    const projForm = document.querySelector('.project-form');
    const projSubBtn = document.querySelector('.project-submit');
    const projExitBtn = document.querySelector('.project-exit');
    
    projBtn.addEventListener('click', function(){
        projForm.style.visibility = 'visible';
    });
    let projArr = [];
    
    projSubBtn.addEventListener('click', function(){
        const projTitle = document.querySelector('.project-input').value;
        console.log(projTitle);
        let newProject = new Project(projTitle);
        projArr.push(newProject);
        console.log(projArr);
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

    })

    listExitBtn.addEventListener('click', function(){
        listForm.style.visibility = 'hidden';
    })
    
}

clickEvents();


    



