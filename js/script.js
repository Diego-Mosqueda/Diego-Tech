/**
 * ====================================
 * DIEGO TECH - FUNCIONES JAVASCRIPT
 * ====================================
 * Scripting para animaciones, carrusel y funcionalidades
 */

// ===== 1. FUNCIONES DEL CARRUSEL DE FONDO =====
// Gestiona las diapositivas automáticas del hero

let currentSlideIndex = 0;

/**
 * Muestra la diapositiva específica del carrusel de fondo
 * @param {number} index - Índice de la diapositiva a mostrar
 */
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-bg-item');
    
    if (slides.length === 0) return;
    
    // Validar límites
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;
    
    // Remover clase activa de todos
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Agregar clase activa a la diapositiva actual
    slides[currentSlideIndex].classList.add('active');
}

/**
 * Cambia a una diapositiva específica
 * @param {number} index - Índice de la diapositiva
 */
function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

/**
 * Avanza a la siguiente diapositiva
 */
function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

// Cambiar carrusel automáticamente cada 5 segundos
setInterval(nextSlide, 5000);

// ===== 2. MENÚ HAMBURGUESA =====
// Abre/cierra el menú en dispositivos móviles

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
    });
});

// ===== 3. SCROLL SUAVE =====
// Suaviza el desplazamiento entre secciones

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== 4. FORMULARIO DE CONTACTO =====
// Procesa el envío de formularios con validación mejorada

const contactForm = document.querySelector('.contacto-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const telefono = this.querySelector('input[type="tel"]').value.trim();
        const mensaje = this.querySelector('textarea').value.trim();
        
        // Validación
        if (!nombre || !email || !mensaje) {
            alert('⚠️ Por favor completa todos los campos requeridos.');
            return;
        }
        
        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('⚠️ Por favor ingresa un email válido.');
            return;
        }
        
        // Mostrar confirmación profesional
        alert(`✅ ¡Excelente ${nombre}!\n\n📧 Tu mensaje ha sido recibido correctamente.\n\nNos pondremos en contacto a través de:\n${email}${telefono ? '\n' + telefono : ''}\n\n⏱️ Respuesta en 24 horas máximo.\n\n¡Gracias por confiar en Diego Tech!`);
        
        // Limpiar formulario
        this.reset();
    });
}

// ===== 5. ANIMACIONES AL SCROLL =====
// Anima elementos cuando entran en la vista

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agregar animación fade-in
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.service-box, .paquete-card, .trabajo-item').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// ===== 6. MODAL DE TRABAJOS =====
// Controla la apertura y cierre de modales detallados

/**
 * Abre el modal con los detalles del trabajo
 * @param {number} modalId - ID del modal a abrir (1, 2 o 3)
 */
function abrirModal(modalId) {
    const modal = document.getElementById('trabajoModal');
    const modalTrabajo = document.getElementById('modal' + modalId);
    
    if (modal && modalTrabajo) {
        // Ocultar todos los modales
        document.querySelectorAll('.modal-trabajo').forEach(m => {
            m.classList.remove('activo');
        });
        
        // Mostrar el modal solicitado
        modalTrabajo.classList.add('activo');
        modal.classList.add('activo');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Cierra el modal de trabajos
 */
function cerrarModal() {
    const modal = document.getElementById('trabajoModal');
    if (modal) {
        modal.classList.remove('activo');
        document.body.style.overflow = 'auto';
    }
}

// Cerrar modal al hacer clic fuera
window.addEventListener('click', function(event) {
    const modal = document.getElementById('trabajoModal');
    if (event.target === modal) {
        cerrarModal();
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        cerrarModal();
    }
});

// ===== INICIO =====
console.log('✅ Diego Tech - Sitio cargado correctamente');
console.log('🚀 Animaciones AOS activadas');
console.log('📱 Carrusel en funcionamiento');
console.log('🎯 Modales de trabajos listos');

