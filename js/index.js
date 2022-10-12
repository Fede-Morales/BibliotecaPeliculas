class Pelicula {
  constructor(nombre, genero, anio, director, protagonista, portada, calificacion, id) {
    this.nombre = nombre;
    this.genero = genero;
    this.anio = anio;
    this.director = director;
    this.protagonista = protagonista;
    this.portada = portada;
    this.calificacion = calificacion;
    this.id = id;
  }

  asignarId(array) {
    this.id = array.length;
  }
}

// const peliculas = [
//   {
//     nombre: "Jurassic Park",
//     genero: "Ciencia ficcion",
//     año: 1993,
//     director: "Steven Spielberg",
//     protagonista: "Sam Neill",
//     portada: "../portadas/Jurassick1.jpg",
//     calificacion: 9,
//     id: 1,
//   },
//   {
//     nombre: "The Lost World Jurassic Park",
//     genero: "Ciencia ficcion",
//     año: 1997,
//     director: "Steven Spielberg",
//     protagonista: "Jeff Goldblum",
//     calificacion: 9,
//     id: 2,
//   },
//   {
//     nombre: "Jurassic Park 3",
//     genero: "Ciencia ficcion",
//     año: 2001,
//     director: "Joe Johnston",
//     protagonista: "Sam Neill",
//     calificacion: 8,
//     id: 3,
//   },
//   {
//     nombre: "The lord of the rings: The Fellowship of the Ring",
//     gener: "Aventuras",
//     año: 2001,
//     director: "Peter Jackson",
//     protagonista: "Elijah Wood",
//     calificacion: 10,
//     id: 4,
//   },
//   {
//     nombre: "The lord of the rings: The two towers",
//     genero: "Aventuras",
//     año: 2002,
//     director: "Peter Jackson",
//     protagonista: "Elijah Wood",
//     calificacion: 10,
//     id: 5,
//   },
//   {
//     nombre: "The lord of the rings: The return of the king",
//     genero: "Aventuras",
//     año: 2003,
//     director: "Peter Jackson",
//     protagonista: "Elijah Wood",
//     calificacion: 10,
//     id: 6,
//   },
//   {
//     nombre: "Terminator",
//     genero: "Acción",
//     año: 1984,
//     director: "James Cameron",
//     protagonista: "Arnold Schwarzenegger",
//     califcacion: 8,
//     id: 7,
//   },
//   {
//     nombre: "Terminator 2: Judgment Day",
//     genero: "Acción",
//     año: 1991,
//     director: "James Cameron",
//     protagonista: "Arnold Schwarzenegger",
//     califacacion: 9,
//     id: 8,
//   },
//   {
//     nombre: "The Truman Show",
//     genero: "Comedia dramática",
//     año: 1998,
//     director: "Peter Weir",
//     protagonista: "Jim Carrey",
//     califacacion: 10,
//     id: 9,
//   },
//   {
//     nombre: "Eternal Sunshine of the Spotless Mind",
//     genero: "Drama",
//     año: 2004,
//     director: "Michel Gondry",
//     año: "Jim Carrey",
//     califacacion: 10,
//     id: 10,
//   },
// ];

const peliculas = [
  new Pelicula(
    "Jurassic Park",
    "Ciencia ficcion",
    1993,
    "Steven Spielberg",
    "Sam Neill",
    "../portadas/Jurassick1.jpg",
    9,
    1
  ),
  new Pelicula(
    "The Lost World Jurassic Park",
    "Ciencia ficcion",
    1997,
    "Steven Spielberg",
    "Jeff Goldblum",
    "../portadas/Jurassick2.jpg",
    9,
    2
  ),
  new Pelicula(
    "Jurassic Park 3",
    "Ciencia ficcion",
    2001,
    "Joe Johnston",
    "Sam Neill",
    "../portadas/Jurassick3.png",
    8,
    3
  ),
  new Pelicula(
    "The lord of the rings: The Fellowship of the Ring",
    "Aventuras",
    2001,
    "Peter Jackson",
    "Elijah Wood",
    "../portadas/Comunidad.png",
    10,
    4
  ),
  new Pelicula(
    "The lord of the rings: The two towers",
    "Aventuras",
    2002,
    "Peter Jackson",
    "Elijah Wood",
    "../portadas/DosTorres.jpg",
    10,
    5
  ),
  new Pelicula(
    "The lord of the rings: The return of the king",
    "Aventuras",
    2003,
    "Peter Jackson",
    "Elijah Wood",
    "../portadas/RetornoRey.png",
    10,
    6
  ),
  new Pelicula(
    "Terminator",
    "Acción",
    1984,
    "James Cameron",
    "Arnold Schwarzenegger",
    "../portadas/Terminator.jpg",
    8,
    7
  ),
  new Pelicula(
    "Terminator 2: Judgment Day",
    "Acción",
    1991,
    "James Cameron",
    "Arnold Schwarzenegger",
    "../portadas/Terminator2.png",
    9,
    8
  ),
  new Pelicula(
    "The Truman Show",
    "Comedia dramática",
    1998,
    "Peter Weir",
    "Jim Carrey",
    "../portadas/TrumanShow.jpg",
    10,
    9
  ),
  new Pelicula(
    "Eternal Sunshine of the Spotless Mind",
    "Drama",
    2004,
    "Michel Gondry",
    "Jim Carrey",
    "../portadas/EternalSunshine.jpg",
    10,
    10
  ),
];


