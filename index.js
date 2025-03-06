function scuberGreetingForFeet(distance){
  if (distance <= 400 ){
    return "This one is on me!"
  }

  else if(distance >400 && distance<=2000){
    return 'That will be twenty bucks.';
  }

  else if (distance>2000 && distance<=2500){
    return "I will gladly take your thirty bucks.";
  }
  else{
    return"No can do.";
  }
  // Write your code here!
}

function ternaryCheckCity(city){
  // Write your code here!
  //return city === "NYC" ? "Ok, sounds good." : "No go.";>>>>> alternative
  if (city === "NYC"){
    return"Ok, sounds good.";
  }
  else{
    return"No go.";
  }
  
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  if(tip === 'generous'){
    return "Thank you so much."
  }
  else if (tip === 'not as generous'){
    return "Thank you.";
  }
  else(tip ==="!!generous" )
  return "Bye.";
    // ALTERNATIVELY
    // switch (tip) {
    //   case "generous":
    //     return "Thank you so much.";
    //   case "not as generous":
    //     return "Thank you.";
    //   default:
    //     return "Bye."; 
  
}
