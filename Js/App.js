const contenedorCelulares = document.querySelector('#contenedor-celulares');
const agregarAlCarritoBtns = document.getElementsByClassName('btn-agregar');



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
                                `;
        contenedorCelulares.appendChild(cardCelular);
        const btnAgregar = document.querySelectorAll('.btn-agregar');
        btnAgregar.forEach(elem =>{
            elem.addEventListener('click', (e)=>{
                e.preventDefault()
                Swal.fire({
                    title:'¡Hey!',
                    text:'¿Seguro quieres agregarlo al carrito?',
                    icon:'warning',
                    iconColor:'blueviolet',
                    showCancelButton: 'true',
                    cancelButtonText: 'No',
                    cancelButtonColor:'#3fb2f9',
                    confirmButtonText:'Sí',
                }).then((result)=>{
                    if(result.isConfirmed){
                        agregarAlCarrito(e.target.id);
                    }
                })
                
            });
        });
        
    });
}
mostrarCelulares(arrayCelulares);

const carritoCompras = [];

function agregarAlCarrito(idProducto){
    let productoEncontrado = arrayCelulares.find(prod => prod.id);
    carritoCompras.push(productoEncontrado);
    console.log(carritoCompras);
}
