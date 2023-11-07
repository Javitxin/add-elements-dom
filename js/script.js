 // Aquí tu código
 //Asigno el boton por id a la variable, y la lista
 const btnAgregar = document.getElementById('agregar');
 let lsLista = document.getElementById('lista');

 let elemento;
 let list = [];
 let etiqueta = '';

 btnAgregar.addEventListener('click', function() {
     // cuando se hace click en el boton añado a una variable lo que el usuario mete por consola
     // y lo voy añadiendo a mi array. 
     let elemento = prompt('Introduce el elemnto a la lista');
     list.push(elemento);
     // Aquí lo que estoy es comprobrando que el array solo contenga el dato nuevo.
     if (list.length > 1) {
         list.shift();
         console.log(list);
     }
     // Em este bucle: creo el elemento li y lo asigno a una variable
     //Y luego le digo que me cree los Nodos del elemento li
     // añado a una variable los elementos li más la variable que contiene el dato del usuario
     for (let i = 0; i < list.length; i++) {
         let li = document.createElement('li');
         li.appendChild(document.createTextNode(list[i]));
         lsLista.appendChild(li);
         etiqueta += `<li> ${list[i]} </li>`;
         console.log(etiqueta);
     }
     // y añado  a la etiqueta ul que ya está creada los li
     document.getElementById('lsLista').innerHTML = etiqueta;

 });