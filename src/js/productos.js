(() => {
  // productos
  let productos = [{
      id: '1',
      categoria: 'remera',
      producto: 'java',
      descripcion: 'mellange java',
      precioAntes: 1200,
      precioDespues: 600,
      img: './assets/productos/remer1.jpg',
    },
    {
      id: '2',
      categoria: 'remera',
      producto: 'nasa',
      descripcion: 'producto especial',
      precioAntes: 1200,
      precioDespues: 700,
      img: './assets/productos/remer2.jpg',
    },
    {
      id: '3',
      categoria: 'remera',
      producto: 'Github',
      descripcion: 'remera github',
      precioAntes: 1500,
      precioDespues: 900,
      img: './assets/productos/remer3.jpg',
    },
    {
      id: '4',
      categoria: 'remera',
      producto: 'js minimalist',
      descripcion: 'pequeño logo',
      precioAntes: 1000,
      precioDespues: 500,
      img: './assets/productos/remer4.jpg',
    },
    {
      id: '5',
      categoria: 'remera',
      producto: 'GO!',
      descripcion: 'remera golang celeste',
      precioAntes: 1700,
      precioDespues: 1000,
      img: './assets/productos/remer5.jpg',
    },
    {
      id: '6',
      categoria: 'remera',
      producto: 'GIT',
      descripcion: 'remera gris git',
      precioAntes: 1300,
      precioDespues: 550,
      img: './assets/productos/remer6.jpg',
    },
    {
      id: '7',
      categoria: 'remera',
      producto: 'droid',
      descripcion: 'remera android',
      precioAntes: 1700,
      precioDespues: 900,
      img: './assets/productos/remer7.jpg',
    },
    {
      id: '8',
      categoria: 'remera',
      producto: 'kotlin',
      descripcion: 'flotlin soft',
      precioAntes: 1800,
      precioDespues: 850,
      img: './assets/productos/remer8.jpg',
    },
    {
      id: '9',
      categoria: 'buzo',
      producto: 'batik go',
      descripcion: 'batik largo',
      precioAntes: 3500,
      precioDespues: 1999,
      img: './assets/productos/buzo1.jpg',
    },
    {
      id: '10',
      categoria: 'buzo',
      producto: 'batik git',
      descripcion: 'batik largo',
      precioAntes: 3500,
      precioDespues: 2399,
      img: './assets/productos/buzo2.jpg',
    },
    {
      id: '11',
      categoria: 'buzo',
      producto: 'js minimalist',
      descripcion: 'pequeño logo ',
      precioAntes: 3500,
      precioDespues: 1999,
      img: './assets/productos/buzo3.jpg',
    },
    {
      id: '12',
      categoria: 'buzo',
      producto: 'droid',
      descripcion: 'buzo android',
      precioAntes: 3500,
      precioDespues: 1999,
      img: './assets/productos/buzo4.jpg',
    },
    {
      id: '13',
      categoria: 'buzo',
      producto: 'Kotlin',
      descripcion: 'buzo kotlin color',
      precioAntes: 3200,
      precioDespues: 1999,
      img: './assets/productos/buzo5.jpg',
    },
    {
      id: '14',
      categoria: 'buzo',
      producto: 'node minimalist',
      descripcion: 'node minimalist',
      precioAntes: 3200,
      precioDespues: 2399,
      img: './assets/productos/buzo6.jpg',
    },
    {
      id: '15',
      categoria: 'buzo',
      producto: 'js negro',
      descripcion: 'buzo javascript',
      precioAntes: 3200,
      precioDespues: 2699,
      img: './assets/productos/buzo7.jpg',
    },
    {
      id: '16',
      categoria: 'buzo',
      producto: 'kotlin negro',
      descripcion: 'buzo negro logo color',
      precioAntes: 3200,
      precioDespues: 2699,
      img: './assets/productos/buzo8.jpg',
    },
    {
      id: '17',
      categoria: 'buzo',
      producto: 'buzo nucba',
      descripcion: 'buzo especial nucba',
      precioAntes: 4000,
      precioDespues: 3099,
      img: './assets/productos/buzo9.jpg',
    },
    {
      id: '18',
      categoria: 'gorra',
      producto: 'gorra java',
      descripcion: 'bordado java',
      precioAntes: 1200,
      precioDespues: 799,
      img: './assets/productos/gorra1.jpg',
    },
    {
      id: '19',
      categoria: 'gorra',
      producto: 'c++',
      descripcion: 'estampa c++',
      precioAntes: 1200,
      precioDespues: 799,
      img: './assets/productos/gorra2.jpg',
    },
    {
      id: '20',
      categoria: 'gorra',
      producto: 'gorra code',
      descripcion: 'estampa code',
      precioAntes: 1200,
      precioDespues: 799,
      img: './assets/productos/gorra3.jpg',
    },
    {
      id: '21',
      categoria: 'gorra',
      producto: 'gorra droid',
      descripcion: 'estampado android',
      precioAntes: 1200,
      precioDespues: 799,
      img: './assets/productos/gorra4.jpg',
    },
    {
      id: '22',
      categoria: 'gorra',
      producto: 'gorra nucba',
      descripcion: 'logo especial nucba',
      precioAntes: 1200,
      precioDespues: 799,
      img: './assets/productos/gorra5.jpg',
    },
    {
      id: '23',
      categoria: 'gorra',
      producto: 'gorra js',
      descripcion: 'estampa javascript',
      precioAntes: 1200,
      precioDespues: 799,
      img: './assets/productos/gorra6.jpg',
    },
    {
      id: '24',
      categoria: 'pad',
      producto: 'pad js',
      descripcion: 'cheats js',
      precioAntes: 600,
      precioDespues: 299,
      img: './assets/productos/pad1.jpg',
    },
    {
      id: '25',
      categoria: 'pad',
      producto: 'pad js',
      descripcion: 'logo js',
      precioAntes: 600,
      precioDespues: 299,
      img: './assets/productos/pad2.jpg',
    },
    {
      id: '26',
      categoria: 'pad',
      producto: 'pad git',
      descripcion: 'cheats git',
      precioAntes: 600,
      precioDespues: 299,
      img: './assets/productos/pad3.jpg',
    },
    {
      id: '27',
      categoria: 'pad',
      producto: 'pad linux',
      descripcion: 'cheats linux',
      precioAntes: 600,
      precioDespues: 299,
      img: './assets/productos/pad4.jpg',
    },
    {
      id: '28',
      categoria: 'pad',
      producto: 'pad mario',
      descripcion: 'estampa mario bros',
      precioAntes: 600,
      precioDespues: 299,
      img: './assets/productos/pad5.jpg',
    },
    {
      id: '30',
      categoria: 'bolso',
      producto: 'bolso go',
      descripcion: 'golang celeste',
      precioAntes: 2700,
      precioDespues: 2199,
      img: './assets/productos/prod1.jpg',
    },
    {
      id: '31',
      categoria: 'bolso',
      producto: 'bolso go',
      descripcion: 'go historieta',
      precioAntes: 2700,
      precioDespues: 2199,
      img: './assets/productos/prod2.jpg',
    },
    {
      id: '32',
      categoria: 'bolso',
      producto: 'bolso go',
      descripcion: 'go en 3d',
      precioAntes: 2700,
      precioDespues: 2199,
      img: './assets/productos/prod3.jpg',
    },
    {
      id: '33',
      categoria: 'bolso',
      producto: 'bolso js',
      descripcion: 'estampa javascript',
      precioAntes: 2700,
      precioDespues: 2199,
      img: './assets/productos/prod4.jpg',
    },
    {
      id: '34',
      categoria: 'bolso',
      producto: 'mochila js',
      descripcion: 'amarilla especial',
      precioAntes: 5000,
      precioDespues: 3499,
      img: './assets/productos/prod5.jpg',
    },
    {
      id: '35',
      categoria: 'bolso',
      producto: 'bolso js',
      descripcion: 'js node',
      precioAntes: 2700,
      precioDespues: 2199,
      img: './assets/productos/prod6.jpg',
    },
    {
      id: '36',
      categoria: 'bolso',
      producto: 'bolso wp',
      descripcion: 'motivo wordpress',
      precioAntes: 2700,
      precioDespues: 2199,
      img: './assets/productos/prod7.jpg',
    },
    {
      id: '37',
      categoria: 'bolso',
      producto: 'riñonera kit nucba',
      descripcion: '',
      precioAntes: 6700,
      precioDespues: 5199,
      img: './assets/productos/prod8.jpg',
    },
  ];
  // selectores
  const insertProducts = document.getElementById('insertProducts'),
    input = document.getElementsByClassName('inputBusca')[0],
    formulario = document.querySelector('form'),
    menu = document.getElementById('menu'),
    persiana = document.getElementById('persiana'),
    findNucba = document.getElementById('findNucba'),
    nucbaSection = document.querySelector('.mainSection'),
    arrCart = [];

  let cartNum = document.getElementById('cartNum'),
    cartNum2 = document.getElementById('cartNum2');

  const dibujaProductos = () => {
    productos.map((prod) => {
      let items = `
              <div id="prod_#" class="boxProduct">
                  <div class="imgProduct" alt="imagen de producto">
                      <img class="boxForm" src="${prod.img}">
                      <h3 class="precio">
                          <small>$${prod.precioAntes}</small>
                          $${prod.precioDespues}
                      </h3>
                  </div>
                  <div class="pieBox">
                      <div class="titleSubtitle">
                          <h3 class="nombreProd">${prod.producto}</h3>
                          <small class="descProd">${prod.descripcion}</small>
                      </div>
                      <button class="btnCart" id="btnCart" onclick=" promedio()">
                          <i class="fas fa-shopping-cart"></i>
                      </button>
                  </div>
              </div>
              `;

      insertProducts.innerHTML += items;

      const button = document.getElementById('btnCart');
      // const button = document.querySelectorAll('#btnCart');

      addToCart = (e) => {
        // e.preventDefault();
        arrCart.push(prod);
        console.dir(arrCart);
        let cantActual = parseInt(cartNum.textContent);

        cantActual = arrCart.length;
        cartNum.innerHTML = cantActual;

        console.log(arrCart.length);
        //de aca

        button.addEventListener('click', addToCart);
      };
    });
  };

  addToCart = () => {
    arrCart.push(element);
    console.log(arrCart);
    let cantActual = parseInt(cartNum.textContent);

    cantActual = arrCart.length;
    cartNum.innerHTML = cantActual;
    let cantActual2 = parseInt(cartNum2.textContent);

    cantActual2 = arrCart.length;

    cartNum2.innerHTML = cantActual + ' producto/s';

    console.log(arrCart.length);

    promedio = () => {
      productos1.forEach((value) => {
        let valor = value;
        console.log(valor);
      });
    };

    // button.addEventListener('click', addToCart);
  };

  function fitrar(e) {
    e.preventDefault();

    let inputFind = input.value;
    if (!inputFind) {
      return null;
    }

    let filtrado = productos.filter(
      (prod) =>
      prod.producto.includes(inputFind) || prod.categoria.includes(inputFind)
    );
    limpiarForm();

    if (filtrado == '') {
      let noResults = `
                  <div  class="noResults">
                      <img src="./assets/no_results.svg"></img>
                  </div>
                  `;
      return (insertProducts.innerHTML = noResults);
    }
    insertProducts.innerHTML = `<h2>${inputFind.toLocaleUpperCase()}</h2>`;

    filtrado.map((prod) => {
      let items = `
        <div id="prod_#" class="boxProduct">
            <div class="imgProduct" alt="imagen de producto">
                <img class="boxForm" src="${prod.img}">
                <h3 class="precio">
                    <small>$${prod.precioAntes}</small>
                    $${prod.precioDespues}
                </h3>
            </div>
            <div class="pieBox">
                <div class="titleSubtitle">
                    <h3 class="nombreProd">${prod.producto}</h3>
                    <small class="descProd">${prod.descripcion}</small>
                </div>
                <button class="btnCart" id="btnCart" onclick="addToCart(this)">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
        `;
      return (insertProducts.innerHTML += items);
    });
  }

  const limpiarForm = () => {
    formulario.reset();
    insertProducts.innerHTML = '';
  };

  const desplegaMenu = () => {
    persiana.classList.toggle('active');
  };

  // productos nucba

  const nucbaProducts = () => {
    nucbaSection.classList.add('nucBye');
    setTimeout(() => {
      nucbaSection.classList.add('none');
    }, 1000);

    let inputFind = 'nucba';

    let filtrado = productos.filter(
      (prod) =>
      prod.producto.includes(inputFind) || prod.categoria.includes(inputFind)
    );
    insertProducts.innerHTML = `<h2>${inputFind.toLocaleUpperCase()}</h2>`;

    filtrado.map((prod) => {
      insertProducts.innerHTML += `
      <div id="prod_#" class="boxProduct">
          <div class="imgProduct" alt="imagen de producto">
              <img class="boxForm" src="${prod.img}">
              <h3 class="precio">
                  <small>$${prod.precioAntes}</small>
                  $${prod.precioDespues}
              </h3>
          </div>
          <div class="pieBox">
              <div class="titleSubtitle">
                  <h3 class="nombreProd">${prod.producto}</h3>
                  <small class="descProd">${prod.descripcion}</small>
              </div>
              <button class="btnCart" id="btnCart" onclick="addT(this)">
                  <i class="fas fa-shopping-cart"></i>
              </button>
          </div>
      </div>
      `;
    });
  };

  // productos nucba

  const init = () => {
    document.addEventListener('DOMContentLoaded', () => {
      dibujaProductos();

      // eventDom
      formulario.addEventListener('submit', fitrar);
      menu.addEventListener('click', desplegaMenu);
      findNucba.addEventListener('click', nucbaProducts);
    });
  };

  init();

  /*******************************************************
                          LOCAL STORAGE
      *******************************************************/
  let emailName = document.getElementById('userSesion').parentNode.parentNode;
  let emailNameMovile = document.getElementById('userSesion2');
  const storage = window.localStorage;
  let subMenu = document.getElementsByClassName('menuFlotante')[0];

  const StorageMail = () => {
    if (storage.getItem('userMail')) {
      let nameSesionMovile = `                    
             <span id="userSesion2" class="text-secondary">
               ${storage.getItem('userMail')}
               <i class="fas fa-user"></i>
               <button id ="exitMovile" class="remCart btn btn-sm btn-info">
                 salir
               </button>
             </span>`;
      let nameSesion = `
             <a class="useActive">
               <span id="userSesion">
                 ${storage.getItem('userMail')}
                 <i class="fas fa-user"></i>
               </span>
             </a>
             `;
      emailName.innerHTML = nameSesion;
      emailNameMovile.innerHTML = nameSesionMovile;
    }
  };
  StorageMail();

  emailName.addEventListener('click', () => {
    storage.getItem('userMail') ?
      subMenu.classList.toggle('visible') :
      subMenu.classList.remove('visible');
  });

  let exit = document.getElementById('exit');
  let exitMovile = document.getElementById('exitMovile');

  exit.addEventListener('click', () => {
    storage.clear();
    if (!storage.getItem('userMail')) {
      emailName.innerHTML = `
             <a class="session" href="/src/sesion.html">
                 <span id="userSesion">
                     Iniciar Sesion
                     <i class="fas fa-user"></i>
                 </span>
             </a>
             `;
      emailNameMovile.innerHTML = `
           <span id="userSesion2" class="text-secondary">
             Iniciar Sesion
             <i class="fas fa-user"></i>
           </span>
           `;
    }
    subMenu.classList.remove('visible');
  });
  exitMovile.addEventListener('click', () => {
    storage.clear();
    if (!storage.getItem('userMail')) {
      emailName.innerHTML = `
             <a class="session" href="/src/sesion.html">
                 <span id="userSesion">
                     Iniciar Sesion
                     <i class="fas fa-user"></i>
                 </span>
             </a>
             `;
      emailNameMovile.innerHTML = `
           <span id="userSesion2" class="text-secondary">
             Iniciar Sesion
             <i class="fas fa-user"></i>
           </span>
           `;
    }
    subMenu.classList.remove('visible');
  });
})();