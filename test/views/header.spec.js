import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {Header} from '../../src/views/header';

describe('<Header /> Component', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<Header/>);
    });

    it('should have panel heading', () => {
        expect(renderedElement.props().className).to.equal('panel-heading');
    });

    it('should have header text', () => {
        const headerText = ' Pizza Corner';
        expect(renderedElement.props().children.props.children).to.equal(headerText)
    });
});
