import './app-filter.css';

const AppFilter = (props) => {
    const btnData = [ /* мы все кнопкт положили в массив для удобства */
        {name: 'all', label: 'Все сотрудники'},
        {name: 'star', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ];

    const buttons = btnData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light' /* если кнопка активная то выделяем, иначе не выделяем */

        return (
            <button
                className={`btn ${clazz}`} /* так мы добиваемся что активная кнопка ваделяется */
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;