function searchResult(){
    const food = document.getElementById('searchFood').value;
    const firstLetter = food.charAt(0);
    foodResult(firstLetter);
}


const foodResult = search => {
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
    fetch(url)
    .then(res => res.json())
    .then(data => showFood(data.meals));
    document.getElementById('searchFood').value = "";
}

const showFood = data => {
    const sliceItems = data.slice(0, 8);
    for (let i = 0; i < sliceItems.length; i++) {
        const food = sliceItems[i];
        displayFood(food);
    }
}


const displayFood = display => {
    const food = document.getElementById('showFood');
    const div = document.createElement('div');
    div.className = 'displayFood';

    const displayDiv = `
           <img onClick="foodDetails(${display.idMeal})" src="${display.strMealThumb}" />
           <h3>${display.strMeal}</h3>
    `;

    div.innerHTML = displayDiv;
    food.appendChild(div); 
}

const foodDetails = strMeal => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${strMeal}`)
    .then(res => res.json())
    .then(data => mealsDetails(data.meals[0]));
}

const mealsDetails = meals => {
        const detailDiv = document.getElementById('detailDiv');
        detailDiv.innerHTML = `
             <img src="${meals.strMealThumb}" />
             <h2>${meals.strMeal}</h2>
             <h3>Ingredients</h3>
             <p>1. ${meals.strIngredient1}</p>
             <p>2. ${meals.strIngredient2}</p>
             <p>3. ${meals.strIngredient3}</p>
             <p>4. ${meals.strIngredient4}</p>
             <p>5. ${meals.strIngredient5}</p>
             <p>6. ${meals.strIngredient6}</p>
        `;

        // detailDiv.appendChild(newDiv);
}




