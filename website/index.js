// Recommended: All functions declared here
function createBox(cityName) { //the problem with this one is maybe idk how to target and stuff?
    const newDiv = document.createElement("div");
    newDiv.classList.add("cityBox");
    newDiv.textContent = cityName; //if text content = same cities.name ... target or furthest
    document.getElementById("cities").append(newDiv);
}

function getCityDistance(userCityInput){
    let shortestDistance;
    let nearestCity;
    let longestDistance;
    let farthestCity;

}
// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

//Skapar alla boxes med en loop
for (let i = 0; i < cities.length; i++) {
    createBox(cities[i].name)
}

const userInput = prompt("Vilken stad?") // USER INPUT

