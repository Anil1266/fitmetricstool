// ===== Helper Functions =====

// Safely get numeric value
function getValue(id) {
  const el = document.getElementById(id);
  if (!el) return null;
  const val = parseFloat(el.value);
  return isNaN(val) ? null : val;
}

// Show result
function showResult(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = text;
}


// ===== BMI =====
function calculateBMI() {
  const w = getValue("weight");
  const h = getValue("height");

  if (w === null || h === null) {
    showResult("result", "Please enter valid weight and height.");
    return;
  }

  const heightM = h / 100;
  const bmi = (w / (heightM * heightM)).toFixed(1);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  showResult("result", `BMI: ${bmi} (${category})`);
}


// ===== BMR =====
function calculateBMR() {
  const w = getValue("weight");
  const h = getValue("height");
  const a = getValue("age");
  const gender = document.getElementById("gender")?.value || "male";

  if (w === null || h === null || a === null) {
    showResult("result", "Please enter all fields.");
    return;
  }

  let bmr;
  if (gender === "male") {
    bmr = 10 * w + 6.25 * h - 5 * a + 5;
  } else {
    bmr = 10 * w + 6.25 * h - 5 * a - 161;
  }

  showResult("result", `Your BMR is ${Math.round(bmr)} kcal/day`);
}


// ===== TDEE =====
function calculateTDEE() {
  const w = getValue("weight");
  const h = getValue("height");
  const a = getValue("age");
  const act = getValue("activity");
  const gender = document.getElementById("gender")?.value || "male";

  if (w === null || h === null || a === null || act === null) {
    showResult("result", "Please fill all fields.");
    return;
  }

  let bmr;
  if (gender === "male") {
    bmr = 10 * w + 6.25 * h - 5 * a + 5;
  } else {
    bmr = 10 * w + 6.25 * h - 5 * a - 161;
  }

  const tdee = bmr * act;

  showResult("result", `Your TDEE is ${Math.round(tdee)} kcal/day`);
}


// ===== WATER =====
function calculateWater() {
  const w = getValue("weight");

  if (w === null) {
    showResult("result", "Enter valid weight.");
    return;
  }

  const water = ((w * 35) / 1000).toFixed(2);

  showResult("result", `Water Intake: ${water} liters/day`);
}


// ===== IDEAL WEIGHT =====
function calculateIdealWeight() {
  const h = getValue("height");

  if (h === null) {
    showResult("result", "Enter valid height.");
    return;
  }

  const weight = ((h - 100) * 0.9).toFixed(1);

  showResult("result", `Ideal Weight: ${weight} kg`);
}
