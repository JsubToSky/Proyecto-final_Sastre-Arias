class Celulares{
    id;
    precio;
    marca;
    img;
    descripcion;
    constructor(id,precio,marca,img,descripcion){
        this.id = id;
        this.precio = precio;
        this.marca = marca;
        this.img = img;
        this.descripcion = descripcion;
    }

}

const arrayCelulares = [];
arrayCelulares.push(new Celulares("1",399,"Xiaomi",`https://png.pngtree.com/png-vector/20230329/ourmid/pngtree-cute-white-dog-png-image_6656184.png`,`Este es Xiaomi REDMI note 10 \n Tiene muy buena batería`));
arrayCelularer.push(new Celulares("2",999,"Iphone","../Assets/Cel-Iphone-14ProMax.webp",`Iphone 14 Pro Max, un celular excepcional`));
arrayCelulares.push(new Celulares("3",499,"Samsung",`../Assets/Cel-Samsung-A03S.png`,`Samsung A03S, una batería muy buena`));