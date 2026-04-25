function calculateBMI(){
  let w=getVal("weight");
  let h=getVal("height")/100;

  if(!w || !h){
    show("Please enter valid inputs");
    return;
  }

  let bmi=(w/(h*h)).toFixed(1);

  let status="", color="";
  if(bmi<18.5){ status="Underweight"; color="#3b82f6"; }
  else if(bmi<25){ status="Normal"; color="#22c55e"; }
  else if(bmi<30){ status="Overweight"; color="#facc15"; }
  else { status="Obese"; color="#ef4444"; }

  show(`
    <div style="padding:15px; border-radius:10px; background:#020617;">
      <h2 style="color:${color}">BMI: ${bmi}</h2>
      <p>Status: <strong>${status}</strong></p>
      <p>👉 Next: <a href="bmr-calculator.html">Calculate BMR</a></p>
    </div>
  `);
}
