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
        new_task_label.classList.add("important");
    }
    if (!task.isPrivate){
        new_task_checkbox_div.insertAdjacentHTML("beforeend" ,'<svg class="bi bi-people-fill shared-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/><path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></svg>');
    }
    if (task.deadline != undefined){
        let new_task_deadline = document.createElement('small');
        new_task_deadline.innerText = task.deadline.format();
        new_task_div.appendChild(new_task_deadline);
    }
    

    tasklist_elem.appendChild(new_task_item);
}
