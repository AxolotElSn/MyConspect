import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete}) => { /* onDelete тут прописан как аргумент чтоб мы могли его использовать (получаем из app) */

    const elements = data.map(item => { /* Перебираем полученный массив и формируем компонент */
        const {id, ...itemProps} = item /* То есть мы тут id отдельно выкидываем из объекта, а остальные свойства объекта мы объединяем в одно свойство itemProps */
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem
            key={id}
            {...itemProps} /* ... - разворачивает объект */ /* key это для того чтоб у каждого элемента был свой id. Для того чтоб если был добавлен новый элемент, или изменен текущий, изменялся только этот элемент, а не переобрабатывались все заново. Ну это вопрос оптимизации короче */
            onDelete={() => onDelete(id)}/> /* тут мы его также как пропс передаем уже в дочерний компонент EmployeesListItem для использования в кнопке*/
            
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;