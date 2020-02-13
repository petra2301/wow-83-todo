"use strict";
//cors key: 5d9093301ce70f6379855131
//link https://todolist2019-e565.restdb.io/rest/autumnwind-twistingnether

get();

function get() {
  fetch("https://todolist2019-e565.restdb.io/rest/autumnwind-twistingnether", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d9093301ce70f6379855131",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(tasks => {
      tasks.forEach(displayTasks);
    });
}

function displayTasks(task) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("article").dataset.taskId = task._id;
  clone.querySelector("h3").textContent = task.task;
  clone.querySelector(`input[type="number"]`).value = task.done;

  //if (clone.querySelector("button").classList.contains("doneBtn")) {

  clone.querySelector("button.doneBtn").addEventListener("click", () => {
      makeDone(task._id);
  });
 // })}
 //  else
 if (clone.querySelector("button").classList.contains("notDoneBtn")) {
 
 clone.querySelector("button.notDoneBtn").addEventListener("click", () => {
    console.log("not done running?");
    makeNotDone(task._id);
})};

  if (task.done === 1) {
    clone.querySelector(`article[data-task-id="${task._id}"]`).classList.add("done");
    clone.querySelector("button").classList.remove("doneBtn");
    clone.querySelector("button").classList.add("notDoneBtn");
  }

  document.querySelector("main").append(clone);

}

function makeDone(id) {
  const parentElement = document.querySelector(`article[data-task-id="${id}"]`);
  parentElement.querySelector(`input[type="number"`).value = "1";

    let data = {
        done: parentElement.querySelector(`input[type="number"`).value,
    };

    let postData = JSON.stringify(data);

    fetch("https://todolist2019-e565.restdb.io/rest/autumnwind-twistingnether/" + id,
    {
        method: "put",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "5d9093301ce70f6379855131",
            "cache-control": "no-cache"
        },
        body: postData
    }
)
.then(d => d.json())
.then( updatedTask => {
  document.querySelector(`article[data-task-id="${id}"]`).classList.add("done");
  
  parentElement.querySelector("button").classList.remove("doneBtn");
  parentElement.querySelector("button").classList.add("notDoneBtn");
});
}

function makeNotDone(id) {
  console.log("not done running?");
  const parentElement = document.querySelector(`article[data-task-id="${id}"]`);
  parentElement.querySelector(`input[type="number"`).value = "2";

    let data = {
        done: parentElement.querySelector(`input[type="number"`).value,
    };

    let postData = JSON.stringify(data);

    fetch("https://todolist2019-e565.restdb.io/rest/autumnwind-twistingnether/" + id,
    {
        method: "put",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "5d9093301ce70f6379855131",
            "cache-control": "no-cache"
        },
        body: postData
    }
)
.then(d => d.json())
.then( updatedTask => {
  console.log("not done running?");
  document.querySelector(`article[data-task-id="${id}"]`).classList.remove("done");
  
  parentElement.querySelector("button").classList.add("doneBtn");

  parentElement.querySelector("button").classList.remove("notDoneBtn");

});
}
