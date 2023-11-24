
//Bootstrap

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function ValidarDatos()  {

   if(formconsultas.nombre.value ==0) {
    alert ('Compete el nombre min 3 caracteres')
       formconsultas.nombre.value ='';
       formconsultas.nombre.focus();
       return false;

   }
   
   else {
    alert ("Recibimos Su Consulta Exitosamente")
   }
   
  }