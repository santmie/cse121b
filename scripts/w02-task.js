/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Crisanta Advincula';
const profilePicture = 'images/cris.jpg';
const currentYear = new Date().getFullYear();



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("#home picture img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
const favFoods = ["Pork Adobo", "Pansit", "Ramen Noodles", "Fried Chicken", "Halo-halo"];
foodElement.innerHTML = `<br>${favFoods}`;

// Declare and instantiate a variable to hold another single favorite food item.
// Add the value stored in this new variable to your favorite food array
let favFoodNew = "Ice Cream";
favFoods.push(favFoodNew);
foodElement.innerHTML += `<br>${favFoods}`;

// Remove the first element in the favorite food array.
favFoods.shift(favFoods);
foodElement.innerHTML += `<br>${favFoods}`;

// Remove the last element in the favorite food array.
favFoods.pop(favFoods);
foodElement.innerHTML += `<br>${favFoods}`;








