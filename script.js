const navegador = document.querySelector("#nav-container");
const cuerpo = document.querySelector('#cuerpo')


const isScrolling = () =>{
    if(window.scrollY > 2){
        navegador.className = "row container-fluid m-0 bg-warning bg-opacity-50 d-flex sticky-top"
        navegador.style.transition = "all 3s"
    }else{
        navegador.className = "row container-fluid m-0 bg-warning d-flex sticky-top"
    }
}

const toTheTop = () =>{
    return window.scrollTo(0, 0)
}

window.addEventListener('scroll', isScrolling)
navegador.addEventListener('click', toTheTop)