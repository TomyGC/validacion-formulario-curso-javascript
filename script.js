const submitFunction = (event) => {

    //validarFormulario()
    /*event.preventDefault() // evita que se prenga la actualización de la web
    const valido = validarFormulario() //esto sera true o false sea válido o no el fomulario*/
    if(!validarFormulario()){
        event.preventDefault();
    }else{
        event.preventDefault();

        alert(

            'Los datos enviados fueron: \n'  +
            'Nombre:' + document.getElementById('nombre').value + '\n' +
            'Apellido:' + document.getElementById('apellido').value + '\n' +
            'Documento:' + document.getElementById('documento').value + '\n'+
            'Email:' + document.getElementById('email').value + '\n'+
            'Edad:' + document.getElementById('edad').value + '\n'+
            'Actividad:' + document.getElementById('actividad').value + '\n'+
            'Nivel de Estudio:' + document.getElementById('nivelEstudio').value + '\n'
       
        )
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction) // escucha el envío del formulario

function validarFormulario(){

    //Esto valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrexta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) // error + id con la primera en mayúscula 
        if(campo.value.length == ''){
            mostrarError(errorCampo, 'Este campo es requerido!')
            validacionCorrexta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres!')
            validacionCorrexta = false

        }else{
            ocultarError(errorCampo)
        }
    })


    //esto valida el campo email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail')

    if(/[^\s@]+[^\s@]+\.[^\s@]+$/.test(email.value)){ //este regez valida que el formato del email sea válido
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, 'Ingrese un correo electrónico válido!')
    }


    // validación de edad

    const edad= document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad')

    if(edad.value < 18){
        mostrarError(errorEdad, 'Debes ser mayor de 18 aoos para registrarte!')
        validacionCorrexta = false 
    } else{
        ocultarError(errorEdad)
    }

    // Validacion de la actividad

    const actividad = document.getElementById('actividad')
    const errorActividad = document.getElementById('errorActividad')

    if(actividad.value == ''){
        mostrarError(errorActividad, 'Por favor, selecciona una actividad')
        validacionCorrexta = false;
    }else{
        ocultarError(errorActividad)
    }

    // Validación de nivel de estudio
    const nivelEstudio = document.getElementById('nivelEstudio')
    const errorNivelEstudio = document.getElementById('errorNivelEstudio')

    if(actividad.value == ''){
        mostrarError(errorNivelEstudio, 'Por favor, selecciona un nivel de estudio')
        validacionCorrexta = false;
    }else{
        ocultarError(errorNivelEstudio)
    }

    //validar los terminos y condiciones

    const aceptoTerminos = document.getElementById('aceptoTerminos')
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')

    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, 'Debes aceptar los términos y condiciones')
        validacionCorrexta = false;
    }else{
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorrexta //esto dirá si el formulario completo es válido

}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}

