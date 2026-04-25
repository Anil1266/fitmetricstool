// ===== Helper Functions =====
function getVal(id){
  const el = document.getElementById(id);
  if(!el) return null;
  const val = parseFloat(el.value);
  return isNaN(val) ? null : val;
}

function show(text){
  document.getElementById("result").innerHTML = text;
}

// ===== BMI =====
function calculateBMI(){
  let w=getVal("weight");
  let h=getVal("height");

  if(w===null || h===null){
    show("Please enter valid inputs");
    return;
  }

  let hm=h/100;
  let bmi=(w/(hm*hm)).toFixed(1);

  let cat="";
  if(bmi<18.5) cat="Underweight";
  else if(bmi<25) cat="Normal";
  else if(bmi<30) cat="Overweight";
  else cat="Obese";

  show(`BMI: ${bmi} (${cat})`);
}

// ===== BMR =====
function calculateBMR(){
  let w=getVal("weight");
  let h=getVal("height");
  let a=getVal("age");
  let g=document.getElementById("gender").value;

  if(w===null || h===null || a===null){
    show("Fill all fields");
    return;
  }

  let bmr = (g==="male") ?
    (10*w+6.25*h-5*a+5) :
    (10*w+6.25*h-5*a-161);

  show(`BMR: ${Math.round(bmr)} kcal/day`);
}

// ===== TDEE =====
function calculateTDEE(){
  let w=getVal("weight");
  let h=getVal("height");
  let a=getVal("age");
  let act=getVal("activity");
  let g=document.getElementById("gender").value;

  if(w===null || h===null || a===null || act===null){
    show("Fill all fields");
    return;
  }

  let bmr = (g==="male") ?
    (10*w+6.25*h-5*a+5) :
    (10*w+6.25*h-5*a-161);

  let tdee=bmr*act;

  show(`TDEE: ${Math.round(tdee)} kcal/day`);
}

// ===== WATER =====
function calculateWater(){
  let w=getVal("weight");

  if(w===null){
    show("Enter weight");
    return;
  }

  let water=((w*35)/1000).toFixed(2);
  show(`Water: ${water} L/day`);
}

// ===== IDEAL WEIGHT =====
function calculateIdealWeight(){
  let h=getVal("height");

  if(h===null){
    show("Enter height");
    return;
  }

  let weight=((h-100)*0.9).toFixed(1);
  show(`Ideal Weight: ${weight} kg`);
}
