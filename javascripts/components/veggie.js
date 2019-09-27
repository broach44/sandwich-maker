import utilities from '../helpers/utilities.js';

const veggie = [
    {
    id: 'veggie1',
    name: 'Lettuce',
    price: 50
    },
    {
    id: 'veggie2',
    name: 'Tomato',
    price: 100
    },
    {
    id: 'veggie3',
    name: 'Onion',
    price: 25
    },
    {
    id: 'veggie4',
    name: 'Pickles',
    price: 60
    },
    {
    id: 'veggie5',
    name: 'No Veggie',
    price: 0
    }
];

const getSelectedVeggies = () => {
    const selectedVeggies = [];
    const veggieCheckboxes = document.getElementsByClassName('veggie');
    for (let i = 0; i < veggieCheckboxes.length; i++) {
        for (let j = 0; j < veggie.length; j++) {
            if (veggieCheckboxes[i].checked && veggieCheckboxes[i].id === veggie[j].id) {
                selectedVeggies.push(veggie[j]);
            };
        };
    };
    return selectedVeggies;
};

const veggiePrinter = () => {
    let domString = `<h2>Veggie</h2>`;
    for (let i = 0; i < veggie.length; i++) {
        domString +=`
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input veggie" id=${veggie[i].id}>
        <label class="form-check-label" for=${veggie[i].id}>${veggie[i].name}</label>
        </div>
        `
    }
    utilities.printToDom('veggie-holder', domString);
};

export default { veggiePrinter, getSelectedVeggies };