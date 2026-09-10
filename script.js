const numero1 =
    document.getElementById("numero1");

const numero2 =
    document.getElementById("numero2");

const btnSomar =
    document.getElementById("btnSomar");

const resultado =
    document.getElementById("resultado");

    btnSomar.addEventListener(
        "click",
        somar
    );

    function somar() {

        console.log(
            "Botão de soma clicado!"
        );

    }