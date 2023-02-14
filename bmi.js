function calculateBMI() {
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight").value;
  var height = 1.7;  // Assuming height is 1.7m for everyone in this example
  var index = weight / (height ** 2);
  var resultElement = document.getElementById("result");
  if (index < 19) {
    resultElement.innerHTML = "[+] You're Under-Weight...";
  } else if (index < 30) {
    resultElement.innerHTML = "[+] Your Weight Is Normal.. :)";
  } else if (index < 35) {
    resultElement.innerHTML = "[+] You're Over-Weighted";
  } else {
    resultElement.innerHTML = "[+] You're  An Obese [ Means: Fatty +++++ ]";
  }
}
