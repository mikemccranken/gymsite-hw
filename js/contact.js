$(document).ready(function() {
    const FIR = "Field is Required";
    const IZF = "Invalid Zip Format";
    const IPF = "Invalid Phone# Format";
    const YMC = "You Must Choose A Checkbox Option";


    // Move focus to the firstName textBox
    $("#firstName").focus();

    // Submit button click event handler
    $("#contact_form").submit(function (event) {
        event.preventDefault();

        let isValid = true;


        // Validate first name entry
        let firstName = $("firstName").val().trim;
        if (firstName === "") {
            $("firstName").next().text("First Name" + FIR);
            isValid = false;
        }
        else {
            $("firstName").next().text("");
        }


        // Validate last name entry
        let lastName = $("lastName").val().trim;
        if (lastName === "") {
            $("lastName").next().text("Last Name" + FIR);
            isValid = false;
        }
        else {
            $("lastName").next().text("");
        }



        // Validate address entry
        let address = $("address").val().trim;
        if (address === "") {
            $("address").next().text("Address" + FIR);
            isValid = false;
        }
        else {
            $("address").next().text("");
        }



        // Validate city entry
        let city = $("city").val().trim;
        if (city === "") {
            $("city").next().text("city" + FIR);
            isValid = false;
        }
        else {
            $("city").next().text("");
        }


        // Validate state entry
        let state = $("state").val().trim;
        if (state === "") {
            $("state").next().text("state" + FIR);
            isValid = false;
        }
        else {
            $("state").next().text("");
        }


        // Validate state entry
        stateDropdown = $("#state");
        if ((stateDropdown.length == 0) || $(stateDropdown).val() == "") {
            $("#state").next().text("State" + FIR);
            isValid = false;
        }
        else {
            $("#state").next().text("");
        }


        // Validate zip entry
        let zip = $("#zip").val().trim();
        if (zip === "") {
            $("zip").next().text("Zip Code" + FIR);
            isValid = false;
        }
        else {
            regexpZip = /^[0-9]{5}(?:-[0-9]{4})?$/;
            
            if (!regexpZip.test(zip)) {
                $("zip").next().text("Zip Code" + IZF);
                isValid = false;
            }
            else {
                $("zip").next().text("");
            }
        }

        // Validate phone entry
        let cellphone = $("#cellphone").val().trim();
        if (cellphone === "") {
            $("cellphone").next().text("Phone" + FIR);
            isValid = false;
        }
        else {
            regexpPhone =/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; 
 

            if (!regexpPhone.test(cellphone))
            {
                $("#cellphone").next().text(IPF);
                isValid = false;
            }
            else
            {
                $("#cellphone").next().text("");
            }
        }

        
    })




})