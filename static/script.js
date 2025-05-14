function calculateBMI() {
  const heightInput = document.getElementById('height').value;
  const weightInput = document.getElementById('weight').value;
  const resultDiv = document.getElementById('result');

  const height = parseFloat(heightInput);
  const weight = parseFloat(weightInput);

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultDiv.style.color = 'red';
    resultDiv.textContent = 'Please enter valid positive numbers for height and weight.';
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const roundedBMI = bmi.toFixed(2);

  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
    resultDiv.style.color = '#17a2b8'; // info color
  } else if (bmi < 25) {
    category = 'Normal weight';
    resultDiv.style.color = '#28a745'; // success color
  } else if (bmi < 30) {
    category = 'Overweight';
    resultDiv.style.color = '#ffc107'; // warning color
  } else {
    category = 'Obese';
    resultDiv.style.color = '#dc3545'; // danger color
  }

  resultDiv.textContent = `Your BMI is ${roundedBMI} (${category})`;
}

function clearResult() {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = '';
}
