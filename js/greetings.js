//greeting

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input:first-child');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event){
    event.preventDefault();
   
    loginForm.classList.add(HIDDEN_CLASSNAME);
   const userName = loginInput.value;
   localStorage.setItem(USERNAME_KEY,userName);
   paintGreetings(userName);
}

function paintGreetings(userName){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${userName}!`
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',loginSubmit);
} else {
    paintGreetings(savedUsername);
}
