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


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Дз
// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния 
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

// class App extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		counter: this.props.counter
// 	  }
// 	}
	
// 	incCounter = () => {
// 	  if (this.state.counter < 50) {
// 		  this.setState(state => ({
// 		  counter: state.counter + 1
// 		}))
// 	  }
// 	}
	
// 	decCounter = () => {
// 	  if (this.state.counter > -50) {
// 		  this.setState(state => ({
// 		  counter: state.counter - 1
// 		}))
// 	  }
// 	}
	
// 	rndCounter = () => {
// 	  const max = 50,
// 			min = -50
// 	  this.setState({
// 		counter: +(Math.random() * (max - min) + min).toFixed(0)
// 	  })
// 	}
	
// 	resetCounter = () => {
// 	  this.setState ({
// 		counter: this.props.counter
// 	  })
// 	}
	
  
	
// 	render() {
// 	  const {counter} = this.state;
	  
// 	  return (
// 		<div class="app">
// 		  <div class="counter">{counter}</div>
// 		  <div class="controls">
// 			<button onClick={this.incCounter}>INC</button>
// 			<button onClick={this.decCounter}>DEC</button>
// 			<button onClick={this.rndCounter}>RND</button>
// 			<button onClick={this.resetCounter}>RESET</button>
// 		  </div>
// 		</div>
// 	  )
// 	}
//   }
  
//   ReactDOM.render(<App counter={0}/>, document.getElementById('app'));
