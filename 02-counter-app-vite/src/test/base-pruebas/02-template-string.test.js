import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en archivo 02-template-string', () => {

    test('getSaludo debe retornar "Hola John', () => {
        
        const name = 'John';
        const message = getSaludo( name );

        expect( message ).toBe( `Hola ${ name }` );
    })

})