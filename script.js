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
// document.getElementById('search').addEventListener('click', function(){
//    const input = document.getElementById("search-meal").value;
//    console.log(input);
// })