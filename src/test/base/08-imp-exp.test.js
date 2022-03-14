import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('pruebas en importacion de Heroes', () => {

    test('Debe de retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retornar un undefined si el heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('Debe de retornar un arreglo con los Heroes de DC', () => {

        const owner = 'DC';
        const DCheroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(DCheroes).toEqual(heroesData);
    });

    test('Debe de retornar un arreglo con los Heroes de Marvel', () => {

        const owner = 'Marvel';
        const MarvelHeroes = getHeroesByOwner(owner);

        expect(MarvelHeroes.length).toBe(2);
    });
});