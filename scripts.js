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

  let tdee=Math.round(bmr*act);

  let lose = tdee - 500;
  let gain = tdee + 500;

  show(`
    <div style="padding:20px; border-radius:12px; background:#020617;">
      
      <h2 style="color:#22c55e">${tdee} kcal/day</h2>

      <div style="background:#1e293b; height:10px; border-radius:5px; margin:10px 0;">
        <div style="width:70%; height:10px; background:#22c55e; border-radius:5px;"></div>
      </div>

      <p>Maintain: ${tdee}</p>
      <p>Lose: ${lose}</p>
      <p>Gain: ${gain}</p>

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


function calculateIdealWeight(){
  let h=getVal("height");

  if(!h){
    show("Enter height");
    return;
  }

  let weight=((h-100)*0.9).toFixed(1);

  show(`
    <div style="padding:15px; border-radius:10px; background:#020617;">
      <h2 style="color:#22c55e">${weight} kg</h2>
      <p>Your estimated ideal body weight.</p>
      <p>👉 Next: <a href="tdee-calculator.html">Check calorie needs</a></p>
    </div>
  `);
}

#result div {
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  transition: 0.3s;
}
