import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../../components/CounterApp';

describe('Pruebas en <CounterApp />', () => {
    
    let wrapper = shallow(<CounterApp />);
    //Antes de cada test debe inicializar el componente,
    //Para eso usamos el beforeEach, esta se realiza antes de
    //cada test, le podemos dar la instruccion que quremos
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })

    test('Debe de mostrar <CounterApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el valor por defecto', () => {

        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>);

        const counterText = Number(wrapper.find('h2').text().trim());
        //El .trim() quita los espacios de los lados

        expect(counterText).toBe(value);
    });

    test('Debe de incrementar con el boton de +1', () => {

        wrapper.find('button').at(0).simulate('click');
        //del componete encontrar un button en la posicion 0 y simular un evento click
        const counterText = Number(wrapper.find('h2').text().trim());

        expect(counterText).toBe(11);
    });

    test('Debe de decrementar con el boton de -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = Number(wrapper.find('h2').text().trim());

        expect(counterText).toBe(9);
    });

    test('Debe de colocar el valor por defecto con el botton reset', () => {

        const wrapper = shallow(<CounterApp value={ 105 }/>);

        wrapper.find('button').at(0).simulate('click');//Boton +1
        wrapper.find('button').at(1).simulate('click');//Boton reset

        const counterText = Number(wrapper.find('h2').text().trim());

        expect(counterText).toBe(105);
    });
});