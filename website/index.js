// Recommended: All functions declared here
function createBox(cityName) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cityBox");
    newDiv.textContent = cityName; //if text content = same cities.name ... target or furthest
    document.getElementById("cities").append(newDiv);
}

function userInputObject(userInput) {
    cityFound = false;
    let cityObject = null;
    for (let city in cities) {
        if (userInput == cities[city].name) {
            cityFound = true;
            cityObject = cities[city]; // Save the city object
            break;
        }
    }
    if (cityFound = false) {
        //input function here 
    }
    return cityObject
}
function getCityDistance(userInputObject) {
    let shortestDistance;
    let nearestCity;
    let longestDistance;
    let farthestCity;
    for (let distance of distances) {
        if (distance.city1 == userInputObject.id || distance.city2 == userInputObject.id) {
            //hur kollar jag id???
            console.log("it exsists");
        }
    }
}
// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

//Skapar alla boxes med en loop
for (let i = 0; i < cities.length; i++) {
    createBox(cities[i].name)
}

const userInput = prompt("Vilken stad?") // USER INPUT

console.log(userInputObject(userInput));
getCityDistance(userInputObject(userInput));


