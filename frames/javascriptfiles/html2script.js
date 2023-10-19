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

 