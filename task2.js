function checkAge() {
  let age = prompt("Enter your age");
  if (age == "" || isNaN(age) == true || +age < 14) {
    throw new Error("Your age is not correct Please enter your age");
  }
  document.write("Your film:");
}

try {
  checkAge();
} catch (error) {
  alert(error.name + "! " + error.message);
}


