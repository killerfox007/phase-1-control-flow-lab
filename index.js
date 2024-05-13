function scuberGreetingForFeet(feets){
  if (feets <= 400){
  return "This one is on me!"
}
else if (feets > 400 && feets <= 2000){
    return "That will be twenty bucks." 
} else if (feets > 2000 && feets < 2500){
  return "I will gladly take your thirty bucks."
} else {
  return 'No can do.'
  }
}


function ternaryCheckCity(city){
  if (city === "NYC"){
    return "Ok, sounds good."
} else {
  return "No go."
}
}
function switchOnCharmFromTip(tipping){
  if (tipping ==="generous"){
    return "Thank you so much."
} else if (tipping === 'not as generous'){
  return "Thank you."
} else {
  return "Bye."
}

}