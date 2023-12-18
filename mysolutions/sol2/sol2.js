//function to check speed and calculate demerit points
function checkCarSpeed(speed){
    let demeritpoints;
    if(speed < 70){
        alert("ok");
        return;
    }
    else{
        //calculate demerit points using Math.floor
        demeritpoints = Math.floor((speed-70) / 5);
        //print total demerit points
        alert("Your demerit points are:" + demeritpoints);
    }
    //check if license should be suspended
    if(demeritpoints > 12){
        alert("License suspended!!!");
        return;
    }
   
}

//function to get the speed of car from user
function getUserSpeed(){
    const speed = prompt("Enter the speed of car:");
    return parseFloat(speed);
}
//initialize carspeed variable to the getUserSpeed() function 
let carspeed = getUserSpeed();
//call the checkCarSpeed fuction
checkCarSpeed(carspeed);
