// input_box
// list_container
// AddTask()

const input_box = document.getElementById("input_box");
const list = document.getElementById("list_container");



function AddTask(){
   
    if (input_box.value === "") {
          confirm("Enter content");
    } else {
        let li = document.createElement("li");
              list.appendChild(li);
          li.innerHTML = input_box.value;
          let span = document.createElement("span");
          span.innerHTML = "\u00d7 ";
          li.appendChild(span);

    }
    input_box.value = ""
}

list.addEventListener('click', function(ele){
  if(ele.target.tagName === "LI"){
      ele.target.classList.toggle("checked") 
       
  }
  else if (ele.target.tagName === "SPAN") {
         ele.target.parentElement.remove()
  } else {
    
  }
})

