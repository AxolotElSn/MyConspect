import React, { Component } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

import './App.css';

/* npm install styled-components  */
/* npm install react-bootstrap bootstrap */

const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	font-weight: 500;
	background-color: #946a4de4;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
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

const Wrapper = styled.div` 
	width: 600px;
	margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
	return (
		<div className={'mb-3 p-3 border border-' + props.color}>
			{/* {props.children} можно сказать что вместо этой конструкции появятся все элементы или компоненты переданные через пропсы */}
			{
				React.Children.map(props.children, child => {
					/* cloneElement() клонирует и возвращает новый rwact элемент 1ый аргумент это элемент который клонируем, 2ой это конфиг, то есть те пропсы которые добавляем к элементу. И еще есть 3мй, это children это дети которые будут передаваться внутрь элемента */
					return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
				})
			}
		</div>
	)
}

function App() {
  return (
    <Wrapper>
		

		<BootstrapTest
			left = { // вот этот пропс left передаетася в BootstrapTest (это удобно потому что можно разграничить что где должно отображаться)
				<DynamicGreating color={'primary'}>
					<h2>This wel was hard</h2>
					<h2>Hello world</h2>
					<h2>.__.</h2>
				</DynamicGreating>
			}
			right = {
				<DynamicGreating color={'primary'}>
					<h2>Right props .-.</h2>
				</DynamicGreating>
			}

		/>

		<WhoAmI name='Alex' surname="Orlov" link="https://github.com/AxolotElSn"/> 
		<WhoAmI name='ElectroLeha'  surname="Electroalexey" link="https://vk.com/electroalexey"/>
	</Wrapper>

		
	
  );
}

export default App;