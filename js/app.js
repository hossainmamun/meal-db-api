// nav toggle button
const nav_open_btn = document.getElementById('nav-open-btn');
const nav_close_btn = document.getElementById('nav-close-btn');
const navigation_items = document.querySelector('.navigation-items')

nav_open_btn.addEventListener('click', () => {
    navigation_items.style.width = "400px";
})
nav_close_btn.addEventListener('click', () => {
    navigation_items.style.width = "0";
})

// load data form mealDB api
const popular_meals = document.getElementById('popular-meal');
const meal_display = document.getElementById('meal-display');
const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        getMealList(data.meals);
    })

const getMealList = (mealList) => {
    const meal_slice = mealList.slice(0, 12)
    for (let i = 0; i < meal_slice.length; i++) {
        const meal = meal_slice[i];
        const mealDiv = document.createElement('div');
        mealDiv.className = 'card'
        const mealDetail = `
            <img class="card-img" src="${meal.strMealThumb}"></img>
            <div class="card-inner-content">
                <h4 class="meal-title">${meal.strMeal}</h4>
                <a href="#single-meal" class="popular-btn" onclick="mealDetailInfo('${meal.idMeal}')">Details</a>
            </div>
        `
        mealDiv.innerHTML = mealDetail;
        meal_display.appendChild(mealDiv);
    }
}


// single meal lookup & onclick btn function
const single_meal = document.getElementById('single-meal');
const single_meal_detail = document.getElementById('single-detail');

const mealDetailInfo = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            getSingleMeal(data)
        })

    popular_meals.style.display = "none";
    searching_meals.style.display = 'none';
}

const getSingleMeal = (clickMeal) => {
    const get_single_meal = clickMeal.meals[0]
    const mealDiv = document.createElement('div');
    const mealDetail = `
        <div class="header">
            <h2>meal detail</h2>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, pariatur!</span>
        </div>
        <img class="card-img" src="${get_single_meal.strMealThumb}"></img>
        <h4 class="meal-title">Meal Name : ${get_single_meal.strMeal}</h4>
        <div class="content-title">
            <p>meal category : ${get_single_meal.strCategory}</p>
            <p>origin : ${get_single_meal.strArea}</p>
            <p>tagline : ${get_single_meal.strTags}</p>
        </div>
        <div class="meal-ing">
            <p>meal ingredient list : </p>
            <span>${get_single_meal.strIngredient1}</span>,
            <span>${get_single_meal.strIngredient2}</span>,
            <span>${get_single_meal.strIngredient3}</span>,
            <span>${get_single_meal.strIngredient4}</span>,
            <span>${get_single_meal.strIngredient5}</span>,
            <span>${get_single_meal.strIngredient6}</span>,
            <span>${get_single_meal.strIngredient7}</span>,
            <span>${get_single_meal.strIngredient8}</span>,
            <span>${get_single_meal.strIngredient9}</span>
        </div>
        <div class="meal-explain">
            <p>${get_single_meal.strInstructions}</p>
        </div>
        <div class="home-btn">
            <a href="index.html" class="back-btn"><i class="fas fa-backward"></i> back</a>
            <a href="order.html" class="order-btn">order now</a>
        </div>
    `

    mealDiv.innerHTML = mealDetail;
    single_meal_detail.appendChild(mealDiv);
}


// select element of search meal
const searching_meals = document.getElementById('search-meal');
const search_input = document.getElementById('search-input');
const search_btn = document.getElementById('search-btn');
const search_meal_display = document.getElementById('search-meal-display');

// add event listener with search btn
search_btn.addEventListener('click', () => {
    if (search_input.value === '') {
        alert('you must write valid input')
    }
    else {
        const searchText = search_input.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let mealDetail = ''
                if (data.meals) {
                    data.meals.forEach(meal => {
                        mealDetail += `
                            <div class="card">
                                <img class="card-img" src="${meal.strMealThumb}"></img>
                                <div class="card-inner-content">
                                    
                                    <h4 class="meal-title">${meal.strMeal}</h4>
                                    <a href="#single-meal" class="popular-btn" onclick="mealDetailInfo('${meal.idMeal}')">Details</a>
                                </div>
                            </div>
                        `
                    })
                }
                else {
                    alert('sorry invalid search keyword')
                    location.reload();
                }
                search_meal_display.innerHTML = mealDetail;
            })

        popular_meals.style.display = "none";
        search_input.value = '';
    }

})



// login or sign up page
const loginOption = document.getElementById('login-option');
const signUpOption = document.getElementById('signUp-option');
const signUpPart = document.getElementById('signUp-part');
const loginPart = document.getElementById('login-part');

loginOption.addEventListener('click', () => {
    signUpPart.style.display = 'none';
    loginPart.style.display = 'block'
})

signUpOption.addEventListener('click', () => {
    loginPart.style.display = 'none'
    signUpPart.style.display = 'block'
})


