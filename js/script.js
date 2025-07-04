// Manejar el formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const name = document.getElementById('name').value;
            
            // Crear mensaje personalizado
            let message = '¡Gracias por tu mensaje, ' + name + '!\n\n';
            message += 'Tu consulta ha sido enviada con éxito.\n';
            message += 'Te responderemos a la brevedad posible.\n\n';
            message += 'Mientras tanto, puedes seguirnos en nuestras redes sociales para más contenido.';
            
            // Mostrar alerta con el mensaje
            alert(message);
            
            // Resetear el formulario
            contactForm.reset();
        });
    }
});
