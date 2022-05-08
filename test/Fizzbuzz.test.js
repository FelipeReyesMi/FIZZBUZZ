const ExplorerService = require("../lib/services/ExplorerService");
const FizzbuzzService = require("../lib/services/FizzbuzzService");
const Reader = require("./../lib/utils/Reader");
const explorers =  Reader.readJsonFile("explorers.json");

describe("Refactor de la lectura del archivo", () =>{

    test("Caso de prueba 1: Cuantos explorers existen",() =>{
        
        const nombres = explorers.filter((explorer) => explorer.name);
        const nombre = nombres.map((explorer) => explorer.name);
        const long = nombre.length;
        expect(long).toBe(15);
    });

    test("Caso de prueba 2: Obtener el numero de los nombres de los explorers en el curso de java",() =>{
        const curso = ExplorerService.getExplorersUsernamesByMission(explorers, "java");
        const long = curso.length;
        expect(long).toBe(5);
    });

    test("Caso de prueba 3: FIZZBUZZ",() =>{
        const alumno = {name: "Francisco", score: 30};
        const curso = FizzbuzzService.applyValidationInExplorer(alumno);
        const res = curso.trick;
        expect(res).toBe("FIZZBUZZ");
    });

    test("Caso de prueba 4: FIZZBUZZ con parametro number",() =>{
        const alumno = 15;
        const curso = FizzbuzzService.applyValidationInNumber(alumno);
        const res = curso;
        expect(res).toBe("FIZZBUZZ");
    });
});

