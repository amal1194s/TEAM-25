let tasks = JSON.parse(localStorage.getItem("tasks")) || []

let filter="all"

function save(){
localStorage.setItem("tasks",JSON.stringify(tasks))
}

function addTask(){

const text=document.getElementById("taskInput").value
const priority=document.getElementById("priority").value

if(text==="") return

tasks.push({
text,
priority,
completed:false
})

document.getElementById("taskInput").value=""

render()

}

function toggleTask(i){

tasks[i].completed=!tasks[i].completed

render()

}

function deleteTask(i){

tasks.splice(i,1)

render()

}

function setFilter(type){

filter=type

render()

}

function render(){

const list=document.getElementById("taskList")

list.innerHTML=""

let completed=0

tasks.forEach((t,i)=>{

if(t.completed) completed++

if(filter==="completed" && !t.completed) return
if(filter==="pending" && t.completed) return

const card=document.createElement("div")

card.className="task-card"

card.innerHTML=`

<div>
${t.text}
<span class="priority-${t.priority.toLowerCase()}">
 (${t.priority})
</span>
</div>

<div>
<button onclick="toggleTask(${i})">✔</button>
<button onclick="deleteTask(${i})">🗑</button>
</div>

`

list.appendChild(card)

})

let total=tasks.length
let pending=total-completed

document.getElementById("total").innerText=total
document.getElementById("completed").innerText=completed
document.getElementById("pending").innerText=pending

document.getElementById("completedLabel").innerText=completed+"/"+total+" tasks"

let percent= total===0 ? 0 : Math.round((completed/total)*100)

document.getElementById("percent").innerText=percent+"%"

document.getElementById("progressBar").style.width=percent+"%"

document.querySelector(".circle").style.setProperty("--angle",percent*3.6+"deg")

save()

}

function downloadPDF(){

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

doc.setFontSize(18);
doc.text("ToDo Dashboard Report",20,20);

doc.setFontSize(12);

let y=40

tasks.forEach((t,i)=>{

doc.text(
`${i+1}. ${t.text} | Priority: ${t.priority} | Status: ${t.completed ? "Completed":"Pending"}`,
20,
y
)

y+=10

})

doc.save("todo-report.pdf")

}

render()