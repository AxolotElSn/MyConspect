import {Component} from 'react'

import './employees-list-item.css'

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({ /* обернули increase в скобки чтоб не обращаться к state. То есть мы деструктуризировали state */
            increase: !increase
        }))
    }

    getStar = () => {
        this.setState(({star}) => ({
            star: !star
        }))
    }

    render() {
        const {name, salary} = this.props;
        const {increase, star} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";

        if (increase) { /* increase это класс который мы написали в css. Он выделяет цветом если есть премия */
            classNames += ' increase' /* важно в начале поставить пробел */
        }
        if (star) {
            classNames += ' like'
        }
    
        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                      onClick={this.getStar}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i> {/* иконка печеньки (премия типа) */}
                    </button>
    
                    <button type="button"
                        className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i> {/* иконка мусорки */}
                    </button>
                    <i className="fas fa-star"></i> {/* иконка звездочки */}
                </div>
            </li>
        );
    }    
}


export default EmployeesListItem;