import { Component } from 'react';
import styled from 'styled-components';

import './App.css';

/* npm install styled-components  */

const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	font-weight: 500;
	background-color: #946a4de4;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
	a {
		font-weight: 500;
		color: ${props => props.active ? 'green' : 'red'}
	}
	input {
		display:block;
		margin-top:10px;
	}
`;

const Header = styled.h2`
	font-size 22px;
`;

/* так же можно импортировать  */
export const Button = styled.button`  
	display: block;
	background-color: #7a451fbe;
`;

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
      		<EmpItem active>
				<Button onClick={this.nextYear}>{text}</Button>
        		<Header>My name is {name}, surname - {surname},
					age - {years},
					position - {position}</Header>
        		<a href={link}>My profile</a>
            <form>
              <span>Введите должность</span>
              <input type="text" onChange={(e) => this.commitInputChanges(e, 'someColor')} /> 
            </form>
      		</EmpItem>
			
    	)
  	}
}

/* так накидываем стили при помощи styled components */
const Wrapper = styled.div` 
	width: 600px;
	margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
		<WhoAmI name='Alex' surname="Orlov" link="https://github.com/AxolotElSn"/> 
		<WhoAmI name='ElectroLeha'  surname="Electroalexey" link="https://vk.com/electroalexey"/>
	</Wrapper>

		
	
  );
}

export default App;