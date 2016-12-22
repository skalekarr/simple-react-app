import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {PizzaContainer} from '../../src/views/pizza-container'

describe('<PizzaContainer /> Component', () => {
    let renderedElement, testProps;

    beforeEach(() => {
        testProps = {
            pizza: ['veg-pizza', 'non-veg-pizza']
        };

        renderedElement = shallow(<PizzaContainer {...testProps}/>);
    });

    it('should have pizza list', function () {
        expect(renderedElement.state('pizzaList')).to.equal(testProps.pizza);
    });

    describe('form controls', function () {
        let formElement;

        beforeEach(function () {
            formElement = renderedElement.props().children[0].props.children;
        });

        describe('filter items', function () {
            let filterElement;

            beforeEach(function () {
                filterElement = formElement[0].props.children;
            });

            it('should have input textbox', function () {
                expect(filterElement.type).to.equal('input');
            });

            it('should filter items', function () {
                const filteredItem = ['non-veg-pizza'];
                filterElement.props.onKeyUp({target: {value: 'non'}});

                expect(renderedElement.state('pizzaList')).to.equal(filteredItem);
            });
        });

        describe('sort items', function () {
            let sortElement;

            beforeEach(function () {
                sortElement = formElement[1].props.children;
            });

            it('should have sort button', function () {
                expect(sortElement.type).to.equal('button');
            });

            it('should sort items', function () {
                const sortedItemList = ['non-veg-pizza', 'veg-pizza'];
                sortElement.props.onClick();

                expect(renderedElement.state('pizzaList')).to.equal(sortedItemList);
            });
        });
    });
});
