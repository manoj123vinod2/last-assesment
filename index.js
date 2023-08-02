
console.log(ps)
function handlesubmit(callback) {
    event.preventDefault();

    console.log('hii');
    var un = document.getElementById('uname').value 
    var ps = document.getElementById('pswd').value;

    console.log("username", un)

    if (un === "admin" && ps === "12345") {
        //    window.alert("Login Successful");
        callback()

    }
    else {
        alert("Login Failed");

    }
}

function validate() {
    window.location.href = "main.html"
}