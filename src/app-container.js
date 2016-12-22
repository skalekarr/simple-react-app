import React, {Component} from 'react';

import {Header} from './views/header';
import {PizzaContainer} from './views/pizza-container';
import {Footer} from './views/footer';

import {fetch} from './services/fetch';

function fetchPizzaList() {
    return fetch()
        .then(function (response) {
            self.setState({pizzaList: response.pizzas, isLoading: !(response.pizzas.length)});
        });
}

export class AppContainer extends Component {
    constructor() {
        super();
        this.state = {
            pizzaList: [],
            isLoading: true
        };
    }

    componentDidMount() {
        self = this;
        global.setTimeout(
            function(){
                fetchPizzaList();
            },
            2000
        );
    }

    render() {
        const isLoading = this.state.isLoading;
        const containerHeight = {height: '600px'};
        const bodyHeight = {height: '500px'};

        return (
          <div className="container panel panel-default" style={containerHeight}>
              <Header/>
              <div className="panel-body" style={bodyHeight}>
                  {
                      isLoading ?
                          <h3>Loading...</h3> :
                          <PizzaContainer pizza={this.state.pizzaList}/>
                  }
              </div>
              <Footer/>
          </div>
        );
    }
}
