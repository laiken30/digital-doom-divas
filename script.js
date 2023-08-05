// JavaScript code for the wellness function
console.log("Hello");

// Function to calculate mental health wellness score
function calculateWellnessScore() {
  // Get inputs from the user
  let stressLevel = parseInt(document.getElementById("stressLevel").value);
  let workLifeBalance = parseInt(
    document.getElementById("workLifeBalance").value
  );
  let selfCarePractices = parseFloat(
    document.getElementById("selfCarePractices").value
  );

  // Check if the inputs are valid
  if (
    isNaN(stressLevel) ||
    isNaN(workLifeBalance) ||
    isNaN(selfCarePractices)
  ) {
    alert("Please enter valid numeric values for all fields.");
    return;
  }

  // Calculate the wellness score
  let wellnessScore = (stressLevel + workLifeBalance + selfCarePractices) / 3;

  // Display the wellness score on the page
  document.getElementById("wellnessScore").innerHTML =
    "Your Wellness Score: " + wellnessScore.toFixed(2);
}
