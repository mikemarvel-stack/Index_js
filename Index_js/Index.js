// Function to greet based on the distance in feet
function scuberGreetingForFeet(someValue) {
    if (someValue <= 400) {
      return "This one is on me!";
    } else if (someValue > 400 && someValue <= 2000) {
      return "That will be twenty bucks.";
    } else if (someValue > 2000 && someValue <= 2500) {
      return "I will gladly take your thirty bucks.";
    } else {
      return "No can do.";
    }
  }
  
  // Function to check city and return a response using ternary operator
  function ternaryCheckCity(city) {
    return city === "NYC" ? "Ok, sounds good." : "No go.";
  }
  
  // Function to respond based on tip using a switch statement
  function switchOnCharmFromTip(tip) {
    switch (tip) {
      case "generous":
        return "Thank you so much.";
      case "not as generous":
        return "Thank you.";
      default:
        return "Bye.";
    }
  }
  