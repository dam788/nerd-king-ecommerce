const formulario = document.getElementById('form');
const boton = document.getElementById('publicar');
const nombre = document.getElementById('validationServer01');
const apellido = document.getElementById('validationServer02');
const email = document.getElementById('exampleInputEmail1');
const mensaje = document.getElementById('validationTextarea');
const menu = document.getElementById('menu');
const persiana = document.getElementById('persiana');

class Usuario {
    constructor(nombre, apellido, email, mensaje) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.mensaje = mensaje;
    }
}

let array = [];


const envioForm = (e) => {
    e.preventDefault();
    let client = new Usuario(nombre.value, apellido.value, email.value, mensaje.value);
    array.push(client);
    localStorage.setItem('datos', JSON.stringify(client));

    alert(`Usuario: ${client.nombre} ${client.apellido} muchas gracias por tu mensaje, estaremos contactandote a ${client.email} a la brevedad`);

    form.reset();

    console.log(array)
}



const desplegaMenu = () => {
  console.log('click');
  persiana.classList.toggle('active');
};

boton.addEventListener('click', envioForm);
menu.addEventListener('click', desplegaMenu);



const sendNews = document.getElementById('btn4');
const newsMail = document.getElementById('newsMail');
const newsletter = [];

function showError(newsMail) {
    alert('Pone un mail conannn')
  }

  function showSuccess(newsMail) {
    alert('lindo mail')
   
  }
const validMail = () => {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(newsMail.value.trim())) {
        showSuccess(newsMail);
      } else {
        showError(newsMail);
      }
}

let client = newsMail.value;


const addToNews = () => {

    let clienteA = newsMail.value;
    console.log(clienteA)
    yaEsta()

    function yaEsta() {
        let cliente = clienteA;
       if (!newsletter.includes(cliente)) {
            newsletter.push(cliente);
            alert(`Te mantendremos al tanto de novedades a ${newsMail.value}, gracias conan!`)
        } else {
            alert(`Che ${newsMail.value}, ya estas en nuestra base de datos mostro!!`)
        }
    }
   
    console.log(newsletter)
  };

sendNews.addEventListener('click', addToNews)