setTimeout(() => {
    const boton = document.querySelector(".boton1");
    if (boton) {
        boton.classList.add("visible");
    }
}, 2600); 

// DARK MODE
const darkModeGuardado = localStorage.getItem('darkMode') === 'true';
if (darkModeGuardado) {
    document.body.classList.add('dark-mode');
}

const botonDarkMode = document.getElementById('darkmode');
const imagenBoton = document.getElementById('imgdarkmode');

if (botonDarkMode && imagenBoton) {
    imagenBoton.src = darkModeGuardado ? 'toggle-on.png' : 'toggle-off.png';
    imagenBoton.style.opacity = '1';
    
    botonDarkMode.addEventListener('click', () => {
        const estaActivo = document.body.classList.contains('dark-mode');
        const nuevoEstado = !estaActivo;
        
        if (nuevoEstado) {
            document.body.classList.add('dark-mode');
            imagenBoton.src = 'toggle-on.png';
        } else {
            document.body.classList.remove('dark-mode');
            imagenBoton.src = 'toggle-off.png';
        }
        localStorage.setItem('darkMode', nuevoEstado);
    });
}