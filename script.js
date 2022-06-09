// create a function that saves the value of element id user in a let variable named "user" and the value of element id pass in a let variable called "pass" and if user matches "ipga13" and pass matches "earthround" it redirects to the rickroll video
function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    if (user == "ipga13" && pass == "earthround") {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    else if (user == "generic" && pass == "p4ssw0rd") {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    else {
        alert("Wrong username or password");
    }
}
