import bread from './components/bread.js';
import sandwich from './components/sandwich.js';
import meat from './components/meat.js';
import cheese from './components/cheese.js';

const init = () => {
    bread.breadPrinter();
    meat.meatPrinter();
    cheese.cheesePrinter();
    sandwich.printOrderButton();
};

init();