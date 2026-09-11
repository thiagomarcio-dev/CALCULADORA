const numero1 =
    document.getElementById("numero1");

const numero2 =
    document.getElementById("numero2");

const btnSomar =
    document.getElementById("btnSomar");

const btnSubtrair =
    document.getElementById("btnSubtrair");

const btnMultiplicar =
    document.getElementById("btnMultiplicar");

const btnDividir =
    document.getElementById("btnDividir");

const resultado =
    document.getElementById("resultado");

    btnSomar.addEventListener(
        "click",
        somar
    );

btnSubtrair.addEventListener(
            "click",
            subtrair
        );

btnMultiplicar.addEventListener(
            "click",
            multiplicar
        );

btnDividir.addEventListener(
            "click",
            dividir
        );




    function somar() {
    if (
            numero1.value === "" ||
            numero2.value === ""
        ) {

            resultado.textContent =
                "Digite os dois números";

            return;
        }

        const valor1 =
            Number(numero1.value);

        const valor2 =
            Number(numero2.value);

        const soma =
                valor1 + valor2;

            resultado.textContent =
                soma;


    }

    function subtrair() {
     if (
                numero1.value === "" ||
                numero2.value === ""
            ) {

                resultado.textContent =
                    "Digite os dois números";

                return;
            }


            const valor1 =
                Number(numero1.value);

            const valor2 =
                Number(numero2.value);

            const subtracao =
                    valor1 - valor2;

                resultado.textContent =
                    subtracao;


        }


function multiplicar() {
 if (
            numero1.value === "" ||
            numero2.value === ""
        ) {

            resultado.textContent =
                "Digite os dois números";

            return;
        }


        const valor1 =
            Number(numero1.value);

        const valor2 =
            Number(numero2.value);

        const multiplicacao =
                valor1 * valor2;

            resultado.textContent =
                multiplicacao;


    }


function dividir() {
 if (
            numero1.value === "" ||
            numero2.value === ""
        ) {

            resultado.textContent =
                "Digite os dois números";

            return;
        }

        const valor1 =
            Number(numero1.value);

        const valor2 =
            Number(numero2.value);

        if (valor2 === 0) {

                resultado.textContent =
                    "Não é possível dividir por zero";

                return;
            }

        const divisao =
                valor1 / valor2;

            resultado.textContent =
                divisao;


    }