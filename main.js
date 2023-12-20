let chatDisplay = document.getElementById("chatDisplay");
window.onload = ()=>{
    chatDisplay.lastElementChild.scrollIntoView();
}
function activeElementInUsers(runner) {
    let elements = document.getElementsByClassName("userLi");
    for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove("active");
        elements[i].classList.remove("nextElementSibling");
        elements[i].classList.remove("previousElementSibling");
    }
    runner.classList.add("active");
    runner.nextElementSibling.classList.add("nextElementSibling");
    runner.previousElementSibling.classList.add("previousElementSibling");
}
function viewedImage(item) {
    let viewedImageOveray = document.getElementById("viewedImageOveray");
    let viewedImage = document.getElementById("viewedImage");
    let newImageTag = document.createElement("img");
    newImageTag.setAttribute("src", item.src);
    viewedImage.appendChild(newImageTag);
    viewedImageOveray.style.display = "block";
}

function showFiles(caller) {
    let element = caller.lastElementChild;
    if(element.style.display == "block"){
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}