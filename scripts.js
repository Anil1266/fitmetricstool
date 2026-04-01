function calculateBMI(){
let w=document.getElementById("weight").value
let h=document.getElementById("height").value/100
let bmi=(w/(h*h)).toFixed(1)
document.getElementById("result").innerHTML="BMI: "+bmi
}

function calculateBMR(){
let w=document.getElementById("weight").value
let h=document.getElementById("height").value
let a=document.getElementById("age").value
let bmr=(10*w)+(6.25*h)-(5*a)+5
document.getElementById("result").innerHTML="BMR: "+bmr
}

function calculateTDEE(){
let w=document.getElementById("weight").value
let h=document.getElementById("height").value
let a=document.getElementById("age").value
let act=document.getElementById("activity").value
let bmr=(10*w)+(6.25*h)-(5*a)+5
let tdee=bmr*act
document.getElementById("result").innerHTML="TDEE: "+tdee
}

function calculateWater(){
let w=document.getElementById("weight").value
let water=(w*35)/1000
document.getElementById("result").innerHTML="Water: "+water+" L/day"
}

function calculateIdealWeight(){
let h=document.getElementById("height").value
let weight=(h-100)*0.9
document.getElementById("result").innerHTML="Ideal Weight: "+weight+" kg"
}
