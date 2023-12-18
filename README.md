# Toyproblemphase1
## Author Name
Eva Nyakio

## Running Instructions
1. Ensure node is installed
2. To run a file use node filename.js
3. enter student marks as prompted

## More Information about the project
1. ### Student Grade Generator 
#### Introduction
This program requests a user to input student marks, within a range of 0 to 100. Then generates the equivalent grades in the creteria of A to E.

#### Human Statements
1. student marks are numbers
2. The numbers are between 0 and 100
3. Output required is in uppercase letters, A to E
4. Output will be from the comparison between the numbers recieved from the  user and  the criteria for grading
5. Input will be from prompting the user to enter a number
6. Output from this will be the corresponding grade letter
7. The name of our program will be student grade generator

#### Pseudo code
1. function name is generateGrade()
2. Variable names are: let grade; and let usermarks;
3. prompt the user to enter student marks(between 0 and 100)
4. use if and else if statements
5. validate the input to ensure it's a number
6. validate the input to ensure it's a whole number
7. Determine the corresponding grade based on the input
8. Display the grade to the user

2. ## Speed Detector 
#### Running instructions:
- Run the program in browser from htm file
- enter the speed of car as prompted.
#### Introduction
This program takes the speed of car as input from user and checks if its above the speed limit. Then it calculates demerit points for speed above limit, and if the demerit points are above 12 it tells the user their license has been suspended!
#### Human statements
1. Speed, which is distance/time is in KM/s and also the input
2. Speed is inform of a number
3. if the speed is more than 70 the program will print 'ok'
4. output is a word
5. The speed limit is 70 km/hr
6. if the speed is more than 70, the program calculates demerit points
7. One demerit point is equal to 5km/hr
8. for more than 12 points the output should be 'License suspended!'

#### Pseudo code
- Function name to check the speed of car- function checkCarSpeed()
- The function checks the speed of car and calculates the demerit points
- The function has one parameter; speed
- Use if else statements
- If(speed is less than 70) print "ok"  else calculate demerit points
- Use math.floor to calculate demerit points (this ensures the points are calculated as whole numbers)
- demerit points= math.floor((speed-70) / 5) 
- The speed-70/5 calculates how many times the speed is 5km above speed limit
- print total demerit points
- check if license should be suspended with an if statement 
- if demerit points are more than 12 the program prints 'license suspended'
- Function to get speed of car from user - function getUserSpeed()
- prompt the user to enter speed of car
- use parsefloat to get the input in floating-point numbers which will be rounded down later by the math.floor()
- initialize carspeed variable to the getUserSpeed() function 
- call the checkCarSpeed() function passing in carspeed as the argument.


3. ### Net Salary Calculator
#### Introduction
This program calculates the user's net salary with basic salary benefits and payee inputs.

#### Running instructions:
- Run the program in the browser
- enter basic salary and benefits when prompted
#### Human statements
- calculator that gives each individual's net salary by taking in the inputs unique to each user
- Net salary is calculated by subtracting Gross salary and deductions
- Gross salary is the basic salary + benefits(allowances,bonus,compesations)
- deductions include tax, NHIF, NSSF
- Tax = paye according to rates from 1 July 2023, are available in the links provided together with NHIF and NSSF.

#### Pseudo Code
1. Ask the user to enter their basic salary
2. Ask the user to enter their benefits
3. Calculate the gross salary - basic salary + benefits using function calculatesGrossSalary(), basicsalary and benefits as parameters
4. Calculate paye by defining the tax brackets and rates using a function- function calculatesPaye(), grosssalary parameter,for loop,
5. Calculate NHIF deduction based on the gross salary using function calculateNHIF(grosssalary)
6. Calculate NSSF deduction also based on gross salary using function calculateNSSF(grosssalary)
7. Calculate the Net salary - Gross salary - deductions using function calculateNetSalary(basic salary,benefits)
8.
