// let allData1;
// let allData2;
// let allData3;
// let allData4;
// let allData5;
// let allData7;
// let allData8;

let row1=document.getElementById('catRow')


let searchWord = document.getElementById('searchword')

let word = ""
let searchLetter = document.getElementById('searchletter')
let letter = ""


searchWord.addEventListener("keyup", () => {
    word = searchWord.value;
    
    getSearch()

}) 

searchLetter.addEventListener('keyup' , ()=>{
    letter = searchLetter.value;
    letterSearch()
})














$('.logo').click(function(){
    
    $('.search').addClass('d-none')
    $('.contact').addClass('d-none')
    mainDisplay()
})



$('.open').click(function(){
    $('.nav-menu').css('margin-left','0')
    $('.nav-head').css('margin-left','250px')
    $('.open').addClass('d-none')
    $('.close').removeClass('d-none')
    $('.menu-items .item1').animate({
        opacity: "1",
        paddingTop: "25px"
    },1000)
    $('.menu-items .item2').animate({
        opacity: "1",
        paddingTop: "25px"
    },1100)
    $('.menu-items .item3').animate({
        opacity: "1",
        paddingTop: "25px"
    },1200)
    $('.menu-items .item4').animate({
        opacity: "1",
        paddingTop: "25px"
    },1300)
    $('.menu-items .item5').animate({
        opacity: "1",
        paddingTop: "25px"
    },1400)
})

$('.close').click(function(){
    $('.nav-menu').css('margin-left','-250px')
    $('.nav-head').css('margin-left','0px')
    $('.open').removeClass('d-none')
    $('.close').addClass('d-none')
    $('.menu-items .item1').animate({
        opacity: "0",
        paddingTop: "500px"
    },1000)
    $('.menu-items .item2').animate({
        opacity: "0",
        paddingTop: "500px"
    },1100)
    $('.menu-items .item3').animate({
        opacity: "0",
        paddingTop: "500px"
    },1200)
    $('.menu-items .item4').animate({
        opacity: "0",
        paddingTop: "500px"
    },1300)
    $('.menu-items .item5').animate({
        opacity: "0",
        paddingTop: "500px"
    },1400)
})
$('.nav-search').click(function(){
    $('.search').removeClass('d-none')
    $('.contact').addClass('d-none')
    $('.dtls').addClass('d-none')
    $('.Area').addClass('d-none')
    $('.inge').addClass('d-none')


    
})
$('.nav-contact').click(function(){
    $('.contact').removeClass('d-none')
    $('.search').addClass('d-none')
    $('.dtls').addClass('d-none')
    $('.Area').addClass('d-none')
    $('.inge').addClass('d-none')
    // $('.dtls').removeClass('d-none')  
})














// -----------letter search------
async function letterSearch(){
    let letterRes = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    let letterData = await letterRes.json()

    allData6 = letterData.meals
    console.log(allData6)
    displayLetterData()
    

    
}
function displayLetterData(){

    let x = ''
    for( i = 0 ; i < allData6.length ; i++){
        x +=
        `<div class="col-md-6 col-lg-3 my-3 myM shadow">
        <div class="dtls shadow rounded position-relative ">
            <div onclick="لسة('${allData6[i].strCategory}')" class="post">
                <img src='${allData6[i].strMealThumb}' class="w-100 rounded" />
                <div class="layer d-flex align-items-center ">
                    <div class="info p-2">
                        <h2>${allData6[i].strMeal}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
    row1.innerHTML=x


}
// -------------------------------
// -------------Name Search

async function getSearch(){

    let searchRes = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`)
    let searchData = await searchRes.json()

    allData5 = searchData.meals
    console.log(allData5)
    mainDisplay()

   
}
getSearch()


