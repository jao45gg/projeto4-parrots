let qtnd = 0, cartas1 = [], cartaVirada0 = null, cartaVirada1 = null, 
contador = 0, contadorVitoria = 0, contadorJogadas = 0;

const cartas0 = [
    `<div class="card" onclick="iniciarJogo(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/metalparrot.gif" alt="metalparrot">
        </div>
    </div>`,
    `<div class="card" onclick="iniciarJogo(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/bobrossparrot.gif" alt="bobrosparror">
        </div>
    </div>`,
    `<div class="card" onclick="iniciarJogo(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/explodyparrot.gif" alt="explodyparrot">
        </div>
     </div>`,
    `<div class="card" onclick="iniciarJogo(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/fiestaparrot.gif" alt="fiestaparrot">
        </div>
    </div>`,
    `<div class="card" onclick="iniciarJogo(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/revertitparrot.gif" alt="revertitparrot">
        </div>
    </div>`,
    `<div class="card" onclick="iniciarJogo(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/tripletsparrot.gif" alt="tripetsparrot">
        </div>
    </div>`,
    `<div class="card" onclick="iniciarJogo(this)">
        <div class="front-face face">
            <img src="./img/back.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="./img/unicornparrot.gif" alt="unicornparrot">
        </div>
    </div>`
];

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
    carta.children[0].classList.toggle("face0");
    carta.children[1].classList.toggle("face1");
    console.log(carta);
}

function iniciarJogo(carta) {

    contadorJogadas++;

    if(contador === 0) {
        virarCarta(carta);
        cartaVirada0 = carta;
        contador++;
        console.log(carta);
    }
    else if(contador === 1) {
        virarCarta(carta);
        cartaVirada1 = carta;
        contador++;
        console.log(carta);
    }
    if(contador === 2) {

        const imagem0 = cartaVirada0.querySelector(".back-face img").getAttribute("src");
        const imagem1 = cartaVirada1.querySelector(".back-face img").getAttribute("src");

        if (imagem0 === imagem1)
            contadorVitoria++;
        else {
            setTimeout(virarCarta, 1000, cartaVirada0);
            setTimeout(virarCarta, 1000, cartaVirada1);
            console.log("teste3");
        }
        
        contador = 0;

        if(contadorVitoria === qtnd/2)
            setTimeout(alert, 1000, `Você ganhou em ${contadorJogadas} jogadas`);
    }
    console.log(contador);
}