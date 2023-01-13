let qtnd = 0, cartas1 = [], cartaVirada0 = null, cartaVirada1 = null,
    contador = 0, contadorVitoria = 0, contadorJogadas = 0, controle = true;

const cartas0 = [
    `<div class="card" onclick="iniciarJogo(this)" data-test="card">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot" data-test="face-down-image">
        </div>
        <div class="back-face face">
            <img src="./img/metalparrot.gif" alt="metalparrot" data-test="face-up-image">
        </div>
    </div>`,
    `<div class="card" onclick="iniciarJogo(this)" data-test="card">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot" data-test="face-down-image">
        </div>
        <div class="back-face face">
            <img src="./img/bobrossparrot.gif" alt="bobrosparror" data-test="face-up-image">
        </div>
    </div>`,
    `<div class="card" onclick="iniciarJogo(this)" data-test="card">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot" data-test="face-down-image">
        </div>
        <div class="back-face face">
            <img src="./img/explodyparrot.gif" alt="explodyparrot" data-test="face-up-image">
        </div>
     </div>`,
    `<div class="card" onclick="iniciarJogo(this)" data-test="card">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot" data-test="face-down-image">
        </div>
        <div class="back-face face">
            <img src="./img/fiestaparrot.gif" alt="fiestaparrot" data-test="face-up-image">
        </div>
    </div>`,
    `<div class="card" onclick="iniciarJogo(this)" data-test="card">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot" data-test="face-down-image">
        </div>
        <div class="back-face face">
            <img src="./img/revertitparrot.gif" alt="revertitparrot" data-test="face-up-image">
        </div>
    </div>`,
    `<div class="card" onclick="iniciarJogo(this) data-test="card">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot" data-test="face-down-image">
        </div>
        <div class="back-face face">
            <img src="./img/tripletsparrot.gif" alt="tripetsparrot" data-test="face-up-image">
        </div>
    </div>`,
    `<div class="card" onclick="iniciarJogo(this)" data-test="card"> 
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot" data-test="face-down-image">
        </div>
        <div class="back-face face">
            <img src="./img/unicornparrot.gif" alt="unicornparrot" data-test="face-up-image">
        </div>
    </div>`
];

setTimeout(pegarQtnd, 1000);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function mostrarCartas(qtnd) {
    shuffle(cartas0);
    for (let i = 0; i < qtnd / 2; i++) {
        cartas1.push(cartas0[i]);
        cartas1.push(cartas0[i]);
    }
    shuffle(cartas1);
    for (let i = 0; i < cartas1.length; i++) {
        document.querySelector(".container1").innerHTML += cartas1[i];
    }
}

function pegarQtnd() {
    while (1) {
        qtnd = Number(prompt("Com quantas cartas deseja jogar ?"));
        if (qtnd % 2 === 0 && qtnd >= 4 && qtnd <= 14) {
            mostrarCartas(qtnd);
            break;
        }
        alert("Número inválido o número deve ser entre 4 e 14 e par !")
    }

}

function virarCarta(carta) {
    carta.children[0].classList.toggle("face0");
    carta.children[1].classList.toggle("face1");
}

function iniciarJogo(carta) {

    if (controle) {

        contadorJogadas++;

        if (contador === 0) {
            virarCarta(carta);
            cartaVirada0 = carta;
            contador++;
        }
        else if (contador === 1 && carta !== cartaVirada0) {
            virarCarta(carta);
            cartaVirada1 = carta;
            contador++;
            controle = false;


            const imagem0 = cartaVirada0.querySelector(".back-face img").getAttribute("src");
            const imagem1 = cartaVirada1.querySelector(".back-face img").getAttribute("src");

            if (imagem0 === imagem1)
                contadorVitoria++;
            else {
                setTimeout(virarCarta, 1000, cartaVirada0);
                setTimeout(virarCarta, 1000, cartaVirada1);
            }

            setTimeout(delay, 1100);

            contador = 0;

            if (contadorVitoria === qtnd / 2)
                setTimeout(alert, 1000, `Você ganhou em ${contadorJogadas} jogadas!`);
        }
    }
}

function delay() { controle = true; }