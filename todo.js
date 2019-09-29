"use strict";
//cors key: 5d9093301ce70f6379855131

const startBtn = document.querySelector(".startBtn");
const addForm = document.querySelector("form#addForm");
const editForm = document.querySelector("form#editForm");

startBtn.addEventListener("click", closeStartScreen);

addForm.addEventListener("submit", e => {
    console.log(e);
    e.preventDefault();
    post();
  });

//   editForm.addEventListener("submit", e => {
//     e.preventDefault();
//     put();
// })

get();

function get() {
  fetch("https://todolist2019-e565.restdb.io/rest/addtaskform", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d9093301ce70f6379855131",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(tasks => {
      tasks.forEach(addTask);
    });
}

function addTask(task) {
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
  
    clone.querySelector("article").dataset.taskId = task._id;
    clone.querySelector("h2").textContent = task.task;
    clone.querySelector(".taskDate").textContent = task.when;
    clone.querySelector(".taskNotes").textContent = task.notes;
  
    //clone.querySelector("button.deleteBtn").addEventListener("click", () => {
    //  deleteTask(task._id);
    //});
  
    //clone.querySelector("button.editBtn").addEventListener("click", e => {
    //    fetchAndPopulate(task._id);
    //});
  
    document.querySelector("main").prepend(clone);
  }

function closeStartScreen() {
    const startScreen = document.querySelector(".startScreen");
    startScreen.classList.add("shrinkStartScreen");
    startScreen.addEventListener("animationend", ()=> {
        startScreen.classList.add("hide");
    })

    document.querySelector(".gradientBottom").classList.remove("hide");
}
