import utilities from '../helpers/utilities.js';

const meat = [
    {
    id: 'meat1',
    name: 'Turkey',
    price: 150
    },
    {
    id: 'meat2',
    name: 'Chicken',
    price: 150
    },
    {
    id: 'meat3',
    name: 'Ham',
    price: 100
    },
    {
    id: 'meat4',
    name: 'Tuna',
    price: 100
    },
    {
    id: 'meat5',
    name: 'No Meat',
    price: 50
    }
];

const getSelectedMeats = () => {
    const selectedMeats = [];
    const meatCheckboxes = document.getElementsByClassName('meat');
    for (let i = 0; i < meatCheckboxes.length; i++) {
        for (let j = 0; j < meat.length; j++) {
            if (meatCheckboxes[i].checked && meatCheckboxes[i].id === meat[j].id) {
                selectedMeats.push(meat[j]);
            };
        };
    };
    return selectedMeats;
};

const uncheckItemsMeat = () => {
    const allItems = document.getElementsByClassName('meat'); //select collection of items
    let allItemsLength = allItems.length;  //length of total group
    const lastItem = document.getElementById('meat' + allItemsLength);
    allItemsLength -= 1;  //reduces length to not include last item
    if (lastItem.checked) {
        for (let i = 0; i < allItemsLength; i++) {  //loop through 
            allItems[i].checked = false;
        };
    };
};

const uncheckNoMeat = () => {
    const lastItem = document.getElementById('meat5')
    if (lastItem.checked) {
        lastItem.checked = false;
    };
};

const addCheckListenerMeat = () => {
    document.getElementById('meat5').addEventListener('click', uncheckItemsMeat);
};

const addOtherCheckListeners = () => {
    const allItems = document.getElementsByClassName('meat'); //select collection of items
    let allItemsLength = allItems.length;
    allItemsLength -= 1;
    for (let i = 0; i < allItemsLength; i++) {
        const meatSelection = document.getElementsByClassName('meat');
        meatSelection[i].addEventListener('click', uncheckNoMeat);
    };
};

const meatPrinter = () => {
    let domString = `<h2>Meat</h2>`;
    for (let i = 0; i < meat.length; i++) {
        domString +=`
        <div class="form-group form-check">
        <input type="checkbox" class="form-checkbox meat" id=${meat[i].id}>
        <label class="form-check-label" for=${meat[i].id}>${meat[i].name}</label>
        </div>
        `
    }
    utilities.printToDom('meat-holder', domString);
    document.getElementById('meat5').checked = true;
    addCheckListenerMeat();
    addOtherCheckListeners();
};

export default { meatPrinter, getSelectedMeats };