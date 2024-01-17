var user = { username: "", Password: "" };
var userArray = [{ username: "Menna", Password: "menna1234" }];
var usersArray = [{ username: "Arwa", Password: "Arwa123" }];
function check() {
    var username = document.getElementById('usrname').value;
    var Password = document.getElementById('Pasword').value;
    var radio_button1 = document.getElementById('radio_button1');
    var radio_button2 = document.getElementById('radio_button2');

    if (radio_button1.checked == userArray.radio_button1) {
        return true;
        window.location.href = "homepageuser.html";
    }
    else if (radio_button2.checked == usersArray) {
        window.location.href = "homepageseller";
    }
    for (var i = 0; i < userArray.length; i++) {
        if (username === userArray[i].username && Password === userArray[i].Password) {
            alert('Login successful');
            console.log(userArray[i].username + " " + userArray[i].Password);
            return;
        }
        usersArray.push(user);
        alert("Sign up successful for " + user.username);
        console.log(usersArray);
        window.location.href = "login2.html";
    }
    alert('Invalid username or password');
}