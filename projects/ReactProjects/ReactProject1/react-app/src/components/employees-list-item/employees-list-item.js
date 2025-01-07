import './employees-list-item.css';

const EmployeesListItem = () => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">ElectroLeha</span>
            <input type="text" className="list-group-item-input" defaultValue="1000$"/>
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