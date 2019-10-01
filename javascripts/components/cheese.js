import utilities from '../helpers/utilities.js';

const cheese = [
    {
    id: 'cheese1',
    name: 'Cheddar',
    price: 100
    },
    {
    id: 'cheese2',
    name: 'Swiss',
    price: 100
    },
    {
    id: 'cheese3',
    name: 'Provolone',
    price: 150
    },
    {
    id: 'cheese4',
    name: 'Pepper Jack',
    price: 150
    },
    {
    id: 'cheese5',
    name: 'No Cheese',
    price: 0
    }
];

const getSelectedCheeses = () => {
    const selectedCheeses = [];
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
    for (let i = 0; i < cheeseCheckboxes.length; i++) {
        for (let j = 0; j < cheese.length; j++) {
            if (cheeseCheckboxes[i].checked && cheeseCheckboxes[i].id === cheese[j].id) {
                selectedCheeses.push(cheese[j]);
            };
        };
    };
    return selectedCheeses;
};

const uncheckItemsCheese = () => {
    const allItems = document.getElementsByClassName('cheese'); //select collection of items
    let allItemsLength = allItems.length;  //length of total group
    const lastItem = document.getElementById('cheese' + allItemsLength);
    allItemsLength -= 1;  //reduces length to not include last item
    if (lastItem.checked) {
        for (let i = 0; i < allItemsLength; i++) {  //loop through 
            allItems[i].checked = false;
        };
    };
};

const uncheckNoCheese = () => {
    const lastItem = document.getElementById('cheese5')
    if (lastItem.checked) {
        lastItem.checked = false;
    };
};

const addCheckListenerCheese = () => {
    document.getElementById('cheese5').addEventListener('click', uncheckItemsCheese);
};

const addOtherCheckListeners = () => {
    const allItems = document.getElementsByClassName('cheese'); //select collection of items
    let allItemsLength = allItems.length;
    allItemsLength -= 1;
    for (let i = 0; i < allItemsLength; i++) {
        const cheeseSelection = document.getElementsByClassName('cheese');
        cheeseSelection[i].addEventListener('click', uncheckNoCheese);
    };
};

const cheesePrinter = () => {
    let domString = `<h2>Cheese</h2>`;
    for (let i = 0; i < cheese.length; i++) {
        domString +=`
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input cheese" id=${cheese[i].id}>
        <label class="form-check-label" for=${cheese[i].id}>${cheese[i].name}</label>
        </div>
        `
    }
    utilities.printToDom('cheese-holder', domString);
    addCheckListenerCheese();
    addOtherCheckListeners();
};

export default { cheesePrinter, getSelectedCheeses };