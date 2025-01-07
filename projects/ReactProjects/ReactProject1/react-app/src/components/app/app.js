import AppInfo from '../app-info/app-info';
import FindPanel from '../find-panel/find-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmpolyeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    return (
        <div className="app">
            <AppInfo/>

            <div className="find-panel">
                <FindPanel/>
                <AppFilter/>
            </div>

            <EmployeesList/>
            <EmpolyeesAddForm/>
        </div>
    );
}

export default App;