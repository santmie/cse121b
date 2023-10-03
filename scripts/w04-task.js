/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {name: "Crisanta Advincula",
    photo: "images/cris.jpg",
    favoriteFoods: ["Pork Adobo", "Pansit", "Ramen Noodles", "Fried Chicken", "Halo-halo"],
    hobbies: ["Playing the Ukelele", "Watching Movies", "Travelling"],
    placesLived: []
}


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Leyte, Philippines", 
        length: "22 years"
    },
    {
        place: "Manila, Philippines",
        length: "14 years"
    },
    {
        place: "Butuan, Philippines",
        length: "2 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector("#photo");
imageElement.setAttribute("src", myProfile.photo);
imageElement.setAttribute("alt", `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach(lived => {
    let dt = document.createElement('dt');
    dt.textContent = lived.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = lived.length;
    document.querySelector('#places-lived').appendChild(dd);
})