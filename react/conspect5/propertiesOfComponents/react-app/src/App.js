import logo from './logo.svg';
import './App.css';

function WhoAmI ({name, surname, link}) { /* пропсы и так всегда есть, так что их указвывть как props необязательно */
	return (
		<div>
			<h1>My name is {name.firstname}, surname - {surname}</h1>
			<a href={link}>My profile</a>
		</div>
	);
}

function App() {
  return (
    <div className="App">
		<WhoAmI name={{firstname: 'Alex'}} surname="Orlov" link="https://github.com/AxolotElSn"/> {/* Эти данные мы передаем как свойства объекта props в компонент WhoAmI */}
		<WhoAmI name={{firstname: 'ElectroLeha'}}  surname="Electroalexey" link="https://vk.com/electroalexey"/>
		
	</div>
  );
}

export default App;
