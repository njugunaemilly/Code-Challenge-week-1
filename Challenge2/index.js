//speed calculator
const showSpeed = ()=>{
    let speed = document.getElementById('speed').value;
    
    //first speed limitation
    if(speed<=70){
        document.getElementById("carSpeed").innerHTML= 'OK';
    }

    //other speed limitation
    else if (speed>70){
        let points = Math.floor((speed-70)/5);

        if (points >=12){
            document.getElementById("carSpeed").innerHTML = "License suspended";
        }
        else{
            document.getElementById("carSpeed").innerHTML = points + "points";
        }
    }
}