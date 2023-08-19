document.addEventListener('DOMContentLoaded', () => { // NEW
    const container = document.querySelector('#container');

    const orangeH3 = document.createElement('h3');
    orangeH3.textContent = "Well done!";
    orangeH3.setAttribute('id', 'orange');
    container.appendChild(orangeH3);

    const redP = document.createElement('p');
    redP.textContent = "You made us without HTML!!";
    redP.setAttribute('id', 'red');
    container.appendChild(redP);

    const blueDiv = document.createElement('div');
    blueDiv.classList.add('blue-div');
    container.appendChild(blueDiv);

    const newH1 = document.createElement('h1');
    newH1.textContent = "This is the cool blue div";
    blueDiv.appendChild(newH1);

    const newP = document.createElement('p');
    newP.textContent = "No div soup to be found here!";
    blueDiv.appendChild(newP);

    //extention

    const favouriteFoods = ["Cheese", "Eggs", "Beans"];

    const newHeader = document.createElement('h1');
    newHeader.textContent = "My favourite foods!";
    container.appendChild(newHeader);

    const foodList = document.createElement('ul');
    for (let food of favouriteFoods) {
        const foodItem = document.createElement('li');
        foodItem.textContent = food;
        foodList.appendChild(foodItem);
    }

    container.appendChild(foodList);
});