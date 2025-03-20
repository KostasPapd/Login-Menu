let usersList = [];
import CryptoJS from 'crypto-js';

function loginMenu() {
    var x = document.getElementById("registerMenu");
    x.style.visibility = "hidden";
    var y = document.getElementById("loginMenu");
    y.style.visibility = "visible"
  }

function registerMenu() {
    var x = document.getElementById("registerMenu");
    x.style.visibility = "visible";
    var y = document.getElementById("loginMenu");
    y.style.visibility = "hidden"
  }

function register(){
    var username = Uname.value;
    var password = passReg.value;
    var password_2 = pass2Reg.value;
    if (username.length > 5){
      if (password === password_2 && password.length >= 8 && password_2.length >= 8){
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/.test(password)){
          usersList = [{ username: username, password: password }];
          window.alert("Account created");
          Uname.value = "";
          passReg.value = "";
          pass2Reg.value = "";
          loginMenu()
        }
        else{
          window.alert("Invalid Password");
        }
      }
      else{
        window.alert("Passwords don't match");
      }
    }
    else{
      window.alert("Username must be more than 5 characters long");
    }
    
}

function logIn(){
  var username = Unamelog.value
  var password = passLog.value
  if (usersList.length > 0 && usersList[0].username === username && usersList[0].password === password) {
      window.alert("Login successful");
// add code to redirect to home page
  } else {
      window.alert("Invalid username or password.");
  }
}

function hashPass(password){
  var hash = CryptoJS.SHA256(password);
  var hashPass = hash.toString(CryptoJS.enc.Hex);
  return hashPass;
}


function checkLogin(username, password){
  var password = hashPass(password);
}
