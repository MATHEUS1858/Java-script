let freioPressionado = true;
let temperatura = 380;

const condicaoIdeal = freioPressionado && temperatura <= 400 && temperatura >= 50
const usoIntenso = freioPressionado && temperatura >= 300
const nivelPerigoso = freioPressionado && temperatura >= 400

//Alertas

if (freioPressionado && condicaoIdeal) {
    console.log("Freio em condição ideal")
} else if (freioPressionado && usoIntenso || nivelPerigoso) {
    console.log("Luz de emergência acesa")
} else if (freioPressionado && temperatura <= 0) {
    console.log("Luz de emergência acesa")
} else if (freioPressionado != true) {
    console.log("Inativo")
}
