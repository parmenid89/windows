// jshint -W101
const clearFields = (inputsSelector, tabsSelector, contentSelectorForTabs, activeClassTab, startedNumberOfTab, display = 'block') => {
    const select = document.querySelector('select'),
          inputs = document.querySelectorAll(inputsSelector),
          tabs = document.querySelectorAll(tabsSelector),
          content = document.querySelectorAll(contentSelectorForTabs);

    inputs.forEach(item => {
        if (item.getAttribute('type') === 'checkbox'){
            item.checked = false;
        } else {
            item.value = '';
        }
    });

    select.selectedIndex = 0;  

    tabs.forEach((tabElem) =>{
        tabElem.classList.remove(activeClassTab);
    });
    tabs[startedNumberOfTab].classList.add(activeClassTab);
    content[startedNumberOfTab].style.display = display;

};

export default clearFields;