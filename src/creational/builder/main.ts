import { MainDishBuilder } from './classes/main-dish-builder';
import { MealBox } from './classes/meal-box';
import { Beans, Meat, Rice } from './classes/meals';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

// Create Meal Box without builder
const rice = new Rice('Arroz', 5);
const beans = new Beans('Feijão', 10);
const meat = new Meat('Carne', 20);
const mealBox = new MealBox();

mealBox.add(rice, beans, meat);
console.log(mealBox);
console.log(mealBox.getPrice());

// Create Main dish (Meal Box) with builder

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

// Create Vegan dish (Meal Box) with builder

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
