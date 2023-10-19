
document.addEventListener("DOMContentLoaded", function() {
    const htmlButton = document.getElementById("ht1");
    const cssButton = document.getElementById("ht2");
    const JavaScriptButton=document.getElementById("ht3");
    const XMLButton=document.getElementById("ht4");
    htmlButton.addEventListener("click", function()
     {
        window.alert("Go to HTML ")
      window.location.href = "html.html";
    });
      cssButton.addEventListener("click", function() {
        window.alert("Go to CSS")
      window.location.href = "css/css.html  ";
    });
    JavaScriptButton.addEventListener("click", function()
     {
        window.alert("Go to JavaScript")
      window.location.href = "javascript/javascript.html";
    });
    XMLButton.addEventListener("click", function()
     {
        window.alert("Go to XML")
      window.location.href = "xml/xml.html";
    });
  });
  