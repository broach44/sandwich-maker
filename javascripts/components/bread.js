import utilities from '../helpers/utilities.js';

const bread = [
    {
    id: 'bread1',
    name: 'White',
    price: 50
    },
    {
    id: 'bread2',
    name: 'Wheat',
    price: 50
    },
    {
    id: 'bread3',
    name: 'Sourdough',
    price: 75
    },
    {
    id: 'bread4',
    name: 'Rye',
    price: 100
    },
    {
    id: 'bread5',
    name: 'Tortilla',
    price: 50
    },
    {
    id: 'bread6',
    name: 'No Bread',
    price: 0
    }
];

const getSelectedBreads = () => {
    const selectedBreads = [];
    const breadCheckboxes = document.getElementsByClassName('bread');
    for (let i = 0; i < breadCheckboxes.length; i++) {
        for (let j = 0; j < bread.length; j++) {
            if (breadCheckboxes[i].checked && breadCheckboxes[i].id === bread[j].id) {
                selectedBreads.push(bread[j]);
            };
        };
    };
    return selectedBreads;
};

const breadPrinter = () => {
    let domString = `<h2>Bread</h2>`;
    for (let i = 0; i < bread.length; i++) {
        domString +=`
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input bread" id=${bread[i].id}>
        <label class="form-check-label" for=${bread[i].id}>${bread[i].name}</label>
        </div>
        `
    }
   
    utilities.printToDom('bread-holder', domString);
};

export default { breadPrinter, getSelectedBreads };