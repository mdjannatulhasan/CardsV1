// const openView = document.getElementById('open-view');
// const closeView = document.getElementById('close-view');
// const flipCard = document.getElementById('flipCard');
// openView.addEventListener('click',viewModeChange1);
// closeView.addEventListener('click',viewModeChange2);

function viewModeChange1(){
    flipCard.style.transform = "rotateY(180deg)";
}
function viewModeChange2(){
    flipCard.style.transform = "rotateY(0deg)";
}