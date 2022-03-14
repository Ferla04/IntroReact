import React from 'react';
// import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import PrimeraApp from '../../components/PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {

    // test('debe de mostrar el mensaje "Hola, soy Fer"', () => {

        // const saludo = 'Hola, soy Fer';
        // const { getByText } = render( <PrimeraApp saludo={ saludo }/> );
        // expect( getByText(saludo) ).toBeInTheDocument();
    
    // });

    test('Debe mostrar <PrimeraApp/> correctamente', () => {
        
        const saludo = 'Hola, soy Fer';
        const wrapper = shallow(<PrimeraApp saludo={ saludo }/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola, soy Fer';
        const subtitulo = 'soy un subtitulo!'

        const wrapper = shallow(
            <PrimeraApp saludo={ saludo } subtitulo={ subtitulo }/>
        );

        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo);
        //el .find() es parecido al document.querySelector();

        expect(textoParrafo).toBe(subtitulo);
    });

});