let draw = document.getElementById("draw");
draw.addEventListener("click", myFunction);

const numerosTotales = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const pintasTotales = ["&spades", "&clubs", "&hearts", "&diams"];

function Carta(pinta, numero) {
    this.pinta = pinta;
    this.numero = numero;
};

let arrSalida = [];

function myFunction() {
    let entrada = document.getElementById("input2").value;
    let arrSalida = [];
    for (let i = 1; i <= entrada; i++) {
        let cartaDeEntrada = new Carta();
        cartaDeEntrada.numero = numerosTotales[Math.floor((Math.random() * 13))];
        cartaDeEntrada.pinta = pintasTotales[Math.floor((Math.random() * 4))];
        arrSalida.push(cartaDeEntrada);
    }
    console.log(arrSalida);
    return arrSalida;
}

const generadorCartas = (cartaDeEntrada) => {
    if (["&spades", "&clubs"].includes(cartaDeEntrada.pinta)) {
        return `<div class="card">
        <div class="pinta">${cartaDeEntrada.pinta} </div>
        <div class="numero">${cartaDeEntrada.numero} </div>
        <div class="pintaAbajo">${cartaDeEntrada.pinta} </div>
    </div>`
    }
}

const agregarCartas = (arrSalida) => {
    cartasCreadas = "";
    for (let i = 0; i < arrSalida.length; i++) {
        cartasCreadas = cartasCreadas + generadorCartas(arrSalida[i]);
        let contenedor = document.getElementById("#container");
        document.contenedor.appendChild(cartasCreadas);  
    }
}