function mainDisplay(){

    let main = ''
    for( i = 0 ; i < allData5.length ; i++){
        main +=
        `<div class="col-md-6 col-lg-3 my-3 myM shadow">
        <div class="dtls shadow rounded position-relative ">
            <div onclick="لسة('${allData5[i].strCategory}')" class="post">
                <img src='${allData5[i].strMealThumb}' class="w-100 rounded" />
                <div class="layer d-flex align-items-center ">
                    <div class="info p-2">
                        <h2>${allData5[i].strMeal}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
    row1.innerHTML=main
}
// ------------------------------


// -------DE tmm----------------
async function categoriesData(){ 

    let catRes = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let catData = await catRes.json()

    allData1=catData.categories


    console.log(allData1)
  displayCategories()
  $('.contact').addClass('d-none')
  $('.search').addClass('d-none')

} 




function displayCategories(){
    let cats=''
    for(i = 0 ; i < allData1.length; i++ ){
     cats +=
    `<div class="col-md-6 col-lg-3 my-3 myM shadow">
    <div class="dtls shadow rounded position-relative ">
        <div onclick="filterCate()" class="post">
            <img src='${allData1[i].strCategoryThumb}' class="w-100 rounded" />
            <div class="layer d-flex align-items-center ">
                <div class="info p-2">
                    <h2>${allData1[i].strCategory}</h2>
                    <p>${allData1[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}
row1.innerHTML=cats

}
// ----------------------------
// -------DE Tmm---------------
async function filterCate(menu){
    let filterCate = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${menu}`)
    let filtercateData = await filterCate.json()
    allData8=filtercateData.meals
    console.log(allData8)
    
}

// ------------------------------
// -------------De tmm------------
async function areAData(){

    let areaRes = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let areaData=await areaRes.json()
    allData3 = areaData.meals
    console.log(allData3)
    displayArea()
    $('.contact').addClass('d-none')
    $('.search').addClass('d-none')

}
// areAData()
function displayArea(){
    let areas=''
    for(i = 0 ; i < allData3.length ; i++){
        areas +=
        ` <div class="col-md-6 col-lg-3 my-3 myM  shadow">
        <div class="Area shadow rounded position-relative">
            <div onclick=(filterByArea('${allData3[i].strArea}')) class="post ">
                <i class="fa-solid fa-city fs-2 text-danger p-4"></i>
                <h2 class="text-white fs-4 fw-0 p-4">${allData3[i].strArea}</h2>
            </div>
        </div>
    </div>`
    }
    row1.innerHTML=areas
}
// -----------------------------
// --------------DE TMM----------
async function ingredientData(){
    let ingRes = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let ingData = await ingRes.json()
    allData2 = ingData.meals
    console.log(allData2)
    displayIngredient()
    $('.contact').addClass('d-none')
    $('.search').addClass('d-none')

}
// // ingredientData()
function displayIngredient(){
    let ingrts=""
    for(i = 0 ; i < allData2.length ; i++){
        ingrts +=
    `
    <div class="inge col-md-6 col-lg-3 my-3 myM  shadow">
        <div onclick="displayMeals()" class="shadow rounded position-relative">
            <div class="post ">
                <i class="fa-solid fa-bowl-food  " style="font-size:50px; color:green;"></i>
                <h2 class="text-white p-3"style="font-size:25px; font-weight:300; ">${allData2[i].strIngredient}</h2>
                <p class="text-white p-3" style="font-size:15px; font-weight:100; "> Click Here to see the Description </p>
                
            </div>
        </div>
    </div>`
    }
    row1.innerHTML=ingrts
}
// -----------------------------------
// ---------DE TMM-----------------
async function filterInge(ii){


    let datRes = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ii}`)


    let datFilt= await datRes.json()

    allData9 = datFilt
    console.log(allData9)
}
// filterInge()
function displayIngrefilt(){
    let ingrts=""
    for(i = 0 ; i < allData9.length ; i++){
        ingrts +=
    `
    <div class="col-md-6 col-lg-3 my-3 myM shadow">
    <div class="dtls shadow rounded position-relative ">
            <img src='${allData9[i].strMealThumb}' class="w-100 rounded" />
            <div class="layer d-flex align-items-center ">
                <div class="info p-2">
                    <h2>${allData9[i].strMeal}</h2>
                </div>
            </div>
        </div>
    </div>
</div>`
    }
    row1.innerHTML=ingrts
}


// // categoriesData()

// filterCate()



// // -------------------------------------GET DATA------------------------------------------------
// async function getMeals(mealID){
     
//     let mealRes = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
//     let mealData = await mealRes.json()
//     allData4 = mealData.meals
//     console.log(allData4)
//     displayMeals()

// }
// // // getMeals()

// async function countryData(){

//     let countRes = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areai}`)
//     let countData=await countRes.json()
//     allData7 = countData.meals
//     console.log(allData7)
   

// }
// // // countryData()


// // ---------------------------SHOW DATA SECTION---------------------------------------------



function displayMeal(){
    let meal = ''
    for(i=0;i<allData8.length;i++){
        meal += 
        ` <div class="col-md-6 col-lg-3 my-3 myM  shadow">
        <div onclick="getMeals('${allData4[i].idMeal}')" class="mels shadow rounded position-relative">
            <div class="post ">
                <img src='${allData8[i].strMealThumb}' class="w-100 rounded" />
                <div class="layer d-flex align-items-center ">
                    <div class="info p-2">
                        <h2>${allData8[i].strMeal}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div> `
    }
    row1.innerHTML = meal
}
function displayMealsDescription(){
    let meal = ''
    for(i=0;i<allData4.length;i++){
        meal += 
        ` <div class="col-md-4 myM text-white p-5">
        <img class="w-100" src="${allData4[i].strMealThumb}" alt=""
            srcset=""><br>
        <h1>${allData4[i].strMeal}</h1>
    </div>
    <div class="col-md-8 myM text-white text-left">
        <h2>Instructions</h2>
        <p class="text-white">${allData4[i].strInstructions}</p>
        <p class="text-white"><b class="fw-bolder text-white">Area :</b> ${allData4[i].strArea}</p>
        <p class="text-white"><b class="fw-bolder text-white">Category :</b> ${allData4[i].strCategory}</p>
        <h3 class="text-white">Recipes :</h3>
        <ul class="d-flex " id="recipes">
        </ul>

        <h3 class="my-2 mx-1 p-1">Tags :</h3>
        <ul class="d-flex " id="tags">
        </ul>

        
        <a class="btn btn-success text-white" target="_blank" href="${allData4[i].strSource}">Source</a>
        <a class="btn youtube text-white" target="_blank" href="${allData4[i].strYoutube}">Youtub</a>
    </div>`
    }
    row1.innerHTML = meal
}

function displayCountry(){
    let cont = ''
    for( i = 0 ; i < allData5.length ; i++){
        cont +=
        `<div class="col-md-6 col-lg-3 my-3 myM shadow">
        <div class="dtls shadow rounded position-relative ">
            <div onclick="لسة('${allData5[i].strCategory}')" class="post">
                <img src='${allData5[i].strMealThumb}' class="w-100 rounded" />
                <div class="layer d-flex align-items-center ">
                    <div class="info p-2">
                        <h2>${allData5[i].strMeal}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }

}






























var userName = document.getElementById("Name");
var userEmail = document.getElementById("email");
var userPhone = document.getElementById("phone");
var userAge = document.getElementById("age");
var userPassword = document.getElementById("Password");
var userRePassword = document.getElementById("repassword");
var userNameAlert = document.getElementById("namealert");
var userEmailAlert = document.getElementById("emailalert");
var userPhoneAlert = document.getElementById("phonealert");
var userAgeAlert = document.getElementById("agealert");
var userpasswordAlert = document.getElementById("passwordalert");
var userRepasswordAlert = document.getElementById("repasswordalert");



function userNameValid() {
    return /^[a-zA-Z ]+$/.test(userName.value)
}

function userEmailValid() {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail.value)
}

function userPhoneValid() {
    return /^[\+]?[(]?[0-5]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value)
}

function userAgeValid() {
    return /^[1-5]{1}[0-9]{1}?$|^60$/.test(userAge.value)
}

function userPasswordValid() {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)
}

function userRePasswordValid() {
    return userPassword.value == userRePassword.value
}

    userName,
    userEmail,
    userPhone,
    userAge,
    userPassword,
    userRePassword,
    nameValid = false,
    emailValid= false,
    phoneValid = false,
    ageValid = false,
    passwordValid = false,
    repasswordValid = false,
  



userName.addEventListener("keyup", () => {
    nameValid = true
})
userEmail.addEventListener("keyup", () => {
    emailValid = true
})
userPhone.addEventListener("keyup", () => {
    phoneValid  = true
})
userAge.addEventListener("keyup", () => {
    ageValid = true
})
userPassword.addEventListener("keyup", () => {
    passwordValid  = true
})
userRePassword.addEventListener("keyup", () => {
    repasswordValid  = true
})







function validate() {

    if (nameValid ) {
        if (userNameValid()) {
            userName.classList.remove("is-invalid")
            userName.classList.add("is-valid")
            userNameAlert.classList.replace("d-block", "d-none")
            userNameAlert.classList.replace("d-block", "d-none")
        } else {
            userName.classList.replace("is-valid", "is-invalid")
            userNameAlert.classList.replace("d-none", "d-block")
        }
    }

    if (emailValid ) {
        if (userEmailValid()) {
            userEmail.classList.remove("is-invalid")
            userEmail.classList.add("is-valid")
            userEmailAlert.classList.replace("d-block", "d-none")
            userEmailAlert.classList.replace("d-block", "d-none")
        } else {
            userEmail.classList.replace("is-valid", "is-invalid")
            userEmailAlert.classList.replace("d-none", "d-block")
        }
    }

    if (phoneValid ) {
        if (userPhoneValid()) {
            userPhone.classList.remove("is-invalid")
            userPhone.classList.add("is-valid")
            userPhoneAlert.classList.replace("d-block", "d-none")
            userPhoneAlert.classList.replace("d-block", "d-none")
            
        } else {
            userPhone.classList.replace("is-valid", "is-invalid")
            userPhoneAlert.classList.replace("d-none", "d-block")
         
        }
    }

    if (ageValid ) {
        if (userAgeValid()) {
            userAge.classList.remove("is-invalid")
            userAge.classList.add("is-valid")
            userAgeAlert.classList.replace("d-block", "d-none")
            userAgeAlert.classList.replace("d-block", "d-none")
            
        } else {
            userAge.classList.replace("is-valid", "is-invalid")
            userAgeAlert.classList.replace("d-none", "d-block")
            
        }
    }

    if (passwordValid ) {
        if (userPasswordValid()) {
            userPassword.classList.remove("is-invalid")
            userPassword.classList.add("is-valid")
            userpasswordAlert.classList.replace("d-block", "d-none")
            userpasswordAlert.classList.replace("d-block", "d-none")
        
        } else {
            userPassword.classList.replace("is-valid", "is-invalid")
            userpasswordAlert.classList.replace("d-none", "d-block")
            
        }
    }

    if (repasswordValid ) {
        if (userRePasswordValid()) {
            userRePassword.classList.remove("is-invalid")
            userRePassword.classList.add("is-valid")
            userRepasswordAlert.classList.replace("d-block", "d-none")
            userRepasswordAlert.classList.replace("d-block", "d-none")
            
        } else {
            userRePassword.classList.replace("is-valid", "is-invalid")
            userRepasswordAlert.classList.replace("d-none", "d-block")
        }
    }

    if(userNameValid() && userEmailValid() && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid()){
        document.getElementById("submitBtn").removeAttribute("disabled")
    }else{
        document.getElementById("submitBtn").setAttribute("disabled","true")
    }

}


























































































