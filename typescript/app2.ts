/* Definições de classe no typeScript */
import {Spacecraft, Containership} from './base-ships'
import {MilleniumFalcon} from './starfighters'

//chamando a classe 
let ship = new Spacecraft('hyperdriver')
ship.jumpIntoHyperspace()

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()/*  */

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;
console.log(`Falcon é boa para o trabalho? ${goodForTheJob(falcon) ? 'Sim' : 'Não'}`)