

var username = prompt("Enter your name ");
alert ("Welcome to my webpage  "  + username );


var password = prompt("Enter a password:")
if (password.length < 8) {
    alert("Password must be atleast 8 characters long!")
} else {
    if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
        alert("Password must not start from number")
    } else {
        var hasAlphabet = false;
        var hasNumber = false;
        for (var i = 0; i < password.length; i++) {
            var charCode = password.charCodeAt(i)
            if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                hasAlphabet = true;
            } else if (charCode >= 48 && charCode <= 57) {
                hasNumber = true;
            }
        }
        if (hasAlphabet && hasNumber) {
            document.write("Valid Password")
        } else {
            alert("Password must contain both alphabet and numbers!")
        }
    }
}
