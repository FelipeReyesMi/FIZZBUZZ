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
}

module.exports = ExplorerController;