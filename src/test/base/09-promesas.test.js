import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas',() => {

    test('Debe retornar un heroe async', (done) => {
       
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            })
    });

    test('Debe obtener un error si el heroe no existe', (done) => {
       
        const id = 6;

        getHeroeByIdAsync(id)
            .catch(err => {
                // expect(err).toBe('No se pudo encontrar el héroe' );
                done();
            })
    });

});