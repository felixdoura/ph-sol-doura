function sendEmail(){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "felixdouraalternativo@gmail.com",
            Password : "24609F2DFFBE870996F651F0A1C5FFD4AE23",
            To : '',
            From : document.getElementById("formulario-email").value,
            Subject : "Nueva Consulta Online",
            Body : "Name: "+document.getElementById("formulario-nombre").value + "<br> Email: " + document.getElementById("formulario-email").value + document.getElementById("formulario-mensaje").value
        }).then(
          message => alert(message)
        );
    }

