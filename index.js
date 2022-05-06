const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");
//Refactor de la lectura del archivo
console.log(ExplorerService.filterByMission(explorers, "node")); // Imprimimos la lista de todos los datos de los explorers que estan en el curso de "node"
console.log( "Hay " + ExplorerService.getAmountOfExplorersByMission(explorers, "node") + " explorers en el curso");//Imprimimos el numero de explorers que estan en el curso de "node"
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));//Imprimimos solo los nombres de los explorers que estan en el curso de "node"

const explorer1 = {name: "Explorer1", score: 1}; //Mandamos la validacion del explorer
console.log(FizzbuzzService.applyValidationInExplorer(explorer1) );// nos debe de impirme, {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3};
console.log(FizzbuzzService.applyValidationInExplorer(explorer3)); //nos debe de impirme,  {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5};
console.log(FizzbuzzService.applyValidationInExplorer(explorer5)); // nos debe de impirme, {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15};
console.log(FizzbuzzService.applyValidationInExplorer(explorer15)); // nos debe de impirme, {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}