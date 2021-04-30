/*Ejercicio 1: Saludo
const nombre = prompt ('Ingrese nombre');
const titulo = document.querySelector('h1');
titulo.innerText = (`Hola soy ${nombre}, bienvenido`);
titulo.style.textAlign = 'center';
titulo.style.fontSize = '25px';
titulo.style.fontFamily = 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';*/

/*Ejercicio 2: Color
const colorsit = prompt ('Ingrese un color en sistema hexadecimal');
const sistema = document.querySelector('body');
sistema.style.backgroundColor = colorsit;*/

/*Ejercicio 3: RGB
const programa = prompt('Ingresa primer color');
const programa2 = prompt('Ingresa segundo color');
const programa3 = prompt('Ingresa tercer color'); 
const combinado= document.querySelector('#cuerpo');
combinado.style.backgroundColor=`rgb(${programa}, ${programa2}, ${programa3})`;*/


//Ejercicio 4: Imagen
/*const imagen = prompt ('Ingresa chica , mediana o grande');
  const foto = document.getElementById('foto');
   if  (imagen === 'chica') {
      foto.style.width = '200px';
   } else if (imagen === 'mediana') {
     foto.style.width = '500px';
   } else if (imagen === 'grande') {
     foto.style.width = '800px';
   }*/


/*Ejercicio 5: Temperatura
const temperatura = prompt ('Ingrese una temperatura');
const titulo = document.querySelector('h1');
titulo.innerText = (`Temperatura actual: ${temperatura}`);
if (temperatura < 0) {
   titulo.style.color = '#2947DD';
} else if (temperatura >= 0 && temperatura< 15) {
   titulo.style.color = '#92C0E8';
} else if (temperatura >= 15 && temperatura< 25) {
   titulo.style.color = '#179E29';
} else if (temperatura >= 25 && temperatura<30) {
   titulo.style.color = '#E4F118';
} else if (temperatura>= 30 && temperatura<35) {
   titulo.style.color = '#F1A618';
} else if (temperatura >35) {
   titulo.style.color = '#F12518';
}*/


/*Ejercicio 6: Progreso
const porcentaje = Number (window.prompt('Indica un porcentaje de progreso'));
const valorPorcentaje = (porcentaje*400/100);
const barraGrande = document.querySelector(".barra");
//barraGrande.style.backgroundColor = 'red';
barraGrande.style.width = '400px';
barraGrande.style.height = '60px';
barraGrande.style.border = '1px solid black';
barra = document.querySelector(".progreso");
barra.style.backgroundColor = 'green';
barra.style.width= (`${valorPorcentaje}px`);
barra.style.height= '60px';*/

/*Ejercicio 7: Reacciones
const like1 = prompt('Ingrese cantidad');
const valorLike1= document.getElementById('likes1');
valorLike1.innerHTML=like1;
const like2 = prompt('Ingrese cantidad');
const valorLike2=document.getElementById('likes2');
valorLike2.innerHTML=like2;
const like3 = prompt('Ingrese cantidad');
const valorLike3=document.getElementById('likes3');
valorLike3.innerHTML=like3;*/

/*Ejercicio 8: Card
const card = document.querySelector('.style-card');
card.style = `width: 400px; height: 500px; border: 1px solid black; border-radius: 7px; box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; background-color: rgb(226, 195, 195); display: flex; justify-content: center; align-items: center; flex-direction: column;`
const imag = document.querySelector('.style-imag');
imag.style = `width: 300px; height: 200px; margin-top: 80px;`
const cuerpo = document.querySelector('body');
cuerpo.style = `display: flex; justify-content: center; align-items: center; `

const titulo = prompt('Ingrese titulo');
const cambioTitulo = document.getElementById('titulo');
cambioTitulo.innerHTML=titulo;
const imagen = prompt('Ingrese url imagen');
const cambioImagen = document.getElementById('imagen');
cambioImagen.innerHTML=imagen;

const articulo = prompt('Ingrese url de articulo');
const cambioArticulo = document.getElementById('link');
cambioArticulo.innerHTML=link;*/


//Ejercicio 9: Animales
//En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.

let animal = prompt('Indique: oso, tigre o ave');
const eleccionAnimal = document.querySelector('img');
eleccionAnimal.innerHTML=(`${animal}`);
if (animal === 'oso') {
   const oso = document.querySelector('.bear');
   oso.src = "https://conceptodefinicion.de/wp-content/uploads/2016/02/Oso.jpg";
 
} else if (animal=== 'tigre') {
   const tigre = document.querySelector('.tiger');
   tigre.src = 'https://static.wikia.nocookie.net/reinoanimalia/images/5/58/Tigre_de_bengala_wiki.png/revision/latest?cb=20130303105615&path-prefix=es';
 
} else if (animal=== 'ave') {
   const ave = document.querySelector('.bird');
   ave.src = 'https://dam.ngenespanol.com/wp-content/uploads/2020/12/colibries-2.jpg';
}





//console.log(document)

/*ultimo ejercicio
const palabra = prompt("ingrese su comida");
//Guardo el texto donde aparece
const text = document.querySelectorAll("#text li");

for(let i = 0; i < text.length; i++){
   const textHTML = text[i].innerHTML;
   if (textHTML.includes(palabra)){
      text[i].style.backgroundColor = "red";
   }
}
<ul id="text">
    <li> casa Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, eaque.</li>
    <li>Sed illum maiores non. Nihil natus voluptatem reprehenderit deserunt facere.</li>
    <li>Magni iusto fugiat incidunt quas illo aperiam eum tempora in.</li>
    <li>Consectetur, deserunt odit labore nulla sint nihil repellendus explicabo deleniti!</li>
    <li>Possimus ex recusandae ipsum aut accusamus placeat labore veniam officiis!</li>
    <li>Ea eius casa enim similique ab odio molestiae asperiores, quod corrupti!</li>
    <li>Rerum vitae corporis, facilis accusantium debitis beatae at dolor in!</li>
    <li>Quod eius  casa error qui ipsa praesentium quae repudiandae molestiae sequi.</li>
    <li>Doloribus totam at alias nemo dolore possimus suscipit laudantium amet!</li>
    <li>Debitis vel tempore, perspiciatis eaque sequi perferendis aut vero nesciunt.</li>
  </ul>*/


