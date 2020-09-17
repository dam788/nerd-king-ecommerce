// seleccion del DOM
const email     = document.getElementById('email'),
      pass      = document.getElementById('pass'),
      submitBtn = document.getElementById('goForm');

const entroEnFoco = elem => elem.className = 'enfoco';
const salioDeFoco = elem => elem.className = '';

const sendForm = () => {
    if( validMail() && validPass() ) return true, window.location.href = '/'; ;
    if(!validMail()) return false,alert('revisar Email');
    if(!validPass()) return false, alert('revisar Password');
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

submitBtn.addEventListener('submit', sendForm);