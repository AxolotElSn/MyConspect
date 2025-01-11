import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => { /* Перебираем полученный массив и формируем компонент */
        const {id, ...itemProps} = item /* То есть мы тут id отдельно выкидываем из объекта, а остальные свойства объекта мы объединяем в одно свойство itemProps */
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem key={id} {...itemProps}/> /* ... - разворачивает объект */ /* key это для того чтоб у каждого элемента был свой id. Для того чтоб если был добавлен новый элемент, или изменен текущий, изменялся только этот элемент, а не переобрабатывались все заново. Ну это вопрос оптимизации короче */
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;