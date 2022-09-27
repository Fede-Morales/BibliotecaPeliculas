class Pelicula {
  constructor(nombre, genero, anio, director, protagonista, calificacion, id) {
    this.nombre = nombre;
    this.genero = genero;
    this.anio = anio;
    this.director = director;
    //this.portada = portada;
    this.protagonista = protagonista;
    this.calificacion = calificacion;
    this.id = id;
  }

  asignarId(array) {
    this.id = array.length;
  }
}

const peliculas = [
  new Pelicula(
    "Jurassic Park",
    "Ciencia ficcion",
    1993,
    "Steven Spielberg",
    "Sam Neill",
    9,
    1
  ),
  new Pelicula(
    "The Lost World Jurassic Park",
    "Ciencia ficcion",
    1997,
    "Steven Spielberg",
    "Jeff Goldblum",
    9,
    2
  ),
  new Pelicula(
    "Jurassic Park 3",
    "Ciencia ficcion",
    2001,
    "Joe Johnston",
    "Sam Neill",
    8,
    3
  ),
  new Pelicula(
    "The lord of the rings: The Fellowship of the Ring",
    "Aventuras",
    2001,
    "Peter Jackson",
    "Elijah Wood",
    10,
    4
  ),
  new Pelicula(
    "The lord of the rings: The two towers",
    "Aventuras",
    2002,
    "Peter Jackson",
    "Elijah Wood",
    10,
    5
  ),
  new Pelicula(
    "The lord of the rings: The return of the king",
    "Aventuras",
    2003,
    "Peter Jackson",
    "Elijah Wood",
    10,
    6
  ),
  new Pelicula(
    "Terminator",
    "Acción",
    1984,
    "James Cameron",
    "Arnold Schwarzenegger",
    8,
    7
  ),
  new Pelicula(
    "Terminator 2: Judgment Day",
    "Acción",
    1991,
    "James Cameron",
    "Arnold Schwarzenegger",
    9,
    8
  ),
  new Pelicula(
    "The Truman Show",
    "Comedia dramática",
    1998,
    "Peter Weir",
    "Jim Carrey",
    10,
    9
  ),
  new Pelicula(
    "Eternal Sunshine of the Spotless Mind",
    "Drama",
    2004,
    "Michel Gondry",
    "Jim Carrey",
    10,
    10
  ),
];



let ingreso = document.getElementById('ingresar')
const controlAño = document.getElementById('año')
const controlCalif = document.getElementById('calificacion')
const buscar = document.getElementById('buscar')
const controlBusqueda = document.getElementById('buscador')



controlCalif.addEventListener('keypress',(e)=>{
  let codChar = e.keyCode
  if(codChar!=0){
    if(codChar < 48 || codChar > 57){
      e.preventDefault();
      alert('Solo podes ingresar numeros')
    }
  }
})

controlAño.addEventListener('keypress',(e)=>{
  let codChar = e.keyCode
  if(codChar!=0){
    if(codChar < 48 || codChar > 57){
      e.preventDefault();
      alert('Solo podes ingresar numeros')
    }
  }
})

controlBusqueda.addEventListener('keypress',(e)=>{
  let codChar = e.keyCode
  if(codChar!=0){
    if(codChar > 47 && codChar < 58 ){
      e.preventDefault();
      alert('No podes ingresar numeros')
    }
  }
})


ingreso.addEventListener('click', ()=>{
  let nombre = document.getElementById('nombre').value;
  let genero = document.getElementById('genero').value;
  let anio = document.getElementById('año').value;
  let director = document.getElementById('director').value
  let protagonista = document.getElementById('protagonista').value
  let calificacion = document.getElementById('calificacion').value
  
  cargarPelicula(nombre, genero, anio, director, protagonista, calificacion);
})

buscar.addEventListener('click',()=>{
  let busqueda = document.getElementById('buscador').value
  
  buscarPelicula(busqueda);
});

function cargarPelicula(nombre, genero, anio, director, protagonista, calificacion){
  let pelicula = new Pelicula(
    nombre, genero, anio, director, protagonista, calificacion
  )
  peliculas.push(pelicula)
  pelicula.asignarId(peliculas)
  alert(`Pelicula cargada: ${nombre}
  genero:${genero}
  año:${anio}
  director:${director}
  protagonista:${protagonista}
  calificacion:${calificacion}
  `)
}

function buscarPelicula(buscar){ 
  var array = [];
  for (const pelicula of peliculas) {
    if (pelicula.nombre.includes(buscar)) {
      array.push(pelicula);
    }
    else if(pelicula.genero.includes(buscar)){
      array.push(pelicula);
    }
    else if(pelicula.director.includes(buscar)) {
      array.push(pelicula);
    }
    if (pelicula.protagonista.includes(buscar)) {
      array.push(pelicula);
    }  
  }
  mostrarPelicula(array);
}


//btnOrdenAlfabetico.addEventListener('click',mostrarPeliculasEnOrden);

// btnOrdenAlfabetico.onclick = ()=>{
//   seleccion = `Peliculas por orden alfabetico(A-Z)`;
//   let ordenAlfabetico = arrayOrdenado.sort((a, b) =>
//     a.nombre.localeCompare(b.nombre)
//   );
//   mostrarPelicula(ordenAlfabetico);
// }

// btnOrdenAnio.onclick = ()=>{
//   seleccion = `Peliculas ordenadas por año`;
//   let ordenAño = arrayOrdenado.sort((a, b) => a.anio - b.anio);
//   mostrarPelicula(ordenAño);
// }

