
class ExplorerService {

    static filterByMission(explorers, caso){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == caso);
        return explorersInNode;
    }

    static getAmountOfExplorersByMission(explorers, caso){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == caso);
        return explorersInNodeToGetUsernames.length;
    }

    static getExplorersUsernamesByMission(explorers, caso){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == caso);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }

}
module.exports = ExplorerService;