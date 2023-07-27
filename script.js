var emailInput = document.getElementById("email");
var invalidEmailText = document.getElementById("invalid-email-text");
const subscribeBtn = document.getElementById("subscribe-btn");

emailInput.addEventListener("input", function() {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput.value)) {
    invalidEmailText.style.display = "none";
    emailInput.style.border = "1px solid #dddddd";
    emailInput.style.color = "#242742";
    emailInput.style.fontWeight = "400";
    emailInput.style.backgroundColor = "white";
  } else {
    invalidEmailText.style.display = "block";
    emailInput.style.border = "solid #ff6257";
    emailInput.style.color = "#ff6257";
    emailInput.style.fontWeight = "700";
    emailInput.style.backgroundColor = "#fff1f0";
  }
});

subscribeBtn.addEventListener("click", function() {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput.value)){
    window.location.href = `success.html?email=${encodeURIComponent(emailInput.value)}`
  }
});