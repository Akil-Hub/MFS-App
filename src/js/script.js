// Login page elements - only exist on index.html
let loginInput = document.getElementById("loginInput");
let loginPin = document.getElementById("loginPin");
let loginBtn = document.getElementById("loginBtn");
let loginError = document.getElementById("loginError");

let screen2 = document.getElementById("screen2");
let screen1 = document.getElementById("screen1");

// Second screen elements - only exist on secondScreen.html
let addMoney = document.getElementById("addMoney");
let cashOut = document.getElementById("cashOut");
let amount = document.getElementById("amount");
let secondPin = document.getElementById("secondPin");
let balance = document.getElementById("balance");
let home = document.getElementById("home");
let menu = document.getElementById("menu");
// navigate to pages

let addMoneyPage = document.getElementById("addMoneyPage");
let cashOutPage = document.getElementById("cashOutPage");
let success = document.getElementById("success");
let error = document.getElementById("error");
let select = document.getElementById("select");

// Login page logic - only run if elements exist
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    if (loginInput.value === "1234" && loginPin.value === "1234") {
      location.href = "previewScreen.html";
    } else if (loginInput.value === "" || loginPin.value === "") {
      loginError.style.display = "block";
    } else {
      console.log("hello");
    }
  });
}

// navigate to add money page

if (addMoneyPage) {
  addMoneyPage.addEventListener("click", () => {
    location.href = "addMoneyPage.html";
  });
}

// Current balance
let currentBalance = 5000;
// Add money logic - only run if element exists
if (addMoney) {
  addMoney.addEventListener("click", () => {
    let givenAmount = parseInt(amount.value);

    if (givenAmount === "" || secondPin.value === ""  || select.value === 'select-bank' || isNaN(givenAmount) || !select) {
      error.style.display = "block";
      setTimeout(() => {
      error.style.display = "none";

        
      }, 2000);
      return
    } else if (secondPin.value === "1234" ) {
      currentBalance = currentBalance + givenAmount;
      balance.innerHTML = currentBalance;

      if (success) {
          success.style.display = "block";

        
        setTimeout(() => {
          success.style.display = "none";
        }, 2000);
      }
    } else {
      loginError.style.display = "block";
    }
  });
}

// navigate to cash out page 

if (cashOutPage) {
  cashOutPage.addEventListener('click',()=>{
    location.href = 'cashOut.html'
  })
  
}

// Cash out logic - only run if element exists
if (cashOut) {

  cashOut.addEventListener("click", () => {
    let givenAmount = parseInt(amount.value);

    if (givenAmount === "" || secondPin.value === "") {
      loginError.style.display = "block";
    } else if (secondPin.value === "1234" && currentBalance >= givenAmount) {
      console.log(amount.value);
      currentBalance = currentBalance - givenAmount;
      balance.innerHTML = currentBalance;
      loginError.style.display = "none";
      
      if (success) {
          success.style.display = "block";

        
        setTimeout(() => {
          success.style.display = "none";
        }, 2000);
      }
    } else {
      loginError.style.display = "block";
    }
  });
}

// Home button - only run if element exists
if (home) {
  home.addEventListener("click", () => {
    location.href = "index.html";
    console.log("home button");
  });
}

// navigate to the all menu page

if (menu) {
  menu.addEventListener('click',()=>{
    location.href = 'previewScreen.html'
  })
  
}