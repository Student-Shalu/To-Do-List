function addTask(){
    const taskInput=document.getElementById("taskInput");
    const taskList=document.getElementById("taskList");
    if(taskInput.value){
        const li=document.createElement("li");
        li.textContent=taskInput.value;
        taskList.appendChild(li);
        taskList.style.listStyle="roman";
        taskList.style.fontSize="1.5rem";
        taskList.style.fontWeight="bold";
        taskList.style.margin="10px";
        li.style.margin="10px";
        li.style.padding="10px";
        li.style.borderBottom="1px solid black";
        taskInput.value="";
    }
}
function handleKeyPress(event){
    if(event.key== "Enter"){
        addTask();
    }
}
function toggleDone(event){
    const target=event.target;
    if(target.tagName==="LI"){
        target.classList.toggle('done');
    }
}
