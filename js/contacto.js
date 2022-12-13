const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {

   event.preventDefault();
   Swal.fire({
     title: 'Enviado',
     icon: 'success',
     text: 'Gracias por contactarte conmigo!',
   });

    document.getElementById('form').reset();
    
});
