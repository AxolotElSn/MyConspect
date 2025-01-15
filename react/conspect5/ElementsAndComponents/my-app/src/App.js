// import React from 'react';
import {Component} from 'react';
import './App.css';

const Header = () => { /* по сути это уже является компонентом и мы его можем использовать где угодно */
  return <h2>Hello Word with react ._.</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledFiled = {
// 	width: '300px',
//   };
//   return <input 
//   		placeholder={holder} 
// 		type="text" 
// 		style={styledFiled}/>
// }

// ниже тот же компонент только с использованием класса
class Field extends Component { /* React.Component - это компонент в реакте который нам нужен. Я так понимаю что там просто логика самой работы с классами. То есть мы наследуем поведение из базового компонента в реакте */
	render() { // главный метод который должен быть в классе
		const holder = 'Enter here';
		const styledFiled = {
		  width: '300px',
		};

		return <input 
				placeholder={holder} 
				type="text" 
				style={styledFiled}/>
	}
}

function Btn() {

  // const res = () => {
  //   return 'Log in .-.';
  // }
  // const p = <p>Log in XD</p>

  const text = 'Log in .-.';
  const logged = true;

  return <button>{logged ? 'Enter' : text}</button> /* если пользователь залогинин, то enter, иначе text */ /* мы не можем писапть if else внутри фигурных скобок в выражении. Мы должнв пользоваться именно тернарным оператором */
  // return <button>{res()}</button>
  // return <button>{p}</button>
  
}


function App() {
  return (
	<div className="App">
	  {/* <Header></Header> */}
	  <Header/> {/* так пишем если просто надо закрыть компонент без внутренностей */}
	  <Field/>
	  <Btn/>
	</div>
  );
}

export {Header};
export default App;
