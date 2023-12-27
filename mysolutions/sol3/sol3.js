
//function to calculate PAYE
//defining PAYE values
const payeBrackets = [24000,32333,500000,800000];
const payeRates = [0.1,0.25,0.3,0.325,0.35];

function calculatePayee(grossSalary){
    for(let i = 0; i < payeBrackets.length; i++){
        if(grossSalary <= payeBrackets[i]){
            return grossSalary * payeRates[i];
        }
    }
    // If the grossSalary is above the highest bracket, use the highest rate
    return grossSalary * payeRates[payeRates.length - 1];
}

//function to calculate NHIF deductions
//defining NHIF values
const nhifBrackets = [5999, 7999, 11999, 14999, 19999, 24999, 29999, 34999, 39999, 44999, 49999, 59999, 69999, 79999, 89999, 99999];
const nhifDeductions = [150, 300, 400, 500, 600, 750, 850, 900, 950, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700];

function calculateNHIF(grossSalary){
    for(let i = 0; i < nhifBrackets.length; i++){
        if (grossSalary <= nhifBrackets[i]){
            return nhifDeductions[i];
        }
    }
    //if grosssalary is above the highest bracket, use the highest deduction
    return nhifDeductions[nhifDeductions.length - 1];
}

//function to calculate NSSF deductions
//defining NSSF values
const nssfBrackets = [6000,18000];
const nssfRate = 0.06; // both the employer and employee contribute 6%

function calculateNSSF(grossSalary){
    let nssfDeduction = 0;
    //determining the tier based on grossSalary
    if(grossSalary <= nssfBrackets[0]){
        nssfDeduction = grossSalary * nssfRate;
    }
    else if(grossSalary <= nssfBrackets[1]){
        nssfDeduction = nssfBrackets[0] * nssfRate; //deduct 6% from the first bracket
    }
    else{
        nssfDeduction = nssfBrackets[1] * nssfRate; //deduct 6% from the second bracket
    }
    return nssfDeduction;
}


//function to calculate net salary
function calculateNetSalary(grossSalary,allDeductions){
    
 document.getElementById("calculateButton").addEventListener("click", function() {

    // Get the user's input on their gross salary
    const grossSalaryInput = document.getElementById("grossSalary");
    const grossSalary = parseFloat(grossSalaryInput.value);

    // Check if the input is a valid number
    if (isNaN(grossSalary)) {
        // Display an error message if the input is not a valid number
        alert("Please enter a valid number for gross salary.");
    } else {
        // Calculate deductions and net salary
        const payee = calculatePayee(grossSalary);
        const nhif = calculateNHIF(grossSalary);
        const nssf = calculateNSSF(grossSalary);
        const allDeductions = payee + nhif + nssf;

        // Calculate net salary
        const netSalary = calculateNetSalary(grossSalary,allDeductions);

        // Display the results in the container
        const resultContainer = document.getElementById("resultcontainer");
        resultContainer.innerHTML = `
            <p>Monthly Gross Salary: ${grossSalary}</p>
            <p>Benefits(NSSF contribution): ${nssf}</p>
            <p>PAYE(tax): ${payee}</p>
            <p>NHIF: ${nhif}</p>
            <p>Total Deductions: ${allDeductions}</p>
            <p>Net Salary: ${netSalary}</p>
        `;
    }
  });
  return grossSalary - allDeductions;
}
     

        


    
       

