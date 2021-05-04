$(document).ready(function () {
    $("#submitButton").on("click", calculateBmi);
})

function calculateBmi(event) {
    event.preventDefault();
    let valid1 = false;
    let valid2= false;

    if ($("#bodyHeight").val()===""){
        $("#bodyHeightCorrection").text("The height cannot be left blank.")
        valid1 = false;
    }
    else if ($("#bodyHeight").val() > 79){
        $("#bodyHeightCorrection").text("The height cannot be greater than 79.")
        valid1 = false;
    }
    else if ($("#bodyHeight").val() < 59){
        $("#bodyHeightCorrection").text("The height cannot be less than 59.")
        valid1 = false;
    }
    else {
        $("#bodyHeightCorrection").text("")
        valid1 = true;
    }

    if ($("#bodyWeight").val()===""){
        $("#bodyWeightCorrection").text("The weight cannot be left blank.")
        valid2 = false;
    }
    else if ($("#bodyWeight").val() > 353){
        $("#bodyWeightCorrection").text("The weight cannot be greater than 353.")
        valid2 = false;
    }
    else if ($("#bodyWeight").val() < 88){
        $("#bodyWeightCorrection").text("The weight cannot be less than 88.")
        valid2 = false;
    }
    else {
        $("#bodyWeightCorrection").text("")
        valid2 = true;
    }

    if (valid1 && valid2){
        let height = $("#bodyHeight").val();
        let weight = $("#bodyWeight").val();
        let bodyMassIndex = ((weight *703)/(height*height)).toFixed(1);
        let category ="";
        if (bodyMassIndex<15){
            category ="Very severely underweight";
        }
        else if (bodyMassIndex<16){
            category = "Severely underweight";
        }
        else if (bodyMassIndex<18.5){
            category = "Underweight";
        }
        else if (bodyMassIndex<25){
            category = "Healthy weight";
        }
        else if (bodyMassIndex<30){
            category = "Overweight";
        }
        else if (bodyMassIndex<35){
            category = "Moderately obese";
        }
        else if (bodyMassIndex<40){
            category = "Severely obese";
        }
        else{
            category = "Very severely obese";
        }
        let message = "Your BMI is "+bodyMassIndex +" - "+ category;
        $("#bmiOutput").text(message)
    }
}