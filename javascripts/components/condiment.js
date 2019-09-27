import utilities from '../helpers/utilities.js';

const condiment = [
    {
    id: 'condiment1',
    name: 'Mayo',
    price: 50
    },
    {
    id: 'condiment2',
    name: 'Mustard',
    price: 25
    },
    {
    id: 'condiment3',
    name: 'Oil & Vinegar',
    price: 100
    },
    {
    id: 'condiment4',
    name: 'Ranch',
    price: 75
    },
    {
    id: 'condiment5',
    name: 'No Condiments',
    price: 0
    }
];

const getSelectedCondiments = () => {
    const selectedCondiments = [];
    const condimentCheckboxes = document.getElementsByClassName('condiment');
    for (let i = 0; i < condimentCheckboxes.length; i++) {
        for (let j = 0; j < condiment.length; j++) {
            if (condimentCheckboxes[i].checked && condimentCheckboxes[i].id === condiment[j].id) {
                selectedCondiments.push(condiment[j]);
            };
        };
    };
    return selectedCondiments;
};

const condimentPrinter = () => {
    let domString = `<h2>Condiment</h2>`;
    for (let i = 0; i < condiment.length; i++) {
        domString +=`
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input condiment" id=${condiment[i].id}>
        <label class="form-check-label" for=${condiment[i].id}>${condiment[i].name}</label>
        </div>
        `
    }
    utilities.printToDom('condiment-holder', domString);
};

export default { condimentPrinter, getSelectedCondiments };