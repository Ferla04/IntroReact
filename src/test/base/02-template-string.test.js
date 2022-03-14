import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string';

describe('Puebas en 02-template-string.js', () => {

    test('getSaludo retornar Hola Fernando Herrera', () => { 
        const nombre = 'Fernando Herrera';
        
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    });

    test('getSaludo retornar Hola Carlos, si no hay un parametro', () => { 

        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    });
});