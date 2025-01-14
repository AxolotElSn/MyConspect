import './employees-list-item.css'

const EmployeesListItem = (props) => {
    const {name, salary, onDelete, increase, star, onToggleProp} = props;

    let classNames = "list-group-item d-flex justify-content-between";

    if (increase) { /* increase это класс который мы написали в css. Он выделяет цветом если есть премия */
        classNames += ' increase' /* важно в начале поставить пробел */
    }
    if (star) {
        classNames += ' like'
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label"
                  onClick={onToggleProp} data-toggle="star">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i> {/* иконка печеньки (премия типа) */}
                </button>

                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}> {/* и тут уже используем ф-ию на кнопке переданную как пропс */}
                    <i className="fas fa-trash"></i> {/* иконка мусорки */}
                </button>
                <i className="fas fa-star"></i> {/* иконка звездочки */}
            </div>
        </li>
    );   
}


export default EmployeesListItem;