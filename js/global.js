// js/global.js
// Inicialización de particles.js con estilo anime/épico
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 200, // ¡Más partículas para un efecto más denso y épico!
            "density": {
                "enable": true,
                "value_area": 1500 // Mayor área para distribuirlas
            }
        },
        "color": {
            "value": "#FFFFFF" // Blanco brillante, como estrellas o destellos
        },
        "shape": {
            "type": "circle", // Mantener círculos para un brillo suave
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.7, // Mayor opacidad para que sean muy visibles
            "random": true, // Opacidad aleatoria para un efecto de "parpadeo" o "brillo"
            "anim": {
                "enable": true,
                "speed": 2, // Animación de opacidad más rápida
                "opacity_min": 0.2, // No desaparecen del todo
                "sync": false
            }
        },
        "size": {
            "value": 3.5, // Partículas un poco más grandes para destacar
            "random": true, // Tamaño aleatorio para variar el efecto
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false, // Sin líneas para un efecto de "brillo" puro
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2, // Velocidad de movimiento aumentada para un dinamismo épico
            "direction": "none", // Movimiento aleatorio en todas direcciones
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble" // Efecto de burbuja al pasar el ratón
            },
            "onclick": {
                "enable": true,
                "mode": "repulse" // Efecto de repulsión al hacer clic
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 300, // Mayor distancia para el efecto burbuja
                "size": 10, // Tamaño de burbuja más grande y notorio
                "duration": 2,
                "opacity": 1, // Totalmente opacas al hacer burbuja
                "speed": 3
            },
            "repulse": {
                "distance": 150, // Mayor distancia de repulsión
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Lógica para resaltar el elemento activo en el menú (basada en la URL)
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.main-nav a');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});