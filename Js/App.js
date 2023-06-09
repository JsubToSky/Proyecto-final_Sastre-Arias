






















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
    document.getElementsByClassName('total-carrito')[0].innerText = '$' + total; */
}