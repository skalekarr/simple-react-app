import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import {AppContainer} from '../src/app-container';

import {Header} from '../src/views/header';
import {PizzaContainer} from '../src/views/pizza-container';
import {Footer} from '../src/views/footer';

describe('<AppContainer /> Component', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<AppContainer/>);
    });

    it('should have panel', () => {
        expect(renderedElement.props().className).to.equal('container panel panel-default');
    });

    describe('Child ELements', function () {
        it('should have child elements', function () {
            expect(renderedElement.props().children[0].type).to.equal(Header);
            expect(renderedElement.props().children[1].type).to.equal('div');
            expect(renderedElement.props().children[2].type).to.equal(Footer);
        });

        describe('when app is loading', function () {
            it('should show "Loading..."', function () {
                expect(renderedElement.props().children[1].props.children.props.children).to.equal('Loading...');
            });
        });

        describe('when app is loaded', function () {
            it('should show pizza container', function () {
                renderedElement.setState({isLoading: false});
                expect(renderedElement.props().children[1].props.children.type).to.equal(PizzaContainer);
            });

            it('should set pizza list', function () {
                const pizzaList = ['veg-pizza', 'non-veg-pizza'];
                renderedElement.setState({isLoading: false});
                renderedElement.setState({pizzaList: pizzaList});
                expect(renderedElement.props().children[1].props.children.props.pizza).to.equal(pizzaList);
            });
        });
    });
});