const buscar = document.getElementById("barraBusqueda");
const controlBusqueda = document.getElementById("buscador");
const cardMovie = document.getElementById("lista");
const cardMovies = document.getElementById("listaPeliculas");
const lista = document.querySelector('.lista');
const listaPeliculas = document.querySelector('.lista__peliculas');


inicioPagina(peliculas)



buscar.addEventListener("click", () => {
  let busqueda = document.getElementById("buscador").value;
  let anio = document.getElementById("año").value;
  let calificacion = document.getElementById("calificacion").value;
  let genero = document.getElementById("genero").value;
  let ordenar = document.getElementById("ordenar").value

  if(busqueda == '' && anio == 'todos'
  && calificacion == 'todos'
  && genero == 'todos'
  && ordenar == 'todos'){
    window.location.reload()
  }
  else if(busqueda == '' && anio != 'todos'
  || calificacion != 'todos'
  || genero != 'todos'
  || ordenar != 'todos'){
    filtrarAnio(anio) 
    filtrarGenero(genero)
    filtrarCalificacion(calificacion)
  }
  else{
    buscarPelicula(busqueda)
  } 
});


function buscarPelicula(buscar) {
  var array = [];
  for (const pelicula of peliculas) {
    if (pelicula.nombre.includes(buscar)) {
      array.push(pelicula);
    } else if (pelicula.genero.includes(buscar)) {
      array.push(pelicula);
    } else if (pelicula.director.includes(buscar)) {
      array.push(pelicula);
    } else if (pelicula.protagonista.includes(buscar)) {
      array.push(pelicula);
    }
  }
  mostrarPelicula(array);
}

function filtrarAnio(anio){
  var aniosFiltrados
  if(anio != 'todos'){
    anio = parseInt(anio)
    switch(anio){
      case 1960:
        aniosFiltrados = peliculas.filter(p => p.anio > 1960 && p.anio <= anio+10)
        break;
      case 1970:
        aniosFiltrados = peliculas.filter(p => p.anio > 1970 && p.anio <= anio+10)
        break;
      case 1980:
        aniosFiltrados = peliculas.filter(p => p.anio > 1980 && p.anio <= anio+10)
        break;
      case 1990:
        aniosFiltrados = peliculas.filter(p => p.anio > 1990 && p.anio <= anio+10)
        break;
      case 2000:
        aniosFiltrados = peliculas.filter(p => p.anio > 2000 && p.anio <= anio+10)
        break;
      case 2010:
        aniosFiltrados = peliculas.filter(p => p.anio > 2010 && p.anio <= anio+10)
        break;
      case 2020:
        aniosFiltrados = peliculas.filter(p => p.anio > 2020 && p.anio <=anio+2)
        break;
      case 2022:
        aniosFiltrados = peliculas.filter(p => p.anio >=2022)
        break;
      default:
        alert("error")
    }
  }
  //No se porque no anda esto
  // if(anio !== 'todos'){
  //   anio = parseInt(anio)
  //    var anios

  //   if(anio > 1960 && anio <= anio+10){
  //     anios = peliculas.filter(p => p.anio > 1960 && p.anio <= anio+10)
  //     Siempre imprime este
  //     console.log("1960")
     
  //   }else if(anio > 1970 && anio <= anio+10){
  //     anios = peliculas.filter(p => p.anio > 1970 && p.anio <= anio+10)
  //     console.log("1970")
      
  //   }else if(anio > 1980 && anio <= anio+10){
  //     anios = peliculas.filter(p => p.anio > 1980 && p.anio <= anio+10)
  //     console.log("1980")
      
  //   }else if(anio > 1990 && anio <= anio+10){
  //     anios = peliculas.filter(p => p.anio > 1990 && p.anio <= anio+10)
  //     console.log("1990")
      
  //   }else if(anio > 2000 && anio <= anio+10){
  //     anios = peliculas.filter(p => p.anio > 2000 && p.anio <= anio+10)
  //     console.log("2000")
   
  //   }else if(anio > 2010 && anio <= anio+10){
  //     anios = peliculas.filter(p => p.anio > 2010 && p.anio <= anio+10)
  //     console.log("2010")
     
  //   }else if(anio > 2020 && anio <= 2022){
  //     anios = peliculas.filter(p => p.anio > 2020 && p.anio <=anio+10)
  //     console.log("2020")
   
  //   }else{
  //     anios = peliculas.filter(p => p.anio >=2022)
  //     console.log("2022")
  //   }
  // }

  //filtrarPeliculas(anios)
}

