import { Component, Fragment } from 'react';
import './App.css';

class WhoAmI extends Component { 
	constructor(props) {
		super(props);
		this.state = { 
			years: 27,
			text: '+++',
			position: ''
		}

	}

	nextYear = () => {
		this.setState(state => ({
      		years: state.years + 1
		}))
	}

	commitInputChanges = (e, color) => {
		this.setState({
			position: e.target.value 
		})
	}

	render() {
		const {name, surname, link} = this.props,
			  {position, years, text} = this.state;
			  
    	return (
			// <>   </> /* еще так можно записать фрагмент. ПРи такой записи, фрагмент не нужно импортировать */
      		<Fragment> {/* фрагменты позволяют избежать требования jsx препроцессора что все должно быть в обертке. То есть фрагмент позволяет не оборачивать в div */}
				<button onClick={this.nextYear} >{text}</button>
        		<h1>My name is {name}, surname - {surname},
					age - {years},
					position - {position}</h1>
        		<a href={link}>My profile</a>
            	<form>
              		<span>Введите должность</span>
              		<input type="text" onChange={(e) => this.commitInputChanges(e, 'someColor')} /> 
            	</form>
      		</Fragment>
    	)
  	}
}

function App() {
  return (
    <div className="App"> {/* тут тоже вместо дива можно использовать фрагменты, если див остался выше */}
		<WhoAmI name='Alex' surname="Orlov" link="https://github.com/AxolotElSn"/> 
		<WhoAmI name='ElectroLeha' surname="Electroalexey" link="https://vk.com/electroalexey"/>
		
	</div>
  );
}

export default App;