//Variables to capture user data
const form = document.getElementById("user_details");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const age = document.getElementById("age");
const sex = document.getElementById("sex");
const exercise = document.getElementById("exercise");
const result = document.getElementById("result");
let userCal;

//Form calculate users BMR from answers given
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let bmr = (10 * weight.value) + (6.25 * height.value) - (5 * age.value);
    
    if ( sex.value === "male" ) {
        bmr += 5;  
    } else if ( sex.value === "female" ) {
        bmr -= 161;
    } 

    if ( exercise.value === "none") {
        userCal = bmr * 1.2;
    }
    else if ( exercise.value === "light") {
        userCal = bmr * 1.375;
    }
    else if ( exercise.value === "moderate") {
        userCal = bmr * 1.55;
    }
    else if ( exercise.value === "heavy") {
        userCal = bmr * 1.725;
    }
    else if ( exercise.value === "very heavy") {
        userCal = bmr * 1.9;
    } 
    
    let h3 = document.createElement("h3");
    h3.innerHTML = `Calorie allowance: ${Math.floor(userCal)} calories`;
    result.appendChild(h3);
})
