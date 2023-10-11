/* W05: Programming Tasks */

/* Declare and initialize global variables */
//Declare a const variable named templesElement that references the HTML div element that eventually will be
//populated with temple data.
const templesElement = document.getElementById("temples");
//Declare a global empty array variable to store a list of temples named templeList.
let templeList = [];

/* async displayTemples Function */
//Declare a function expression using const named displayTemples that uses an arrow function to accept a list of temples as an array argument.
//Process each temple in the temple array using a forEach method and do the following for each temple item:
const displayTemples = (temples) => {
    temples.forEach((temple) =>{
        //Create an HTML <article> element (createElement).
        const article = document.createElement("article");
        //Create an HTML <h3> element and add the temple's templeName property to this new element.
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        //Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        //Append the <h3> element and the <img> element to the <article> element as children. (appendChild)
        article.appendChild(h3);
        article.appendChild(img);
        //Append the article element to templesElement
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const templeData = await response.json();
        templeList = templeData;
        displayTemples(templeList);
    }
    console.log(templeList);
}

getTemples();

/* reset Function */
const reset = () => {
    const articles = templesElement.querySelectorAll("article");
    articles.forEach((article) => {
        article.remove();
    });
};


/* sortBy Function */
//Declare a function expression named sortBy.
//The function should accept a argument in a parameter named temples.
const sortBy = (temples) => {
    // first call the reset function to clear the output
    reset();

    // Define a variable named filter that obtains the value of the HTML element with the ID of sortBy (The pull-down menu).
    const filter = document.getElementById("sortBy").value;

    // Use a switch statement that uses the filter value as the selector responding to four (4) cases.
    // For each case, call the displayTemples function using an filter statement that filters the temples parameter for the four options provided.
    switch (filter) {
        case "utah":
            //"utah": filter for temples where the location contains "Utah" as a string.
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            //"notutah": filter for temples where the location does not contain "Utah" as a string.
            displayTemples(temples.filter((temple) =>!temple.location.includes("Utah")));
            break;
        case "older":
            //"older": filter for temples where the dedicated date is before 1950. (compare versus new Date(1950, 0, 1)).
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            //"all": no filter. Just use temples as the argument.
            displayTemples(temples);
            break;
    }
};

/* Event Listener */
// Assuming you have a select element with the ID "sortBy" in your HTML
const sortByElement = document.querySelector("#sortBy");

// Add a change event listener to the "sortBy" select element
sortByElement.addEventListener("change", () => {
    sortBy(templeList)});