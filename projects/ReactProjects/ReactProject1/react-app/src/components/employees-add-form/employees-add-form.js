import {Component} from 'react'

import './employees-add-form.css';

class EmpolyeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
        this.classNames = "form-control new-post-label";
    }

    

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value /* мы достучались до атрибута name и записываем то что мы ввели в поле value (name, salary), в state */
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 2 || !this.state.salary) {
            alert('Введите данные правильно');
            return;
        };
        this.props.onAdd(this.state.name, this.state.salary); /* по сути мы передаем то что ввели как аргументы и вызываем тут метод addItem через onAdd */
        this.setState({ /* это для того чтоб форма очищалась */
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text" /* теперь то что мы вводим в эти инпуты контролируется именно реактом это называется управляемый элемент. Это дает нам что интерфейс будет мгновенно реагировать га все изменения. Потому что state связан с ui */
                           className={this.classNames}
                           placeholder="Как его зовут?"
                           name="name"
                           value={name}
                           onChange={this.onValueChange}/>
                    <input type="number"
                           className={this.classNames}
                           placeholder="З/П в $?"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmpolyeesAddForm;