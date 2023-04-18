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

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
};

const formState = {
    email: emailInput.value,
    message: messageInput.value
  };

console.log(formState);
