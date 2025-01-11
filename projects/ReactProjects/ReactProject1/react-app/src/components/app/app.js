import AppInfo from '../app-info/app-info';
import FindPanel from '../find-panel/find-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmpolyeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [ /* это мы имитируем что эти данные с сервера пришли */
        {name: 'Alex O', salary: 5250, increase: false, id: 1},
        {name: 'Ksenya S', salary: 4800, increase: true, id: 2},
        {name: 'John D', salary: 3000, increase: false, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="find-panel">
                <FindPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/> {/* Передаем в компонент масссив с данными */}
            <EmpolyeesAddForm/>
        </div>
    );
}

export default App;