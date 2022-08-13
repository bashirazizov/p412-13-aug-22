// let input1 = document.querySelector("#sum1");
// let input2 = document.querySelector("#sum2");
// let button = document.querySelector("#sumbtn");

// // button.onclick = function () {
// //   alert(input1.value + input2.value);
// // };

// // button.onclick = function () {
// //   console.log(input1.value);
// //   console.log(input2.value);
// // };

// button.addEventListener("click", function () {
//   console.log(input1.value);
//   console.log(input2.value);
// });

// button.addEventListener("click", function () {
//   alert(input1.value + input2.value);
// });

let input = document.querySelector("#task-input");
let typeInput = document.querySelector("#task-type-input");
let button = document.querySelector("#add-task");
let list = document.querySelector(".list-group");
let deleteAllButton = document.querySelector("#delete-tasks");

button.addEventListener("click", function () {
  addTask();
});

deleteAllButton.addEventListener("click", function () {
  list.innerHTML = "";
  deleteAllButton.classList.add("d-none");
});

input.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    addTask();
  } else if (event.keyCode == 27) {
    input.value = "";
  }
});

function addTask() {
  if (input.value == "") {
    alert("Task can not be empty!");
    return;
  }

  list.innerHTML +=
    "<li class='list-group-item d-flex justify-content-between' data-type="+typeInput.value.toLowerCase()+">" +
    input.value +
    " - " +
    typeInput.value +
    " <i id='delete-task' class='bi bi-trash3 text-danger cursor-pointer'></i></li>";
  input.value = "";
  deleteAllButton.classList.remove("d-none");
}

document.addEventListener("click", function (e) {
  if (e.target.id == "delete-task") {
    e.target.parentElement.remove();
    if (list.children.length == 0) {
      deleteAllButton.classList.add("d-none");
    }
  }
});

/////

// let myspan = document.querySelector("#myspan");

// myspan.addEventListener("click",function(){
//     // myspan.parentElement.parentElement.style.backgroundColor = "red";
//     console.log(myspan.parentElement.parentElement.firstElementChild);
//     // console.log("click olunu")
// })

/////

// let buttons = document.querySelectorAll("#attr-lesson button");
// // let anchor = document.querySelector("a");
// // anchor.setAttribute("href","https://google.com");
// // anchor.setAttribute("target","_blank");

// // console.log(buttons);
// buttons.forEach((element) => {
//   element.addEventListener("click", function () {
//     console.log(element.getAttribute("class"));
//   });
// });
