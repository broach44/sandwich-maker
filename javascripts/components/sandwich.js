import utilities from "../helpers/utilities.js";
import bread from "./bread.js";

const createFinalOrder = (items) => {
    let domString2 = `<p>Thank you for your order!</p>`;
    for (let i=0; i < items.length; i++) {
        domString2 += `
        <p>${items[i].name} ${items[i].price}</p>`
    };
    utilities.printToDom('final-order', domString2);
};

const createOrderEvent = () => {
    const selectedBreads = bread.getSelectedBreads();
    createFinalOrder(selectedBreads);
};

const printOrderButton = () => {
    const domString = `<button class="btn btn-secondary" id="order-button">Create Sandwich</button>`;
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };