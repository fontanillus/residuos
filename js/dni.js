function verificarDni() {
        const dniInput = document.getElementById("dni").value.toUpperCase().trim();
        const resultado = document.getElementById("resultadoDni");

        // Comprobar formato: 8 números + 1 letra
        const dniRegex = /^\d{8}[A-Z]$/;
        if (!dniRegex.test(dniInput)) {
            resultado.textContent = "Formato incorrecto. Debe contener 8 números seguidos de una letra mayúscula.";
            resultado.style.color = "red";
            return;
        }


        const letrasArray = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
                             'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        const numeros = dniInput.substr(0, 8);
        const letra = dniInput.charAt(8);

        const numDni = parseInt(numeros, 10);
        const letraCorrecta = letrasArray[numDni % 23];

        if (letra === letraCorrecta) {
            resultado.textContent = `DNI válido. La letra ${letra} es correcta.`;
            resultado.style.color = "green";
        } else {
            resultado.textContent = `DNI inválido. La letra correcta debería ser ${letraCorrecta}.`;
            resultado.style.color = "red";
        }
    }

    //La expresión const dniRegex = /^\d{8}[A-Z]$/; es una expresión regular (regex) que se usa para validar un formato específico, en este caso, el formato típico del DNI español.
//^ indica el inicio de la cadena.
//\d{8} significa exactamente 8 dígitos numéricos (del 0 al 9).
//[A-Z] significa una letra mayúscula del alfabeto inglés (de la A a la Z).
//$ indica el final de la cadena.
//Entonces, esta regex valida que una cadena sea:
//Ocho dígitos seguidos,
//Seguidos por una única letra mayúscula,