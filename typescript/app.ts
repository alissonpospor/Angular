/* usos de variaveis */

let mensagem: string = "Ajuda eu!"
console.log(mensagem)

let episodio: number = 4
console.log("Este é o episodio: " + episodio)
episodio = episodio + 1
console.log("Este é o episodio: " + episodio)

let androirFavorito /* a variavel é do tipo 'any' por padrão */
androirFavorito = 'R2-D2' 
console.log("Meu android favorito: " + androirFavorito)

/* Functions */
let sufuciente = function (parsecs: number): boolean {
    return parsecs < 12;
}

let distancia = 11;
console.log(`A ${distancia} é o suficiente para bater o record? ${sufuciente(distancia) ? 'Sim' : 'Não'}`);/* Template String */

//Arrow function
let call = (name: string) => console.log(`Na escuta, ${name}?`)
call("R2")

// Parametros padros em tpeScript
function inc(speed: number, inc: number = 1): number {
    return speed + inc
}
console.log(`inc (5, 1) = ${inc(5,1)}`);
console.log(`inc (5) = ${inc(5)}`);

/* Classes e Interfaces */
