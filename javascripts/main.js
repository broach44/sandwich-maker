import bread from './components/bread.js';
import sandwich from './components/sandwich.js';
import meat from './components/meat.js';
import cheese from './components/cheese.js';
import veggie from './components/veggie.js';
import condiment from './components/condiment.js';

const init = () => {
    bread.breadPrinter();
    meat.meatPrinter();
    cheese.cheesePrinter();
    veggie.veggiePrinter();
    condiment.condimentPrinter();
    sandwich.printOrderButton();
};

init();