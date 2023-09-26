// Activity 1 - Map
// Declare an array with value = ['one', 'two', 'three']
// Convert our array of strings into an array of HTML strings. Each string should be turned into a list item. For example: "<li>one</li>"
// Set our list of HTML strings into the myList list. (Hint...checkout the .join() method.)
const counts = ["one", "two", "three"];
const countsHtml = counts.map(function (counts) {
  return `<li>${counts}</li>`;
});
document.getElementById("myList").innerHTML = countsHtml.join();

// Activity 2 - Map
// Declare an array with letter grades in it: ['A', 'B', 'A']
// Write a function that will take one letter grade, and return the appropriate gpa points for that grade. 
// IE if we send in 'A' it should return 4.
// Use map and our conversion function to convert the array in step 1 to gpa points.
const grades =  ['A', 'B', 'A'];
function convertGrade (grade){
    let point = 0;
    if (grade === "A"){
        point = 4;
    }
    else if (grade === "B") {
        point = 3;   
    }
    return point;
}
const gpaPoints = grades.map(convertGrade);

// Activity 3 - Reduce 
// Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
// Using reduce calculate the GPA from the array of gpaPoints.
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
  });
  const gpa = pointsTotal / gpaPoints.length;

//   Activity 4 - Filter
// Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
// Using filter keep only the fruits that are longer than 6 characters.
  const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
  const shortWords = words.filter(function (word) {
    return word.length < 6;
  });

//   Activity 5 - indexOf
// Declare an array with the following value: [12, 34, 21, 54]
// Declare a luckNumber variable with the value 21;
// Use indexOf to see if the luckyNumber is in the Array.
  const numArray = [12, 34, 21, 54];
  const luckNumber = 21;
  let luckyIndex = numArray.indexOf(luckNumber);