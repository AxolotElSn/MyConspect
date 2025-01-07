import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => { /* Перебираем полученный массив и формируем компонент */
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem {...item}/> /* ... - разворачивает объект */
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;