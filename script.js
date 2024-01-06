'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');

//selecting multiple elements with the same class
const btnOpen = document.querySelectorAll('.show-modal'); //querySelectorAll = selecting all 3 show-modal (there's 3)

//function to remove the hidden function
const clickOpen = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const clickClose = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//do something for each of them, console log their textContent
for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener('click', clickOpen);
}

//do something for each of them, console log their textContent
btnClose.addEventListener('click', clickClose);
overlay.addEventListener('click', clickClose);
const clickEsc = x => {
  if (x.key === 'Escape') {
    clickClose();
  }
};
document.addEventListener('keydown', clickEsc);
