//function to calculate gross salary
function calculateGrossSalary(basicsalary,benefits){
    return basicsalary + benefits;
}
//function to calculate PAYE(Tax)
function calculatePaye(grossSalary){
    //the tax brackets and rates as of July 2023
    const taxBrackets = [24000,32333,500000,800000];
    const taxRates = [10,25,30,35];

    let tax = 0;

    for(let i = 0; i < taxBrackets.length; i++){
        if (grossSalary > taxBrackets[i]){
            tax += (grossSalary - taxBrackets[i]) * taxRates[i];
            grossSalary = taxBrackets[i];
        }
    }
    return tax;
}
// function to calculate NHIF Deductions
function calculateNHIF(grossSalary){
    //NHIF rates according to gross salary
    const nhifRates= [150,300,400,500,600,750,850,900,950,1000,1100,1200,1300,
    1400,1500,1600,1700];
    //getting the nhif idex based on grossSalary using Math.ceil, since nhif rates change every time gross salary is 5000.
    const index = Math.ceil(grossSalary/5000) - 1 ;
    //returning the NHIF deduction using Math.min for the upper limit to ensure the index is within the nhif rates array
    return Math.min(nhifRates[index], 1700);

}
// function that calculates NSSF deductions
function calculateNSSF(grossSalary){
//nssf contribution limits
 const tier2lowerlimit = 6001;
 const tier2limit = 18000;
//nssf contribution based on gross salart and rates
 const nssfRate = 0.06;
  if(grossSalary <= tier2lowerlimit){
    return grossSalary * nssfRate;
 }
  else if(grossSalary <= tier2limit){
    return tier2limit * nssfRate;
 }
  else{
    return (grossSalary - tier2limit) * nssfRate;
 }
}
// function to calculate net salary
function calculateNetSalary(basicsalary,benefits){
    const grossSalary = calculateGrossSalary(basicsalary, benefits);
    const tax = calculatePaye(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    return grossSalary - tax - nhif - nssf;
}
//when running the program
const basicsalary = parseFloat(prompt("Enter your basic salary:"));
const benefits = parseFloat(prompt("Enter your benefits"));
const netsalary = calculateNetSalary(basicsalary,benefits);