// btnOrdenCalificacion.onclick = ()=>{
//   seleccion = `Peliculas ordenadas por calificacion`;
//   let ordenCal = arrayOrdenado.sort(
//     (a, b) => a.calificacion - b.calificacion
//   );
//   mostrarPelicula(ordenCal);
// }

// function mostrarPeliculasEnOrden(){
//   seleccion = `Peliculas por orden alfabetico(A-Z)`;
//   let ordenAlfabetico = arrayOrdenado.sort((a, b) =>
//     a.nombre.localeCompare(b.nombre)
//   );
//   mostrarPelicula(ordenAlfabetico);
// }




// var array = [];
// switch (seleccion) {
//   // case 1:
//   //   seleccion = `Peliculas por orden alfabetico(A-Z)`;
//   //   let ordenAlfabetico = arrayOrdenado.sort((a, b) =>
//   //     a.nombre.localeCompare(b.nombre)
//   //   );
//   //   mostrarPelicula(ordenAlfabetico);
//   //   break;
//   // case 2:
//   //   seleccion = `Peliculas ordenadas por año`;
//   //   let ordenAño = arrayOrdenado.sort((a, b) => a.anio - b.anio);
//   //   mostrarPelicula(ordenAño);
//   //   break;
//   // case 3:
//   //   seleccion = `Peliculas ordenadas por calificacion`;
//   //   let ordenCal = arrayOrdenado.sort(
//   //     (a, b) => a.calificacion - b.calificacion
//   //   );
//   //   mostrarPelicula(ordenCal);
//   //   break;
//   case 4:
//     var buscador = parseInt(
//       prompt(
//         "1-Nombre \n2-Genero \n3-Año \n4-Director \n5-Protagonista \n6-Calificacion"
//       )
//     );
//     switch (buscador) {
//       case 1:
//         let nombre = prompt("Ingrese nombre:");
//         seleccion = `Peliculas relacionadas con"${nombre}"`;
//         for (const pelicula of peliculas) {
//           if (pelicula.nombre.includes(nombre)) {
//             array.push(pelicula);
//           }
//         }
//         mostrarPelicula(array);
//         break;
//       case 2:
        
//         let genero = prompt("Ingrese genero:");
//         seleccion = `Peliculas del genero"${genero}"`;
//         for (const pelicula of peliculas) {
//           if (pelicula.genero.includes(genero)) {
//             array.push(pelicula);
//           }
//         }
//         mostrarPelicula(array);
//         break;
//       case 3:
//         let anio = parseInt(prompt("Ingrese Año:"));
//         seleccion = `Peliculas del año"${anio}"`;
//         for (const pelicula of peliculas) {
//           if (pelicula.anio == anio) {
//             array.push(pelicula);
//           }
//         }
//         mostrarPelicula(array);
//         break;
//       case 4:
//         let director = prompt("Ingrese Director:");
//         seleccion = `Peliculas del director"${director}"`;
//         for (const pelicula of peliculas) {
//           if (pelicula.director.includes(director)) {
//             array.push(pelicula);
//           }
//         }
//         mostrarPelicula(array);
//         break;
//       case 5:
        
//         let prota = prompt("Ingrese Protagonista:");
//         seleccion = `Peliculas protagonizadas por"${prota}"`;
//         for (const pelicula of peliculas) {
//           if (pelicula.protagonista.includes(prota)) {
//             array.push(pelicula);
//           }
//         }
//         mostrarPelicula(array);
//         break;
//       case 6:
        
//         let calificacion = prompt("Ingrese calificacion:");
//         buscador = `Peliculas con clasificacion"${calificacion}"`;
//         for (const pelicula of peliculas) {
//           if (pelicula.calificacion == calificacion) {
//             array.push(pelicula);
//           }
//         }
//         mostrarPelicula(array);
//         break;
//       default:
//         alert("Opcion invalida");
//         break;
//     }
// }
function mostrarPelicula(array) {
  let busqueda = document.getElementById('buscador').value
  let resultado = document.createElement("h3");
  resultado.innerHTML = `Resultados de '${busqueda}'`;
  document.body.append(resultado)
  for (const c of array) {
    let cardMovie = document.createElement("div");
    cardMovie.innerHTML = `
    <h2>${c.nombre}</h2>
    <li>Genero: ${c.genero}</li>
    <li>Año: ${c.anio}</li>
    <li>Director: ${c.director}</li>
    <li>Protagonista: ${c.protagonista}</li>
    <li>Calificacion: ${c.calificacion} </li>
    
    `
    document.body.append(cardMovie);
  }
}


//var arrayOrdenado = peliculas.slice(0);

//let continuar = true;

// while (continuar) {
//   let ingreso = prompt(
//     "Ingrese los datos de la pelicula separados por un - en el siguiente orden: nombre, genero,año, director, protagonista, portada y calificacion o un 0 para finalizar"
//   );

//   if (ingreso == "0") {
//     continuar = false;
//     break;
//   }

//   let datos = ingreso.split("-");
//   const pelicula = new Pelicula(
//     datos[0],
//     datos[1],
//     parseInt(datos[2]),
//     datos[3],
//     datos[4],
//     datos[5],
//     parseInt(datos[6])
//   );
//   peliculas.push(pelicula);
//   pelicula.asignarId(peliculas);
// }

// var seleccion = parseInt(
//   prompt(
//     "Seleccione una opcion: \n1-Mostrar peliculas por orden alfabetico(A-Z) \n2-Mostrar peliculas por año \n3-Mostrar pelicula por calificacion \n4-Buscar por.."
//   )
// );