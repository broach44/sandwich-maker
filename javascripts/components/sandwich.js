import utilities from "../helpers/utilities.js";
import bread from "./bread.js";
import meat from "./meat.js";
import cheese from "./cheese.js";
import veggie from './veggie.js';
import condiment from './condiment.js';



const createFinalOrder = (items) => {
    let domString2 = `<div class="alert alert-secondary text-center" role="alert"><br><h3>Thank you for your order!</h3><br>`;
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
    domString2 += `<hr><h4>Your total is: ${totalDollars}</h4></div>`;
    utilities.printToDom('final-order', domString2);
};

const createOrderEvent = () => {
    const selectedBreads = bread.getSelectedBreads();
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedMeats = meat.getSelectedMeats();
    const selectedVeggies = veggie.getSelectedVeggies();
    const selectedCondiments = condiment.getSelectedCondiments();
    const allItems = selectedBreads.concat(selectedMeats, selectedCheeses, selectedVeggies, selectedCondiments);
    createFinalOrder(allItems);
};

const printOrderButton = () => {
    const domString = `<button class="btn btn-secondary btn-lg btn-block mb-3" id="order-button">Create Sandwich</button>`;
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };