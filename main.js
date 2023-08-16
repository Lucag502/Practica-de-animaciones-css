window.onload = function(){

const modal = document.querySelector('.modal');
const button1 = document.querySelector('#button1');
const closeButton = document.querySelector('.modal-content-close');


button1.addEventListener('click', modalEvent);
closeButton.addEventListener('click', closeEvent);

function modalEvent (){
    modal.classList.remove('hidden');
    modal.classList.add('visible');
};

function closeEvent (){
    modal.classList.add('hidden');
    modal.classList.remove('visible');
}};