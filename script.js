
var logIn = document.getElementById("loginLink");
var logInForm = document.getElementById("loginForm");
var signUp = document.getElementById("signupLink");
var signUpForm = document.getElementById("signupForm");

logIn.addEventListener("click", function () {
    signUpForm.style.display = "none";
    logInForm.style.display = "flex";
});

signUp.addEventListener("click", function () {
    logInForm.style.display = "none";
    signUpForm.style.display = "flex";
});