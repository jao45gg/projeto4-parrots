let qtnd = 0;

const cartas0 = [
    `<div class="card" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/metalparrot.gif" alt="metalparrot">
        </div>
    </div>`,
    `<div class="card" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/bobrossparrot.gif" alt="bobrosparror">
        </div>
    </div>`,
    `<div class="card" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/explodyparrot.gif" alt="explodyparrot">
        </div>
     </div>`,
    `<div class="card" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/fiestaparrot.gif" alt="fiestaparrot">
        </div>
    </div>`,
    `<div class="card" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/revertitparrot.gif" alt="revertitparrot">
        </div>
    </div>`,
    `<div class="card" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/tripletsparrot.gif" alt="tripetsparrot">
        </div>
    </div>`,
    `<div class="card" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/unicornparrot.gif" alt="unicornparrot">
        </div>
    </div>`
];

let cartas1 = [];

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

while (1) {
    qtnd = Number(prompt("Com quantas cartas deseja jogar ?"));
    if (qtnd % 2 === 0 && qtnd >= 4 && qtnd <= 14) {
        mostrarCartas(qtnd);
        break;
    }
    alert("Número inválido o número deve ser entre 4 e 14 e par !")
}

function virarCarta(carta) {
    carta.children[0].style.cssText =
        'transform: rotateY(-180deg);';
    carta.children[1].style.cssText =
        'transform: rotateY(0deg);';
}