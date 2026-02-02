let loginInput = document.getElementById("loginInput");
let loginPin = document.getElementById("loginPin");
let loginBtn = document.getElementById("loginBtn");
let loginError = document.getElementById("loginError");

let screen2 = document.getElementById("screen2");
let screen1 = document.getElementById("screen1");

// second screen selection

let addMoney = document.getElementById("addMoney");
let cashOut = document.getElementById("cashOut");

let amount = document.getElementById("amount");

let secondPin = document.getElementById("secondPin");
let balance = document.getElementById("balance");

// login page logic
loginBtn.addEventListener("click", () => {
  if (loginInput.value === "1234" && loginPin.value === "1234") {
    screen1.style.display = "none";
    loginError.style.display = "none";


    screen2.style.display = "block";
  } else if (loginInput.value === "" || loginPin.value === "") {
    loginError.style.display = "block";
  } else {
    console.log("heello");
  }
});

// Add money  logic
let currentBalance = 5000
addMoney.addEventListener("click", () => {
  if (amount.value === "" || secondPin.value === "") {
    loginError.style.display = "block";


  } else if(secondPin.value === '1234'){
     currentBalance = currentBalance + parseInt(amount.value)
     balance.innerHTML = currentBalance
    loginError.style.display = "none";

  }else{
    loginError.style.display = "block";

  }
});


//  cash out logic
cashOut.addEventListener("click", () => {
  if (amount.value === "" || secondPin.value === "") {
    loginError.style.display = "block";


  } else if(secondPin.value === '1234'){
     currentBalance = currentBalance - parseInt(amount.value)
     balance.innerHTML = currentBalance
    loginError.style.display = "none";

  }else{
    loginError.style.display = "block";

  }
});
