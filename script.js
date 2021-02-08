const searchmeals = () =>{
    const searchMeal = document.getElementById('search-meal').value;
    const url =`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`

    fetch (url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
    
}
const displayMeals = meals => {
    const foodContainer = document.getElementById('food-container');

    meals.forEach(meal => {
        console.log(meal);
        const foodDiv =document.createElement('div');
        foodDiv.className = 'food p-3';
        foodDiv.innerHTML =` 
        <div class ="col-md-6 "> 
           <a><img src ="${meal.strMealThumb}"></a>
            <h3 class="food-name">${meal.strMeal}</h3> 
        </div> 
        `;
        foodContainer.appendChild(foodDiv);

    })
}
// ingredient==========================


const displayMealsDetail = (meal) => {
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=a`
    fetch(url)
    .then(res => res.json())
    .then(data => mealIngredientInfo(data.meals[1]));
}
const mealIngredientInfo = meals => {
    const foodDetail = document.getElementById('food-detail');
    meals.forEach(meal =>{
        console.log(meal);
        const foodIngre = document.createElement('div');
       
        foodIngre.innerHTML= `
        <img src ="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <ul>
            <p>Ingredients</p>
    
            <li>${meal.strIngredient1}</li>
            <li>${meal.strIngredient2}</li>
            <li>${meal.strIngredient3}</li>
            <li>${meal.strIngredient4}</li>
            <li>${meal.strIngredient5}</li>
            <li>${meal.strIngredient6}</li>
        </ul>
    `;
    foodDetail.appendChild(foodIngre);
    })
   

}