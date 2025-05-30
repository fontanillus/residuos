function calcular() {
            const dividendoInput = document.getElementById('dividendo').value;
            const divisorInput = document.getElementById('divisor').value;
            const respuesta = document.getElementById('respuesta');

            const dividendo = parseInt(dividendoInput);
            const divisor = parseInt(divisorInput);

            // Validar que ambos son números
            if (isNaN(dividendo) || isNaN(divisor)) {
                respuesta.innerHTML = "<span style='color: red;'>Por favor, introduce ambos números válidos.</span>";
                return;
            }

            // Validar que divisor esté entre 2 y 7
            if (divisor < 2 || divisor > 7) {
                respuesta.innerHTML = "<span style='color: red;'>El divisor debe ser un número entre 2 y 7.</span>";
                return;
            }

            // Comprobar si dividendo es múltiplo de divisor
            if (dividendo % divisor === 0) {
                respuesta.innerHTML = `El número <b>${dividendo}</b> <span style="color: green;">es múltiplo</span> de <b>${divisor}</b>.`;
            } else {
                respuesta.innerHTML = `El número <b>${dividendo}</b> <span style="color: red;">no es múltiplo</span> de <b>${divisor}</b>.`;
            }
    
        }