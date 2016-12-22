import React, {Component} from 'react';

function getFilteredData(pizzaList, ev) {
    return pizzaList.filter(function (item) {
        return item.toLowerCase().includes(ev.target.value);
    });
}

function sortAndReverse() {
    const self=this;
    this.asc = !this.asc;
    return this.sort(function (l, r) {
        return l > r ? (self.asc ? 1 : -1) : l < r ? (self.asc ? -1 : 1) : 0;
    });
}

export class PizzaContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dirtyPizzaList: props.pizza,
            pizzaList: props.pizza
        }
    }

    filterPizza(ev) {
        this.state.pizzaList = this.state.dirtyPizzaList;
        const updatedFilteredList = getFilteredData(this.state.pizzaList, ev);
        this.setState({pizzaList: updatedFilteredList});
    }

    sortPizza() {
        this.state.pizzaList.sortAndReverse = sortAndReverse;
        this.setState({pizzaList: this.state.pizzaList.sortAndReverse()});
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            onKeyUp={this.filterPizza.bind(this)}
                        />
                    </div>
                    <div className="col-sm-4">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.sortPizza.bind(this)}>
                            sort
                        </button>
                    </div>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            this.state.pizzaList.map(function(item, index) {
                                return (<li className="list-group-item" key={index}>{item}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
