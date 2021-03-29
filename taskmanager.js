"use strict" ;

let tasklist_elem = document.getElementById('tasklist');

for (let [i,task] of tasks.tasks.entries()){
    let new_task_item = document.createElement('li');
    new_task_item.className = "list-group-item";

    let new_task_div = document.createElement('div');
    new_task_div.className = "d-flex w-100 justify-content-between";
    new_task_item.appendChild(new_task_div);

    let new_task_checkbox_div = document.createElement('div');
    new_task_checkbox_div.className = "custom-control custom-checkbox";
    new_task_div.appendChild(new_task_checkbox_div);

    let new_task_checkbox = document.createElement('input');
    new_task_checkbox.className = "custom-control-input";
    new_task_checkbox.setAttribute ("type", "checkbox");
    new_task_checkbox.setAttribute ("id", "check-t"+i);
    new_task_checkbox_div.appendChild(new_task_checkbox);
    if (task.isUrgent){
        new_task_checkbox.classList.add ("important");
    }

    let new_task_label = document.createElement('label');
    new_task_label.className = "custom-control-label";
    new_task_label.setAttribute ("for", "check-t"+i);
    new_task_label.innerText = task.description;
    new_task_checkbox_div.appendChild(new_task_label)
    if (task.isUrgent){
        new_task_label.classList.add ("important");
    }
    if (task.isPrivate){
        new_task_checkbox_div.insertAdjacentHTML("beforeend" ,'<svg class="bi bi-person-square private-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>');
    }
    if (task.deadline != undefined){
        let new_task_deadline = document.createElement('small');
        new_task_deadline.innerText = task.deadline.format();
        new_task_div.appendChild(new_task_deadline);
    }
    

    tasklist_elem.appendChild(new_task_item);
}
