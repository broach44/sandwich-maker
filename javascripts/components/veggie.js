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

const uncheckItemsVeggie = () => {
    const allItems = document.getElementsByClassName('veggie'); //select collection of items
    let allItemsLength = allItems.length;  //length of total group
    const lastItem = document.getElementById('veggie' + allItemsLength);
    allItemsLength -= 1;  //reduces length to not include last item
    if (lastItem.checked) {
        for (let i = 0; i < allItemsLength; i++) {  //loop through 
            allItems[i].checked = false;
        };
    };
};

const uncheckNoVeggie = () => {
    const lastItem = document.getElementById('veggie5')
    if (lastItem.checked) {
        lastItem.checked = false;
    };
};

const addCheckListenerVeggie = () => {
    document.getElementById('veggie5').addEventListener('click', uncheckItemsVeggie);
};

const addOtherCheckListeners = () => {
    const allItems = document.getElementsByClassName('veggie'); //select collection of items
    let allItemsLength = allItems.length;
    allItemsLength -= 1;
    for (let i = 0; i < allItemsLength; i++) {
        const veggieSelection = document.getElementsByClassName('veggie');
        veggieSelection[i].addEventListener('click', uncheckNoVeggie);
    };
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
    addCheckListenerVeggie();
    addOtherCheckListeners();
};

export default { veggiePrinter, getSelectedVeggies };