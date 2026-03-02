const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');



setTimeout(() => {
    modal.style.display = 'inline';
}, 1500);
setTimeout(() => {
    modalCloseBtn.disabled = false;
}, 3000);

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none';
})
