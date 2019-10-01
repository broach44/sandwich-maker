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

const uncheckItemsBread = () => {
    const allItems = document.getElementsByClassName('bread'); //select collection of items
    let allItemsLength = allItems.length;  //length of total group
    const lastItem = document.getElementById('bread' + allItemsLength);
    allItemsLength -= 1;  //reduces length to not include last item
    if (lastItem.checked) {
        for (let i = 0; i < allItemsLength; i++) {  //loop through 
            allItems[i].checked = false;
        };
    };
};

const uncheckNoBread = () => {
    const lastItem = document.getElementById('bread6')
    if (lastItem.checked) {
        lastItem.checked = false;
    };
};

const addCheckListenerBread = () => {
    document.getElementById('bread6').addEventListener('click', uncheckItemsBread);
};

const addOtherCheckListeners = () => {
    const allItems = document.getElementsByClassName('bread'); //select collection of items
    let allItemsLength = allItems.length;
    allItemsLength -= 1;
    for (let i = 0; i < allItemsLength; i++) {
        const breadSelection = document.getElementsByClassName('bread');
        breadSelection[i].addEventListener('click', uncheckNoBread);
    };
};

const breadPrinter = () => {
    let domString = `<h2>Bread</h2>`;
    for (let i = 0; i < bread.length; i++) {
        domString +=`
        <div class="form-group form-check">
        <input type="radio" class="form-checkbox bread" name="breadItem" id=${bread[i].id}>
        <label class="form-check-label" for=${bread[i].id}>${bread[i].name}</label>
        </div>
        `
    }
    utilities.printToDom('bread-holder', domString);
    document.getElementById('bread6').checked = true;
    addCheckListenerBread();
    addOtherCheckListeners();
};

export default { breadPrinter, getSelectedBreads };