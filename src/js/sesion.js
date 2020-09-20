// seleccion del DOM
const email     = document.getElementById('email'),
      pass      = document.getElementById('pass'),
      submitBtn = document.getElementById('goForm'),
      message   = document.getElementById('message');

const entroEnFoco = elem => elem.className = 'enfoco';

const salioDeFoco = elem => elem.className = '';

const sendForm = (e) => {

    e.preventDefault();

    if( validMail() && validPass() ) return true, window.location.href = '/';

    if(!validMail()){

        message.classList.add('error');
        setTimeout(()=>{
            message.classList.remove('error');
        },2000);
        return ;
    } 
    if(!validPass()){

        message.classList.add('error');
        setTimeout(()=>{
            message.classList.remove('error');
        },2000);
        return ;
    } 
} 

const validMail = () => {

    let{ value } = email;

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   

    return regex.test(value);
}

const validPass = () => {
    let{ value } = pass;

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    return regex.test(value);  
}

submitBtn.addEventListener('click', sendForm);