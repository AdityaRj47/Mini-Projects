function computeBMI(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    let cond = ""; let color="";


    if(height && weight) {
        
        const cHeight = height / 100;
        const bmi = weight / Math.pow(cHeight,2);
        document.getElementById("bmiResult").value = bmi.toFixed(2);

        switch(true){
           case (bmi < 18.5):
               cond = "Underweight"; 
               color = "yellow";
               break;
           case (bmi >= 18.5 && bmi <= 24.9):
               cond = "Normal weight";
               color = "green";
                break;
           case (bmi >= 25.0 && bmi <= 29.9):
               cond = "Overweight";
               color = "orange"; 
               break;
           default:
               cond = "Obesity";
               color = "red";
                break;
        }
    } 
    const displayElement = document.getElementById("bmiCondition");
    displayElement.textContent = `Weight condition : ${cond}`;
    displayElement.style.color = color;
}
