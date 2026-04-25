function calculateTDEE(){
  let w=getVal("weight");
  let h=getVal("height");
  let a=getVal("age");
  let act=getVal("activity");
  let g=document.getElementById("gender").value;

  if(!w || !h || !a || !act){
    show("Fill all fields");
    return;
  }

  let bmr = (g==="male") ?
    (10*w+6.25*h-5*a+5) :
    (10*w+6.25*h-5*a-161);

  let tdee=bmr*act;

  show(`
    <div style="padding:15px; border-radius:10px; background:#020617;">
      <h2 style="color:#22c55e">${Math.round(tdee)} kcal/day</h2>
      <p>Maintain weight: ${Math.round(tdee)}</p>
      <p>Lose weight: ${Math.round(tdee-500)}</p>
      <p>Gain weight: ${Math.round(tdee+500)}</p>
    </div>
  `);
}

function calculateWater(){
  let w=getVal("weight");

  if(!w){
    show("Enter weight");
    return;
  }

  let water=(w*35/1000).toFixed(2);

  show(`
    <div style="padding:15px; border-radius:10px; background:#020617;">
      <h2 style="color:#3b82f6">${water} L/day</h2>
      <p>Stay hydrated for better health.</p>
    </div>
  `);
}
