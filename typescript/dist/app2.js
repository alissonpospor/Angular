"use strict";
exports.__esModule = true;
/* Definições de classe no typeScript */
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
//chamando a classe 
var ship = new base_ships_1.Spacecraft('hyperdriver');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoHyperspace(); /*  */
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Falcon \u00E9 boa para o trabalho? " + (goodForTheJob(falcon) ? 'Sim' : 'Não'));
