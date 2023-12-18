const readline = require('readline');
//function that generates grade according to the user's input
function generateGrade(){
    const rl = readline.createInterface({
        input: process.stdin ,
        output: process.stdout
    });
  //prompt the user for input
  let usermarks;
    rl.question('Enter student marks (between 0 and 100):' , (usermarks)) => {
        //validate user input
        if(isNaN (usermarks)){
            console.log('Invalid input. Please enter a number!');
            rl.close();
            return;
        }
        if(!Number.isInteger(usermarks)){
            console.log('Decimals not allowed. Please enter a whole number!');
            rl.close();
            return;
        }
        //validate input range
        if(usermarks < 0 || usermarks > 100){
            console.log('Invalid input. Please enter marks between o and 100.');
            rl.close();
            return;
        }
        //generate the grade
        let grade;
        if(usermarks > 79){
            grade = 'A';
        }
        else if(usermarks >= 60){
            grade = 'B';
        }
        else if(usermarks >= 50){
            grade = 'C';
        }
        else if(usermarks >= 40){
            grade = 'D';
        }
        else{
            grade = 'E';
        }
        //display the grade = output
        console.log('The grade for ${usermarks} marks is: ${grade})');
        rl.close();

    };
}
//call the function
generateGrade();