function filtrarGenero(genero){
  genero = genero.toLowerCase()
  var generoFiltrado
  
  if(genero !='todos'){
    console.log(genero)
    generoFiltrado = peliculas.filter(p=> p.genero.toLowerCase() == genero)
    
  }
  console.log(generoFiltrado)
}

function filtrarCalificacion(calificacion){
  calificacion = parseInt(calificacion)
  var calificacionFiltrada
  if(calificacion != 'todos'){
    calificacionFiltrada = peliculas.filter(p=> p.calificacion > calificacion)
  } 
  console.log(calificacionFiltrada)
}

// function filtrarOrden(ordenar){
//   var filtrarOrden
//   if(ordenar != 'todos'){
//     switch(ordenar){
//       case 'alfabeto':
//         peliculas.genero.sort()
//     }
//   }
// }
// function filtrarPeliculas(busqueda, anio, calificacion, genero, ordenar){

  
//   let filtroAnio = anio
//   let filtroCal = calificacion
//   let filtroGenero = genero
//   let filtroOrdenar = ordenar

  
// }

function mostrarPelicula(array) {
  if(array.length>0){
    cardMovie.innerHTML = '';
    cardMovie.innerHTML = '<h3>Resultados de busqueda<h3>'
    array.forEach(pelicula => {
      let html = `
      <article class="card">
          <header>
            <img src="${pelicula.portada}" alt="${pelicula.portada.value}" class="image">
          </header>
          <div class="separador"></div>
          <section class="card_body">
              <section class="card__tittle">${pelicula.nombre}</section>
              <div class="separador"></div>
              <section class="card__data">
                <p class="atributes">Genero:${pelicula.genero}</p>
                <p class="atributes">Protagonista:${pelicula.protagonista}</p>
                <p class="atributes">Año:${pelicula.anio}</p>
                <p class="atributes">Director:${pelicula.director}</p>
                <button class="btn__action" atributes">Ver mas tarde</button>
              </section>
          </section>
      </article>`;
    cardMovie.innerHTML += html;
  });
  listaPeliculas.classList.replace('visible','oculto')
  lista.classList.replace('oculto','visible')
  }else{
    cardMovie.innerHTML = `
      <h3>No hay resultado</h3>
    `
    listaPeliculas.classList.replace('visible','oculto')
    lista.classList.replace('oculto','visible')
  }
}

function inicioPagina(array){
  cardMovies.innerHTML = '';
  array.forEach(pelicula => {
    let html = `
    <article class="card">
        <header>
            <img src="${pelicula.portada}" alt="${pelicula.portada.value}" class="image">
        </header>
        <div class="separador"></div>
        <section class="card_body">
            <section class="card__tittle">${pelicula.nombre}</section>
            <div class="separador"></div>
            <section class="card__data">
                <p class="atributes">Genero:${pelicula.genero}</p>
                <p class="atributes">Protagonista:${pelicula.protagonista}</p>
                <p class="atributes">Año:${pelicula.anio}</p>
                <p class="atributes">Director:${pelicula.director}</p>
                <button class="btn__action" atributes">Ver mas tarde</button>
            </section>
        </section>
    </article>`;
    cardMovies.innerHTML += html;
  });
}


