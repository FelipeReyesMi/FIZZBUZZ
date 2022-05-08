const ExplorerController = require("./../lib/controllers/ExplorerController");
const Reader = require("./../lib/utils/Reader");

describe("Pruebas de ExplorerController", () =>{

    test("Caso de prueba 1: Obtener el numero de los nombres de los explorers en el curso de java",() =>{
        const curso = ExplorerController.getExplorersByMission("java");
        const long = curso.length;
        expect(long).toBe(5);
    });
    test("Pruevas para Open Source", () => {
        const explorersInNode = ExplorerController.getExplorersStackByMission("elm");
        expect(explorersInNode.length).toBe(2);
    });
    
});