# 👨‍💻 Diego - Soporte Técnico & Ingeniería Smart

Sitio web profesional para servicios de soporte técnico, optimización de sistemas y hogar inteligente.

## 📋 Características

✅ **Navbar Moderno** con menú desplegable de servicios
✅ **Diseño Responsivo** - Funciona en todos los dispositivos
✅ **Sección de Servicios** - Optimización, Productividad y Hogar Inteligente
✅ **Catálogo de Precios** - Combo Estudiante, Office Pro y Dispositivos Inteligentes
✅ **Portafolio de Trabajos** - Antes y Después, Velocidad, Testimonios
✅ **Formulario de Contacto** - Integrado y funcional
✅ **Colores Llamativos** - Diseño moderno y profesional
✅ **Animaciones Suaves** - Scroll y hover effects

## 🎨 Paleta de Colores

- **Primario**: Púrpura (#7C3AED)
- **Secundario**: Rosa (#EC4899)
- **Acento**: Cyan (#06B6D4)
- **Éxito**: Verde (#10B981)
- **Advertencia**: Ámbar (#F59E0B)
- **Peligro**: Rojo (#EF4444)

## 📂 Estructura del Proyecto

```
Negocio/
├── index.html           # Página principal
├── css/
│   └── styles.css      # Estilos completos
├── js/
│   └── script.js       # JavaScript interactivo
├── assets/             # Carpeta para imágenes
│   └── img/           # Imágenes del proyecto
└── README.md          # Este archivo
```

## 🔧 Secciones Principales

### 1. Navbar
- Logo: "Diego Tech" con ícono
- Menú de navegación con dropdown
- Menú hamburguesa responsive
- Sticky (se queda en la parte superior)

### 2. Hero Section
- Título principal
- Descripción de servicios
- Botón de acción

### 3. Servicios
**Tres categorías principales:**
- 🚀 Optimización de Sistemas
- 📊 Productividad (Office)
- 🏠 Hogar Inteligente

### 4. Precios
**Tres paquetes:**
1. **Combo Estudiante** - $300 ⭐ MÁS VENDIDO
2. **Suite Office Completa** - $200
3. **Configuración Inteligente** - $150

### 5. Mis Trabajos
- Antes y Después
- Estadísticas de Velocidad
- Testimonios

### 6. Contacto
- Información de contacto
- Formulario de contacto
- Enlaces a redes sociales

## 🎯 Personalización

### Cambiar Colores
Edita las variables en `css/styles.css`:

```css
:root {
    --primary: #7C3AED;      /* Cambiar púrpura */
    --secondary: #EC4899;    /* Cambiar rosa */
    --accent: #06B6D4;       /* Cambiar cyan */
    /* ... más colores */
}
```

### Actualizar Información de Contacto
En `index.html`, busca la sección `<!-- CONTACTO -->` y actualiza:
- Teléfono
- Email
- Ubicación
- Horarios

### Agregar Imágenes
1. Coloca las imágenes en la carpeta `assets/img/`
2. Busca las líneas con `<img src="https://via.placeholder.com/..."`
3. Reemplaza con: `<img src="img/tu-imagen.jpg" alt="Descripción">`

### Cambiar Precios
Busca en `index.html` las secciones con clase `precio-numero` y cambia los valores.

### Personalizar Textos
Todos los textos están en `index.html`. Simplemente busca y reemplaza.

## 🚀 Cómo Usar

1. **Abre el archivo `index.html` en tu navegador**
   
2. **Para desarrollo local:**
   - Usa VS Code Live Server
   - O cualquier servidor local (python, node, etc.)

3. **Personaliza según tus necesidades:**
   - Colores en `css/styles.css`
   - Textos en `index.html`
   - Imágenes en `assets/img/`

## 📱 Responsive

El sitio se adapta perfectamente a:
- 📱 Teléfonos (320px - 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktops (1024px+)

## 🎬 Interactividad

- ✅ Menú hamburguesa funcional
- ✅ Dropdown de servicios interactivo
- ✅ Scroll suave entre secciones
- ✅ Animaciones al hacer scroll
- ✅ Formulario de contacto
- ✅ Botones interactivos

## 📧 Integración de Email

Para que el formulario envíe emails realmente, necesitarás:

1. Backend (PHP, Node.js, Python, etc.)
2. Servicio como Formspree, EmailJS o similar

**Opción rápida: Formspree**
1. Crea cuenta en https://formspree.io/
2. Cambia el atributo `action` del formulario
3. Reemplaza el email en la acción

```html
<form action="https://formspree.io/f/tu_codigo" method="POST" class="contacto-form">
```

## 🔐 Seguridad

- Valida siempre los formularios en el servidor
- Usa HTTPS en producción
- Nunca expongas credenciales sensibles

## 📞 Contacto y Redes Sociales

Actualiza los enlaces en:
- `index.html` - Sección `<!-- CONTACTO -->`
- `index.html` - Footer con redes sociales

## ⚡ Performance

- ✅ CSS optimizado
- ✅ JavaScript minimalista
- ✅ Imágenes placeholder (reemplazar con reales)
- ✅ Animaciones optimizadas

## 🎓 Aprendizaje

Este sitio fue diseñado con:
- HTML5 semántico
- CSS3 moderno (Grid, Flexbox, Gradientes)
- JavaScript vanilla (sin dependencias)
- Diseño responsivo
- Accesibilidad

## 📝 Licencia

Este proyecto es tuyo. Úsalo como necesites.

## 🎉 ¡Listo!

Tu sitio profesional está listo. Personalízalo y ¡a ganar clientes!

---

Hecho con ❤️ para Diego - Soporte Técnico & Ingeniería Smart
