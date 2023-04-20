import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');
const savedFormState = JSON.parse(localStorage.getItem('feedback-form-state'));

const saveFormState = throttle(() => {
    const formState = {
      email: emailInput.value,
      message: messageInput.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }, 500);

formEl.addEventListener('input', saveFormState)
formEl.addEventListener('submit', onFormSubmit)

if (savedFormState) {
emailInput.value = savedFormState.email;
messageInput.value = savedFormState.message;
}

function onFormSubmit (event) {
  event.preventDefault();
  
  if (!emailInput.value || !messageInput.value) {
    alert('Всі поля мають бути заповненні.');
    return;
  }

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log(formState);
};

const formState = {
  email: emailInput.value,
  message: messageInput.value
};


