describe('Pruebas en <DemoComponent />', () => { 
    test('Esta prueba no debe de fallar', () => {
        //1. Inicialización
        const originalMessage = 'Hola mundo';

        //2. Estimulo
        const expectedMessage = originalMessage.trim();

        //3. Observar el comportamiento... Esperado
        expect( originalMessage ).toBe( expectedMessage );
    });
})