

let draw = document.getElementById("draw");
draw.addEventListener("click", myFunction);

function myFunction() {
    //write your code here
    let entrada = document.getElementById("input2").value;
    let arrSalida = [];
    for (let i = 1; i <= entrada; i++) {
        let numero = Math.floor(Math.random() * 14 + 1);
        let numeroPinta = Math.floor(Math.random() * 4 + 1);
        let cambioPinta = document.getElementById("pinta");
        let cambioPinta2 = document.getElementById("pinta2");
        document.getElementById("numero").value = numero;
        if (numero == 11) {
            document.getElementById("numero").value = "J";
            arrSalida.push(numero);
            console.log(arrSalida);
        }
        if (numero == 12) {
            document.getElementById("numero").value = "Q";
            arrSalida.push(numero);
            console.log(arrSalida);
        }
        if (numero == 13) {
            document.getElementById("numero").value = "K";
            arrSalida.push(numero);
            console.log(arrSalida);
        }
        if (numero == 14) {
            document.getElementById("numero").value = "A";
            arrSalida.push(numero);
            console.log(arrSalida);
        } 
        if (numero !== 11 && numero !== 12 && numero !== 13 && numero !== 14) {
            arrSalida.push(numero);
            console.log(arrSalida);
        }
        cambioPinta.value = numeroPinta;
        if (cambioPinta.value == 1) {
            cambioPinta.classList.add("fa-solid", "fa-clover");
            cambioPinta2.classList.add("fa-solid", "fa-clover");
        }
        if (cambioPinta.value == 2) {
            cambioPinta.classList.add("fa-solid", "fa-diamond");
            cambioPinta2.classList.add("fa-solid", "fa-diamond");
            cambioPinta.style.color = "red";
            cambioPinta2.style.color = "red";
        }
        if (cambioPinta.value == 3) {
            cambioPinta.classList.add("fa-solid", "fa-heart");
            cambioPinta2.classList.add("fa-solid", "fa-heart");
            cambioPinta.style.color = "red";
            cambioPinta2.style.color = "red";
        }
        if (cambioPinta.value == 4) {
            cambioPinta.classList.add("fa-solid", "fa-spa");
            cambioPinta2.classList.add("fa-solid", "fa-spa");
        }
    }

}