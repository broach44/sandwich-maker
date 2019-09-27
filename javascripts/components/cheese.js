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
};

export default { cheesePrinter, getSelectedCheeses };