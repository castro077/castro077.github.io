

// Función para mostrar respuesta
const mostrarRespuesta = () => {
  const respuesta = confirm("¿Aceptas pasar San Valentín conmigo? ❤️");
  if (respuesta) {
    alert("¡Gracias por no rechazarme. 😊");
  } else {
    alert("Bueno,hice lo que pude");
  }
};

// Generar corazones
const heartsContainer = document.querySelector('.hearts');
for (let i = 0; i < 10; i++) { // Aumentamos el número de corazones
  const heart = document.createElement('span');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 6 + 4 + 's'; // Variamos la duración
  heart.style.width = `${Math.random() * 30 + 20}px`; // Tamaño aleatorio entre 20px y 50px
  heart.style.height = heart.style.width; // Mantenemos la proporción
  heartsContainer.appendChild(heart);
}
