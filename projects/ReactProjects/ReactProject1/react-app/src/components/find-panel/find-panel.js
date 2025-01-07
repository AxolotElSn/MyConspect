import './find-panel.css';

const FindPanel = () => {
    return (
        <input
            type="text"
            className="form-control search-input" // классы из бутстрапа
            placeholder="Найти сотрудника"
            />
    );
}

export default FindPanel;