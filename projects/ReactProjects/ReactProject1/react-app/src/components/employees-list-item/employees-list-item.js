import './employees-list-item.css';

const EmployeesListItem = ({name, salary, increase}) => {

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) { /* increase это класс который мы написали в css. Он выделяет цветом если есть премия */
        classNames += ' increase' /* важно в начале поставить пробел */
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                    className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i> {/* иконка печеньки (премия типа) */}
                </button>

                <button type="button"
                    className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i> {/* иконка мусорки */}
                </button>
                <i className="fas fa-star"></i> {/* иконка звездочки */}
            </div>
        </li>
    );
}

export default EmployeesListItem;