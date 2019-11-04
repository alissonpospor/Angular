//Criando uma classe
class Spacecraft {

    constructor(public propulsor: string) { }

    jumpIntoHyperspace() {
        console.log(`Entrando no hiperespaço com ${this.propulsor}`)
    }

}

interface Containership {
    cargoContainers: number
}

export { Spacecraft, Containership }