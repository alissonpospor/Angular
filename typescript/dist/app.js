/* usos de variaveis */
var mensagem = "Ajuda eu!";
console.log(mensagem);
var episodio = 4;
console.log("Este é o episodio: " + episodio);
episodio = episodio + 1;
console.log("Este é o episodio: " + episodio);
var androirFavorito; /* a variavel é do tipo 'any' por padrão */
androirFavorito = 'R2-D2';
console.log("Meu android favorito: " + androirFavorito);
/* Functions */
var sufuciente = function (parsecs) {
    return parsecs < 12;
};
var distancia = 11;
console.log("A " + distancia + " \u00E9 o suficiente para bater o record? " + (sufuciente(distancia) ? 'Sim' : 'Não')); /* Template String */
//Arrow function
var call = function (name) { return console.log("Na escuta, " + name + "?"); };
call("R2");
// Parametros padros em tpeScript
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
/* Classes e Interfaces */
