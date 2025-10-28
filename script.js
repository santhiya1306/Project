function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const mobile = document.getElementById("mobile").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const country = document.getElementById("country").value;
  const message = document.getElementById("message");


  // Email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  // Mobile number validation regex (10 digits)
  const mobilePattern = /^[0-9]{10}$/;


  // Validation checks
  if (name === "" || email === "" || password === "" || confirmPassword === "" || mobile === "" || !gender || country === "") {
    message.style.color = "red";
    message.innerText = "Please fill out all fields!";
    return false;
  }


  if (!emailPattern.test(email)) {
    message.style.color = "red";
    message.innerText = "Invalid email format!";
    return false;
  }


  if (!mobilePattern.test(mobile)) {
    message.style.color = "red";
    message.innerText = "Mobile number must be 10 digits!";
    return false;
  }


  if (password.length < 6) {
    message.style.color = "red";
    message.innerText = "Password must be at least 6 characters!";
    return false;
  }


  if (password !== confirmPassword) {
    message.style.color = "red";
    message.innerText = "Passwords do not match!";
    return false;
  }


  message.style.color = "green";
  message.innerText = "✅ Registration Successful!";
  return false; // Prevent form from actually submitting (for demo)
}
