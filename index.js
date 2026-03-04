const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalForm = document.getElementById('modal-form')
const modalTitle = document.getElementById('modal-title')
const modalText = document.getElementById('modal-text')
const modalEmail = document.getElementById('modal-email')
const modalSubmitBtn = document.getElementById("modal-submit-btn")


//modal function and close function
setTimeout(() => {
    modal.style.display = 'inline';
}, 1500);
setTimeout(() => {
    modalCloseBtn.disabled = false;
}, 3000);

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none';
})


//modal submit function
modalForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('submitted')
    setTimeout(() => {
        modalTitle.textContent = 'We got your email great !'
        modalText.textContent = 'We will be sending you the best deal make sure to check your email.'
        modalEmail.style.display = 'none'
        modalSubmitBtn.style.display = 'none'
    }, 1000);

    setTimeout(() => {
        modal.style.display='none'
    }, 10000);
})

//submitting form

const pizzaForm = document.getElementById('pizza-form')
const submit = document.getElementById('form-submit')


pizzaForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const pizzaData = new FormData(pizzaForm);
    const customerName = pizzaData.get('name');
    const size = pizzaData.get('size');
  
    console.log('name:', customerName);
    console.log('size:', size);
  });

