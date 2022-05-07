const ExplorerController = require('./../lib/controllers/ExplorerController')
const Reader = require("./../lib/utils/Reader");
const alumnos =  Reader.readJsonFile("explorers.json");

describe("Pruebas de ExplorerController", () =>{

    test("Caso de prueba 1: Obtener el numero de los nombres de los explorers en el curso de java",() =>{
        const curso = ExplorerController.getExplorersByMission("java");
        const long = curso.length;
        expect(long).toBe(5);
    });

    
});