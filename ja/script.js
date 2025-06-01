document.getElementById('languageSwitcher').addEventListener('change', function () {
    const lang = this.value;
    switch (lang) {
        case 'en':
            window.location.href = 'index_en.html';
            break;
        case 'ja':
            window.location.href = 'index_ja.html';
            break;
        default:
            window.location.href = 'index.html';
    }
});

    


// Manejo básico del envío del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Simulación de envío (esto no enviará un correo real)
    alert(`Gracias por tu mensaje, ${nombre}. Me comunicaré contigo pronto.`);

    // Resetear el formulario
    this.reset();
});
