function virarCarta(carta) {
    carta.children[0].style.cssText =
    'transform: rotateY(-180deg);';
    carta.children[1].style.cssText =
    'transform: rotateY(0deg);';
}