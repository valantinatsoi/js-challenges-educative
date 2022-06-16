//1. Two input passwords must be identical
//2. Password must contain 1 digit
//3. Minimal password length 6 characters
//4. Validation results must be shown on the page with appropriate message for each

document.querySelector("form").addEventListener("submit", (e) => {
  const password1 = e.target.elements.password1.value;
  const password2 = e.target.elements.password2.value;
  let validityMessage = "Password is valid.";
  if (password1 === password2) {
    const minimalLength = 6;
    if (password1.length >= minimalLength) {
      const regexPassword = /\d+/;
      if (!regexPassword.test(password1)) {
        validityMessage = "Error: password must include one digit.";
      }
    } else {
      validityMessage = `Error: password must be at least ${minimalLength} characters long.`;
    }
  } else {
    validityMessage = "Error: password don't match.";
  }
  document.getElementById("passwordHelp").textContent = validityMessage;
  e.preventDefault();
});
