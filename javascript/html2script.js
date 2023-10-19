function searchNames() {
  const input = document.getElementById('s1').value.toLowerCase();
  const buttons = document.querySelectorAll('table  button');

  buttons.forEach(button => {
      const buttonText = button.innerText.toLowerCase();
      if (buttonText.includes(input)) {
          button.style.display = 'block'; // Show the button if it matches the search
      } else {
          button.style.display = 'none';  // Hide the button if it doesn't match the search
      }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const htmlButton = document.getElementById("t1");
  const commentsButton = document.getElementById("t2");
  const ifConditionButton = document.getElementById("t3");
  const switchButton = document.getElementById("t4");
  const whileLoopButton = document.getElementById("t5");
  const doWhileButton = document.getElementById("t6");
  const forLoopButton = document.getElementById("t7");
  const arrayButton = document.getElementById("t8");
  const numberMethodsButton = document.getElementById("t9");
  const stringMethodsButton = document.getElementById("t10");
  const functionsButton = document.getElementById("t11");
  const objectsButton = document.getElementById("t12");
  const arraySortButton = document.getElementById("t13");
  const palindromeButton = document.getElementById("t14");
  const factorialButton = document.getElementById("t15");
  const oddButton = document.getElementById("t16");
  const evenButton = document.getElementById("t17");
  const reverseButton = document.getElementById("t18");
  const eligibleButton = document.getElementById("t19");
  const evenOddPromptButton = document.getElementById("t20");
  const hidingElementsButton = document.getElementById("t21");
  const jsHeadSectionButton = document.getElementById("t19");
  const jsBodySectionButton = document.getElementById("t20");
  const jsPrintingWindowButton = document.getElementById("t21");
  const bulbOnOffButton = document.getElementById("t22");
  const mathOperationsButton = document.getElementById("t23");
  const registrationFormButton = document.getElementById("t24");
  const loginFormButton = document.getElementById("t25");
  const loginormButton = document.getElementById("t26");

  htmlButton.addEventListener("click", function() {
      window.location.href = "variables.html";
  });
  commentsButton.addEventListener("click", function() {
      window.location.href = "comments in js.html";
  });
  ifConditionButton.addEventListener("click", function() {
      window.location.href = "if condition.html";
  });
  switchButton.addEventListener("click", function() {
      window.location.href = "switch in js.html";
  });
  whileLoopButton.addEventListener("click", function() {
      window.location.href = "while loop.html";
  });
  doWhileButton.addEventListener("click", function() {
      window.location.href = "do While.html";
  });
  forLoopButton.addEventListener("click", function() {
      window.location.href = "for Loop.html";
  });
  arrayButton.addEventListener("click", function() {
      window.location.href = "array in js.html";
  });
  numberMethodsButton.addEventListener("click", function() {
      window.location.href = "Number Methods.html";
  });
  stringMethodsButton.addEventListener("click", function() {
      window.location.href = "string methods.html";
  });
  functionsButton.addEventListener("click", function() {
      window.location.href = "functions.html";
  });
  objectsButton.addEventListener("click", function() {
      window.location.href = "objectss.html";
  });
  arraySortButton.addEventListener("click", function() {
      window.location.href = "array Sort.html";
  });
  palindromeButton.addEventListener("click", function() {
      window.location.href = "palindrome.html";
  });
  factorialButton.addEventListener("click", function() {
      window.location.href = "factorial of no.html";
  });
  oddButton.addEventListener("click", function() {
      window.location.href = "odd 1-100.html";
  });
  evenButton.addEventListener("click", function() {
      window.location.href = "even no's 1-100.html";
  });
  reverseButton.addEventListener("click", function() {
      window.location.href = "Hiding html elements.html";
  });
  eligibleButton.addEventListener("click", function() {
      window.location.href = "js in head section.html";
  });
  evenOddPromptButton.addEventListener("click", function() {
      window.location.href =  "js in body section.html";
  });
  hidingElementsButton.addEventListener("click", function() {
      window.location.href = "js printing current window.html";
  });
  
  bulbOnOffButton.addEventListener("click", function() {
      window.location.href = "bulb on-off.html";
  });
  mathOperationsButton.addEventListener("click", function() {
      window.location.href = "mathematical operations.html";
  });
  registrationFormButton.addEventListener("click", function() {
      window.location.href = "registration form.html";
  });
  loginFormButton.addEventListener("click", function() {
      window.location.href = "login form.html";
  });
  loginormButton .addEventListener("click", function() {
    window.location.href = "armstrong no.html";
});
});
