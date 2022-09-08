const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_y54wuyi';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      Swal.fire({
        title: 'Enviado',
        icon: 'success',
        text: 'Gracias por contactarte conmigo!',
      });
    }, (err) => {
      btn.value = 'Enviar';
      Swal.fire({
        title: 'Parece que hubo un problema',
        icon: 'error',
        text: JSON.stringify(err),
      });
    });

    document.getElementById('form').reset();
    
});
