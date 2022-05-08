const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
class ExplorerController{
    static getExplorersByMission(mission){
        const explorer = ExplorerService.filterByMission(explorers, mission);
        return explorer;
    }
    static getExplorersUsernamesByMission(mission){
        const explorer = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorer;
    }
    static getExplorersAmonutByMission(mission){
        const explorer = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return "Hay " + explorer+ " explorers en el curso";
    }
    static getFizzbuzz(number){
        const explorer = FizzbuzzService.applyValidationInNumber(number);
        return explorer;
    }
    
    static getExplorersStackByMission(mission){//Creamos el medoto que toma un parametro, el cual sera llamado a server
        const explorers = Reader.readJsonFile("explorers.json");//Nos ayuda a leer los datos que hay en nuestra BD  
        return ExplorerService.getExplorersUsernamesByStacks(explorers, mission);//Mandamos a llamar de ExplorerServices el metodo para 
        //poder extraer el proceso de filtro
    }
}

module.exports = ExplorerController;