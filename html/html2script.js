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
      window.location.href = "html structure.html";
    });
      cssButton.addEventListener("click", function() {
      window.location.href = "headings.html";
    });
    JavaScriptButton.addEventListener("click", function()
     {
      window.location.href = " Comments.html";
    });
    XMLButton.addEventListener("click", function()
     {
      window.location.href = "ordered lists.html";
    });
    aButton.addEventListener("click", function()
     {
      window.location.href = "unordered lists.html";
    });
    a1Button.addEventListener("click", function()
     {
      window.location.href = "paragraphs.html";
    });
    a2Button.addEventListener("click", function()
     {
      window.location.href = "Adding Images.html";
    });
    a3Button.addEventListener("click", function()
     {
      window.location.href = "break tags.html";
    });
    a4Button.addEventListener("click", function()
     {
      window.location.href = "Href Links.html";
    });
    a5Button.addEventListener("click", function()
     {
      window.location.href = "formatting tags.html";
    });
    a6Button.addEventListener("click", function()
     {
      window.location.href = "basic table.html";
    });
    a7Button.addEventListener("click", function()
     {
      window.location.href = "table using colspan.html";
    });
    a8Button.addEventListener("click", function()
     {
      window.location.href = "table using rowspan.html";
    });
    a9Button.addEventListener("click", function()
     {
      window.location.href = "html entities.html";
    });
    a10Button.addEventListener("click", function()
     {
      window.location.href = "marquee.html";
    });
    a11Button.addEventListener("click", function()
     {
      window.location.href = "input types.html";
    });
    a12Button.addEventListener("click", function()
     {
      window.location.href = "basic form.html";
    });
    a13Button.addEventListener("click", function()
     {
      window.location.href = "";
    });
    a14Button.addEventListener("click", function()
     {
      window.location.href = "";
    });
    a15Button.addEventListener("click", function()
     {
      window.location.href = "";
    });
    a16Button.addEventListener("click", function()
     {
      window.location.href = "";
    });
    a17Button.addEventListener("click", function()
     {
      window.location.href = "";
    });
  });