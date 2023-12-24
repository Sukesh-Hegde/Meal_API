const search = document.getElementById("search");
const submit = document.getElementById("submit");
const resultHeading = document.getElementById('heading-text')
const mealImage = document.getElementById('recipe-image')
console.log(search);

//Search meals
function searchMeal(e){
    
    e.preventDefault();// It will clear the search bar

    //Get search meal
    const term =search.value;

    //CHECK FOR EMPTY
    if (term.trim()){ //executes only if the trimmed 'term' is not empty
        fetch (`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`
        ).then((res) => res.json())  // this will return Json
        .then((data) => {
            resultHeading.innerHTML = `<h5>Your Search Results for ${term}`;
            console.log(data);
            if (data.meals === null){ //if te result not found (meals from array data)
                resultHeading.innerHTML = `<h5> No result found for ${term}`;
            }else {
                mealImage.innerHTML = data.meals.map(
                    (meal) =>`
                    <div class="containers">
                        <div id="recipes-containers">
                            <div class="recipes">
                                <div class="recipes-titles " data-mealId="${meal.idMeal}" >
                                    ${meal.strMeal}
                                </div>
                                <div class="recipes-images ">
                                 <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                                </div>
                                <div class="recipes-texts">
                                    <ul>
                                        <li>step 1</li>
                                        <li>step 2</li>
                                        <li>step 3</li>
                                        <li>step 4</li>
                                        <li>step 5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`
                ).join(""); //removes the "," between each image

            }
        });

    }else{
        alert ("please insert a value in search")
    }
}

//event Lisener
submit.addEventListener("submit",searchMeal)
