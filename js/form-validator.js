// Form Validator Script

function validateForm() {
    var firstname = document.forms["ApplyForVoucherForm"]["first_name"].value;
	 var lastname = document.forms["ApplyForVoucherForm"]["last_name"].value;
	 var email = document.forms["ApplyForVoucherForm"]["email"].value;
    if (firstname == null || firstname == "") {
        alert("First name must be filled out in order t proceed.");
        return false;
    }
	
    if (lastname == null || lastname == "") {
        alert("Last name must be filled out in order to proceed.");
        return false;
    }
	
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=z.length) {
        alert("Please type your company email address into the Company Email field!");
        return false;
    }
	
}