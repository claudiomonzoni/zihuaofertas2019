//importar animaciones
//import {menu as menuAnimado} from './anima.js'

// variables para abrir el menu de cel
const menuCel = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
const logo = document.querySelector('.logo');
const ul = document.querySelector('#menu ul')


//funciones
let abrirMenu = function(){
  menuCel.classList.toggle('is-active')
  
  
  if(menu.classList.contains('jsInicio')){
    menu.classList.toggle('cerrado')
  }else{
    menu.classList.toggle('interior')
  }

  ul.classList.toggle('animacion')
  logo.classList.toggle('animaLogo')

  if(menuCel.classList.contains('is-active'))
  {
   
  }else{
    //no menu 
  }
}
//eventos
menuCel.addEventListener('click', abrirMenu);


//plugins

const slideHome = new Siema ({
  selector:'#slider',
  duration: 500,
  easing: 'ease-out',
  perPage: {
    400: 1,
    600: 2,
    1600: 3
  },
  startIndex: 0,
  draggable: true,
  loop: true
  
  });




// eventos interfaz

//instanciar las dos clases


class EventosHomeApi{
  constructor(){
      this.token = 'VJKJAMIJ7MUWMCWOTJOZ'
      this.ordenar = 'date'
  }

  // obtener eventos
  async obtenerEventos(evento){
        
    const respuestaEventos = await fetch(
    `https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&token=${this.token}`
    )
    const eventos = await respuestaEventos.json()
    return{
        eventos
    }
}
}



class InterfazEventos{
  constructor(){
    this.init()
    //la bandeja
    this.bandeja = document.getElementById('eventosBandeja')
    
  }
  //metodo para iniciar
  init(){
    api.obtenerEventos('ixtapa')
    .then(datos => {

      const losEventos = datos.eventos.events

      losEventos.forEach(evento => {
        //console.log(evento)
        const fecha = new Date(evento.start.utc).toDateString()
        this.bandeja.innerHTML += `
        <div class="evento">
         <div class="fecha">
             <li>${fecha.substr(7, 3)}</li>
             <li>${fecha.substr(4, 3)}</li>
         </div>
         <div class="eventoTxt">
             <h2>${evento.name.text}</h2>
             <p>
                 ${evento.description.text.substr(0, 150)}
                 
             </p>
             <hr>
            <b>  <a href="${evento.url}" target="_blank" > liga al evento </a> </b>
         </div>
     </div>
        `
      });
    } )
  }

}

const api = new EventosHomeApi()
const ui = new InterfazEventos()



//animejs

let ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.6, 1];
ml4.scaleOut = 1.1;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 800;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-4',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-4',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });








