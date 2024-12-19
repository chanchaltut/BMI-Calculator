function calculateBMI() {
  let heightFeet = parseFloat(document.querySelector("#height-feet").value);
  let heightInch = parseFloat(document.querySelector("#height-inch").value);
  let weight = parseFloat(document.querySelector("#weight").value);
  let resultPara = document.querySelector(".result-para");

  if (
    isNaN(heightFeet) ||
    isNaN(heightInch) ||
    isNaN(weight) ||
    heightFeet <= 0 ||
    heightInch < 0 ||
    weight <= 0
  ) {
    resultPara.textContent = "Please enter valid height and weight values.";
    resultPara.style.color = "red";
    return;
  }

  let height = (heightFeet * 12 + heightInch) * 2.54;

  let BMI = (weight / ((height * height) / 10000)).toFixed(2);

  let fitness;
  if (BMI < 18.5) {
    fitness = "You are Underweight";
  } else if (BMI >= 18.5 && BMI <= 24.99) {
    fitness = "You are fit";
  } else if (BMI >= 25 && BMI <= 29.99) {
    fitness = "You are Overweight";
  } else if (BMI >= 30 && BMI <= 34.99) {
    fitness = "You come under Obesity I class";
  } else if (BMI >= 35) {
    fitness = "You come under Obesity II class";
  }

  let result = `Your BMI is ${BMI}, ${fitness}`;
  resultPara.textContent = result;
}
