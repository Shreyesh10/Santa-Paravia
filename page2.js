let grainReserve = 0;


function myFunction()
{
    let userInput = document.getElementById("userInput").value;
    let message = document.getElementById("message");
    let genderInput = document.getElementById("genderInput").value;
    let gender= genderInput.charAt(0);
    // Checking if the player is male or female.
    if(gender.toLowerCase() === "m"){
        message.innerHTML= "Sir " + userInput + " of Santa Paravia" + "<br>" +
        " Rats ate " + pergrainReserve() + "% of your grain reserves!" + "<br>" +
        ".... weather ... harvest";
    }
    else{
        message.innerHTML= "Lady " + userInput + " of Santa Paravia" + "<br>" +
    " Rats ate " + pergrainReserve() + "% of your grain reserves!" + "<br>" +
    ".... weather ... harvest";
    }
    
}

// Function to calculate percentage of rain Reserve.
function pergrainReserve()
{
  grainReserve= Math.floor(Math.random() *51);
  return grainReserve;
}

// Function to create type of weather.
function weather()
{

}

// Function to create random harvest.
function harvest()
{

}

