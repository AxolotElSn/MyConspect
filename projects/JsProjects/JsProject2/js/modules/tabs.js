function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    // tabs

    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) { // i = 0 это на случай если фунуция будет вызываться без аргумента
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => { // повторяю для ясности. Мы вешаем обработчик на родителя, а проверяем уже сам элемент. Таким образом мы работаем сразу со всеми элементами в родителе (делегирование)
        const target = event.target; // event.target -свойство объекта event - это элемент с которым мы взаимодействуем

        if(target && target.classList.contains(tabsSelector.slice(1))) { // по сути это гарантия что мы клкааем именно на элемент. слайс нужен чтоб убрать точку
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;