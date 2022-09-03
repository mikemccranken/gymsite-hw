$(document).ready(function() {

    /* 
    BMI < 18.5 - UNDERWEIGHT
    BMI >= 18.5 and < 25    - OPTIMAL WEIGHT
    BMI >= 25 and < 30      - OVERWEIGHT
    BMI >= 30               - OBESE
    */


    // Declare and initialize program constants
    const MINHEIGHT     = 12;
    const MAXHEIGHT     = 96;
    const MINWEIGHT     = 1;
    const MAXWEIGHT     = 777;


    const MINOPTIMAL    = 18.5;
    const MINOVER       = 25.0;
    const MINOBESE      = 30.0;


    // Declare and initialize program variables
    let isValid = true;
    let status = "";
    let result = "";


    // Handle out-of-range height input
    function heightError() {
        $("#height").next().text("*")
    }


    // Handle out-of-range weight input
    function weightError() {
        $("#weight").next().text("*")
    }


    // Calculate BMI
    function calculateTheBMI() {
        let height = parseInt($("#height").val());
        let weight = parseInt($("#weight").val());


        // Verify that height is in range, i.e. that the height is numeric and is between 12-96.
        if (isNaN(height) || (height < MINHEIGHT) || (height > MAXHEIGHT))
        {
            // Will show a height error msg on-screen for 5 seconds, then it will disappear.
            $("#height".next.text(`A height between ${MINHEIGHT} and ${MAXHEIGHT} is required`));
        
        isValid = false;
        setTimeout(heightError,5000);
        $("#height").val("");
        document.getElementById("height").focus();
        return;
        }
    
    else 
        {
        $("#height").next().text("");
        }


        // Verify that weight is in range, i.e. that the weight is numeric and is between 12-96.
        if (isNaN(weight) || (weight < MINWEIGHT) || (weight > MAXWEIGHT))
        {
            // Will show a weight error msg on-screen for 5 seconds, then it will disappear.
            $("#weight".next.text(`A weight between ${MINWEIGHT} and ${MAXWEIGHT} is required`));
        
        isValid = false;
        setTimeout(weightError,5000);
        $("#weight").val("");
        document.getElementById("weight").focus();
        return;
        }
    
    else 
        {
        $("#weight").next().text("");
        }


        // Calculate BMI, then format to 2 decimal places
        result = (weight * 703) / (height * height);
        result = parseFloat(result.toFixed(2));

        // Put BMI in BMI textbox
        $("#result").val(result);
        status = result
    }

    // Calculate BMI status
    function setTheBMIStatus() {
        if (status < MINOPTIMAL) {
            // BMI < 18.5
            status = "Underweight";
        }
        else if ((status >= MINOPTIMAL) && (status < MINOVER)) {
            // BMI >= 18.5 && < 25
            status = "Optimal Weight";
        }
        else if ((status >= MINOVER) && (status < MINOBESE)) {
            //BMI >= 25 && < 30
            status = "Overweight";
        }
        else if (status >= MINOBESE)  {
            status = "Obese";
        }
    }

    function clearALL() {
        height = $("#height").val("");
        $("#height").next().text("");
        weight = $("#weight").val("");
        $("#weight").next().text("");
        result = $("#result").val("");
        $("#result").next().text("");
        status = $("#status").val("");
        $("#status").next().text("");
    }


    $("#calculate").click(function (evt){
        evt.preventDefault();

        // Call calculateTheBMI() function
        calculateTheBMI();

        // Call calculateTheBMIStatus() function
        setTheBMIStatus();
    });


    $("#clear").click(function (evt) {
        clearALL();
    });
});