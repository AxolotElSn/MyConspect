import { Component } from 'react';
import './App.css';

class WhoAmI extends Component { /* Тут уже классовый компонент. От react компонента к нам и приходит возможность работать с пропсами. Теперь внутри каждого потомка нашего класса (экземпляра) будет свойство this.props c объектом в котором все что мы туда передали*/
	constructor(props) {
		super(props); /* super делает пропс доступным для всего компонента через this.props */
		this.state = { /* state это такой объект который описывает различные динамические вещи которые будут в компоненте */
			years: 27, /* то есть это можно менять динамически */
			text: '+++'
		}
	}

	nextYear = () => {
		// this.state.years++; /* мы не можем напрямую менять состояние */

		// this.setState({ /* с помощью этой команды меняем состояние. setState операция асинхронная. По этому если нам нужна точность, то мы должны передавать ф-ию, а если важен только конечный результат, то можно ограничиться объектом.*/
		// 	years: this.state.years + 1
		// })

		this.setState(state => ({ /* код в скобках это все равно что в return. Если текущее состояние зависит от предыдущего, то мы в setState передаем ф-ию чтоб данные не сбились */
			years: state.years + 1
		}))
	}

	render() {
		const {name, surname, link} = this.props;
    	return (
      		<div>
				<button onClick={this.nextYear} >{this.state.text}</button> {/* nextYear метод, onClick событие */}
        		<h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        		<a href={link}>My profile</a>
      		</div>
    	)
  	}
}

function App() {
  return (
    <div className="App">
		<WhoAmI name='Alex' surname="Orlov" link="https://github.com/AxolotElSn"/> {/* Эти данные мы передаем как свойства объекта props в компонент WhoAmI */}
		<WhoAmI name='ElectroLeha'  surname="Electroalexey" link="https://vk.com/electroalexey"/>
		
	</div>
  );
}

export default App;
