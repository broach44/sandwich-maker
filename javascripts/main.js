import bread from './components/bread.js';
import sandwich from './components/sandwich.js';
import meat from './components/meat.js';

const init = () => {
    bread.breadPrinter();
    meat.meatPrinter();
    sandwich.printOrderButton();
};

init();