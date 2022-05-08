
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

    static filterByStacks(explorers, mission){//Creacion de un nuevo metodo para realizar el filtro para Stacks
        const explorersByStack = explorers.filter((explorer) => explorer.stacks == mission);//Hacemos el filtro para sacar los datos que 
        //hay en Stacks 
        return explorersByStack;//Regresamos los valores del filtro
    }

    static getExplorersUsernamesByStacks(explorers, mission){//Agregamos un nuevo metodo, el cual tomara dos parametros que se le mande
        const explorersByMission = ExplorerService.filterByStacks(explorers, mission);//llamamos al metodo filterByStacks para aguardar
        //los resultados en la constante de explorersByMission
        const explorersUsernames = explorersByMission.map((explorer) => explorer.githubUsername);// Hacemos el mapeo de los datos de 
        //explorersByMission para obtener solo los username de los explorers
        return explorersUsernames; //Regresamos los valores de explorersUsernames
    }

}
module.exports = ExplorerService;