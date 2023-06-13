const contenedorCelulares = document.querySelector('#contenedor-celulares');





function mostrarCelulares (data){
    data.forEach(element => {
        const cardCelular = document.createElement('div');
        cardCelular.setAttribute('id', `tarjeta-${element?.marca}`);
        cardCelular.setAttribute('class', 'card');
        cardCelular.innerHTML = `     
                                <img src="${element?.img}" class="card-img-top" alt="${element?.descripcion}">
                                <div class="card-body">
                                  <h5 class="card-title">Celular ${element?.marca}</h5>
                                  <p class="card-text">Este celular es muy bueno</p>
                                  <a href="#" id="btn-agregar-${element.id}" class="btn btn-primary btn-agregar">Agregar al carro</a>
                                </div>
                                `
    });
    const btnAgregar = document.querySelectorAll('.btn-agregar');
    btnAgregar.forEach(elem =>{
        elem.addEventListener('click', (e)=>{
            agregarAlCarrito(e.target.id);
        });
    });
}

mostrarCelulares(arrayCelulares);


















/* const botonQuitar = document.getElementsByClassName('btn-quitar');

for(let i=0;i<botonQuitar.length;i++){
    let boton = botonQuitar[i];
    boton.addEventListener('click', quitarElemento);
}


function quitarElemento (event){
    event.preventDefault();
    let botonClickeado = event.target;
    botonClickeado.parentElement.parentElement.parentElement.remove();
    actualizarCarrito();
}

function actualizarCarrito(){
    const divCarrito = document.getElementById('divCarrito')[0];
    const itemsDelCarrito = divCarrito.getElementsByClassName('cards-carrito');
    let total = 0;
    for (let i=0;i<itemsDelCarrito.length;i++){
        let itemCarrito = itemsDelCarrito[i];
        let precioElemento = itemCarrito.getElementsByClassName('precio-item')[0];
        let cantidadElemento = itemCarrito.getElementsByClassName('inputNumber')[0];
        let precio = parseFloat(precioElemento.innerText.replace('$', ''));
        let cantidad = cantidadElemento.value;
        total = precio + cantidad;
    }
    total = Math.round(total);
    document.getElementsByClassName('total-carrito')[0].innerText = '$' + total; 
}*/