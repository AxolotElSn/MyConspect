import { Component } from 'react';
import './App.css';

/* this напоминаю, что при его использовании мы обращаемся к каждому экземпляру по отдельности. То есть тут мы обращаемся с нашими пропсами и к экземпляру с Alex и к экземпляру с ElectroLeha */

class WhoAmI extends Component { 
	constructor(props) {
		super(props);
		this.state = { 
			years: 27,
			text: '+++',
			position: ''
		}
		// this.nextYear = this.nextYear.bind(this) /* nextYear() мы написали как обычный метод, а не стрелочную ф-ию. По этому контекст this потерялся. Чтоб этого избежать мы прописываем что метод мы жестко привязываем к конкретному экземпляру класса */ /* так делать если ф-ия не стрелочная вдруг */

	}

	// nextYear() {
	// 	this.setState(state => ({
    //   		years: state.years + 1
	// 	}))
	// }

	nextYear = () => {
		this.setState(state => ({
      		years: state.years + 1
		}))
	}

	commitInputChanges = (e, color) => {
		this.setState({
			position: e.target.value /* то что мы написали в форме */
		})
	}

	render() {
		const {name, surname, link} = this.props,
			  {position, years, text} = this.state;
			  
    	return (
      		<div>
				{/* <button onClick={() => this.nextYear()} >{text}</button> */} {/* можно еще вызвать через анонимную стрелочгую ф-иф если метод записан не через стрелку и кнотекст this теряется минус в том что когда будет заново создаваться компонент при его изменении, то и заново будет зоздаваться наш колбек*/} 
				<button onClick={this.nextYear} >{text}</button>
        		<h1>My name is {name}, surname - {surname},
					age - {years},
					position - {position}</h1>
        		<a href={link}>My profile</a>
            <form>
              <span>Введите должность</span>
              <input type="text" onChange={(e) => this.commitInputChanges(e, 'someColor')} /> {/* так можно вызывать метод если нам надо передать какие-нибудь аргументы */}
            </form>
      		</div>
    	)
  	}
}

function App() {
  return (
    <div className="App">
		<WhoAmI name='Alex' surname="Orlov" link="https://github.com/AxolotElSn"/> 
		<WhoAmI name='ElectroLeha'  surname="Electroalexey" link="https://vk.com/electroalexey"/>
		
	</div>
  );
}

export default App;