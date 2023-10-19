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
    const cssButton = document.getElementById("t2");
    const JavaScriptButton=document.getElementById("t3");
    const XMLButton=document.getElementById("t4");
    const aButton=document.getElementById("t5");
    const a1Button=document.getElementById("t6");
    const a2Button=document.getElementById("t7");
    const a3Button=document.getElementById("t8");
    const a4Button=document.getElementById("t9");
    const a5Button=document.getElementById("t10");
    const a6Button=document.getElementById("t11");
    const a7Button=document.getElementById("t12");
    const a8Button=document.getElementById("t13");
    const a9Button=document.getElementById("t14");
    const a10Button=document.getElementById("t15");
    const a11Button=document.getElementById("t16");
    const a12Button=document.getElementById("t17");
    htmlButton.addEventListener("click", function()
     {
      window.location.href = "internal.xml";
    });
      cssButton.addEventListener("click", function() {
      window.location.href = "externaldtd.xml";
    });
    JavaScriptButton.addEventListener("click", function()
     {
      window.location.href = "studentdetails.xml";
    });
    XMLButton.addEventListener("click", function()
     {
      window.location.href = "bank.xml";
    });
    aButton.addEventListener("click", function()
    {
      window.location.href = "student details.xml";
    });
    a1Button.addEventListener("click", function()
    {
      window.location.href = "entity.xml";
    });
  });
  

