// Array de productos
const productos = [
    { nombre: "Raqueta", precio: 80, categoria: "Deportes" },
    { nombre: "Auriculares", precio: 50, categoria: "Electrónica" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Calculadora", precio: 120, categoria: "Educación" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Lámpara", precio: 40, categoria: "Hogar" },
    { nombre: "Guantes de boxeo", precio: 60, categoria: "Deportes" },
    { nombre: "Globo Terráqueo", precio: 150, categoria: "Educación" },
    { nombre: "Cinta para correr", precio: 700, categoria: "Deportes" },
    { nombre: "Vestido", precio: 90, categoria: "Ropa" },
    { nombre: "Balón de fútbol", precio: 30, categoria: "Deportes" },
    { nombre: "Bufanda", precio: 30, categoria: "Ropa" },
    { nombre: "Mochila", precio: 80, categoria: "Educación" },
    { nombre: "Marcadores", precio: 8, categoria: "Educación" },
    { nombre: "Abrigo", precio: 120, categoria: "Ropa" },
    { nombre: "Refrigerador", precio: 1000, categoria: "Hogar" },
    { nombre: "Chamarra", precio: 180, categoria: "Ropa" },
    { nombre: "Cafetera", precio: 80, categoria: "Hogar" },
    { nombre: "Pesas", precio: 100, categoria: "Deportes" },
    { nombre: "Tostadora", precio: 60, categoria: "Hogar" },
    { nombre: "Teclado", precio: 30, categoria: "Electrónica" },
    { nombre: "Gorra deportiva", precio: 20, categoria: "Deportes" },
    { nombre: "Microondas", precio: 200, categoria: "Hogar" },
    { nombre: "Mouse", precio: 25, categoria: "Electrónica" },
    { nombre: "Impresora", precio: 300, categoria: "Electrónica" },
    { nombre: "Pantalones", precio: 40, categoria: "Ropa" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
    { nombre: "Sombrero", precio: 25, categoria: "Ropa" },
    { nombre: "Agenda", precio: 20, categoria: "Educación" },
    { nombre: "Vajilla", precio: 90, categoria: "Hogar" },
    { nombre: "Mancuernas", precio: 40, categoria: "Deportes" },
    { nombre: "Cuaderno", precio: 5, categoria: "Educación" },
    { nombre: "Plancha", precio: 70, categoria: "Hogar" },
    { nombre: "Auriculares", precio: 50, categoria: "Electrónica" },
    { nombre: "Monitor", precio: 200, categoria: "Electrónica" },
    { nombre: "Lápices", precio: 3, categoria: "Educación" },
    { nombre: "Bicicleta", precio: 500, categoria: "Deportes" },
    { nombre: "Aspiradora", precio: 250, categoria: "Hogar" },
    { nombre: "Tableta", precio: 150, categoria: "Electrónica" },
];

console.log('Array Productos sin Modificaciones');
console.log(productos);

// filter()
const productos99 = productos.filter((producto) => producto.precio < 100);
const productos100 = productos.filter((producto) => producto.precio >= 100);

console.log('Array Productos con Precio Menor a 100');
console.log(productos99);
console.log('Array Productos con Precio Igual o Mayor a 100');
console.log(productos100);
console.log('Array Productos con Precio Igual o Mayor a 100');

// every()
const cuestanMenos100 = productos99.every((precio) => precio.precio < 100);
console.log('¿Todos los Productos en la Variable productos99 Tienen Precio Menor a 100?');
console.log(cuestanMenos100);

// some()
const algunoCuesta100 = productos99.some((precio) => precio.precio >= 100);
console.log('¿Alguno de los Productos en la Variable productos99 Tiene Precio Igual o Mayor a 100?');
console.log(algunoCuesta100);

// sort()
// [...productos] para crear un nuevo array y que no se modifique el orden del original
// (a, b) => a.nombre.localeCompare(b.nombre) para validar el orden en la propiedad nombre,
// ya que lo que se busca ordenar es la propiedad dentro de un objeto que está dentro de un array
const productosOrdenAlf = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));

console.log('Array Productos con Nombre en Orden Alfabético');
console.log(productosOrdenAlf);

// map()
const productosNombre = productos.map((producto) => producto.nombre);

console.log('Array Nombre de los Productos');
console.log(productosNombre);

// includes()
console.log('¿Existe en el Array productosNombre una "Laptop"?');
console.log(productosNombre.includes('Laptop'));
console.log('¿Existe en el Array productosNombre una "Camioneta"?');
console.log(productosNombre.includes('Camioneta'));

// find()
const busquedaPrecio = productos.find((producto) => producto.precio > 500);
const busquedaCategoria = productos.find((producto) => producto.categoria === 'Ropa');

console.log('Primer Producto Encontrado con Precio Mayor a 500');
console.log(busquedaPrecio);
console.log('Primer Producto Encontrado con Categoría "Ropa"');
console.log(busquedaCategoria);

// forEach()
productos.forEach((producto) => console.log(producto));

// reduce()
const sumaPrecios = productos.reduce((acumulador, num) => acumulador + num.precio, 0);
console.log('Suma de los Precios de Todos los Productos');
console.log(sumaPrecios);