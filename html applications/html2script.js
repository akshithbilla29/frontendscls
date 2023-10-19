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
  const a = document.getElementById("t1");
  const b = document.getElementById("t2");
  const c = document.getElementById("t3");
  const d = document.getElementById("t4");
  const a0 = document.getElementById("t5");
  const a1 = document.getElementById("t6");
  const a2 = document.getElementById("t7");
  const a3 = document.getElementById("t8");
  const a4 = document.getElementById("t9");
  const a5 = document.getElementById("t10");
  const a6 = document.getElementById("t11");
  const a7 = document.getElementById("t12");
  const a8 = document.getElementById("t13");
  const a9 = document.getElementById("t14");
  const a10 = document.getElementById("t15");
  a.addEventListener("click", function()
   {
    window.location.href = "biodata.html";
  });
    b.addEventListener("click", function() {
    window.location.href = "student registration form.html";
  });
  c.addEventListener("click", function()
   {
    window.location.href = "user registration form.html";
  });
  d.addEventListener("click", function()
   {
    window.location.href = "student information form.html";
  });
  a0.addEventListener("click", function()
   {
    window.location.href = "signup form.html";
  });
  a1.addEventListener("click", function()
   {
    window.location.href = "time table.html";
  });
  a2.addEventListener("click", function()
   {
    window.location.href = "personal details form.html";
  });
  a3.addEventListener("click", function()
   {
    window.location.href = "calender.html";
  });
  a4.addEventListener("click", function()
   {
    window.location.href = "drop down list.html";
  });
  a5.addEventListener("click", function()
   {
    window.location.href = "Connecting Web Pages Using Links.html";
  });
  a6.addEventListener("click", function()
   {
    window.location.href = "connect about.html";
  });
  a7.addEventListener("click", function()
   {
    window.location.href = "connect home.html";
  });
  a8.addEventListener("click", function()
   {
    window.location.href = "connect contact.html";
  });
  a10.addEventListener("click", function()
   {
    window.location.href = "desktop screen.html";
  });
  });