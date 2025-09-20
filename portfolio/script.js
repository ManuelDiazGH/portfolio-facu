 setTimeout(() => {
    document.querySelector(".boton1").classList.add("visible");
}, 2600); 

const boton = document.getElementById('darkmode');
const imagenBoton = document.getElementById('imgdarkmode');
let imagenActual = 1; 
imagenBoton.style.opacity = '1' 
boton.addEventListener('click', () => {
    if (imagenActual === 1) {
        imagenBoton.src = 'toggle-on.png'; 
        setTimeout(() => {
            imagenBoton.style.opacity = '1'; 
        }, 0); 
        imagenActual = 2; 
    } else {
        imagenBoton.src = 'toggle-off.png'; 
        setTimeout(() => {
            imagenBoton.style.opacity = '1'; 
        }, 0); 
        imagenActual = 1; 
    }
});
