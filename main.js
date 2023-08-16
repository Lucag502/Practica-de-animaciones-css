const button1 = document.querySelector('#button1');
const modal = document.querySelector('.modal');

button1.addEventListener('click', modalEvent);

function modalEvent (){
    modal.classList.remove('hidden');
    modal.classList.add('visible');
}