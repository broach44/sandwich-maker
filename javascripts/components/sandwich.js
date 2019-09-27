import utilities from "../helpers/utilities.js";
import bread from "./bread.js";
import meat from "./meat.js";
import cheese from "./cheese.js";
import veggie from './veggie.js';

const createFinalOrder = (items) => {
    let domString2 = `<div><br><p>Thank you for your order!</p><br>`;
    let sum = 0;
    for (let i=0; i < items.length; i++) {
        let priceNumber = items[i].price
        sum += priceNumber;
        priceNumber /= 100;
        let dollars = priceNumber.toLocaleString("en-US", {style:"currency", currency:"USD"});
        domString2 += `
        <p>${items[i].name} ${dollars}</p>
        `
    };
    sum /= 100;
    const totalDollars = sum.toLocaleString("en-US", {style:"currency", currency: "USD"});
    domString2 += `<hr><p>Your total is: ${totalDollars}</p></div>`;
    utilities.printToDom('final-order', domString2);
};

const createOrderEvent = () => {
    const selectedBreads = bread.getSelectedBreads();
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedMeats = meat.getSelectedMeats();
    const selectedVeggies = veggie.getSelectedVeggies();
    const allItems = selectedBreads.concat(selectedMeats, selectedCheeses, selectedVeggies);
    createFinalOrder(allItems);
};

const printOrderButton = () => {
    const domString = `<button class="btn btn-secondary" id="order-button">Create Sandwich</button>`;
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };