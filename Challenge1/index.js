//variable 
const results =()=>{

    //should check through grade
    //show output
let stdMarks = document.getElementById('score').value;

if (stdMarks>=80 && stdMarks<=100){
    document.getElementById('result').innerHTML= "A";
}

else if(stdMarks>=60 && stdMarks<=79){
    document.getElementById('result').innerHTML="B";
}

else if (stdMarks >=59 && stdMarks<=49){
    document.getElementById('result').innerHTML= "C";
}

else if (stdMarks >=49 && stdMarks>=40){
    document.getElementById('result').innerHTML= "D";
}

else if (stdMarks>=0 && stdMarks<=40){
    document.getElementById('result').innerHTML= "E";
}
}