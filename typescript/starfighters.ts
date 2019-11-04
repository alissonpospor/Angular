import {Spacecraft, Containership} from './base-ships'

//mostrando o uso de Herança e Interfaces(implements)
export class MilleniumFalcon extends Spacecraft implements Containership {
    cargoContainers: number

    constructor() {
        super('hyperdriver')
        this.cargoContainers = 3
    }

    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        } else {
            console.log('Falhou ao entrar no hiperespaço');
        }
    }
}