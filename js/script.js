// Obtener el botón para cambiar el color de fondo
const cambiarColorBtn = document.getElementById('cambiarColorBtn');
// Obtener el párrafo para mostrar el código del color
const codigoColor = document.getElementById('codigoColor');
// Obtener el enlace para mostrar información del color
const infoColorLink = document.getElementById('infoColorLink');

// Agregar un evento de clic al botón
cambiarColorBtn.addEventListener('click', () => {
    // Generar un color aleatorio en formato hexadecimal
    const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    // Cambiar el color de fondo del body con el color aleatorio generado
    document.body.style.backgroundColor = colorAleatorio;

    // Mostrar el código del color generado en el párrafo
    codigoColor.textContent = `${colorAleatorio}`;
    codigoColor.style.display = 'block'; // Mostrar el párrafo

    // Configurar el enlace para mostrar información del color
    infoColorLink.href = `https://www.google.com/search?q=${encodeURIComponent(colorAleatorio)}`;
    infoColorLink.style.display = 'block'; // Mostrar el enlace
    infoColorLink.textContent = 'Color information';
});