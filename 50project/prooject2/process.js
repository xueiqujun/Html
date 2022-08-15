let n = 1;
let process = document.querySelector(".process")
let allProcessNode =  document.querySelectorAll(".circle")
let prevNode = document.querySelector("#prev")
let nextNode = document.querySelector("#next");

function prev() {
    allProcessNode[n-1].classList.remove("active")
    n--;
    if (n===1){
        console.log("------")
       prevNode.disabled = true;
   }
    if(n < allProcessNode.length){
        nextNode.disabled = false;
    }
    replace_process();

}
function next() {
    n++;
    allProcessNode[n-1].classList.add("active")
    if(n === allProcessNode.length){
        nextNode.disabled = true;
    }
    if(n>1){
        prevNode.disabled= false;
    }
    replace_process();
}

function replace_process(){
    process.style.width = 100 / (allProcessNode.length - 1) * (n-1) + "%";
}