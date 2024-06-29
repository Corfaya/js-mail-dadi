// array filled and stored
let emailList = [
  "pippo_franco@libero.it",
  "jerry.cala@gmail.com",
  "sergio-mattarella@pec.governo.it",
  "emiliofede-100@live.it",
  "divine-otelma-wizard@hotmail.it",
  "batman-is-brucewayne@gmail.com",
  "bilbobaggins@contea.org",
  "ryu.fighter@street.com",
  "vittoriofeltri@libero.it",
  "zeb_eh_volevi.2account@hotmail.it",
  "snoopdogg70@gmail.com",
  "onizuka-teacher@anime.jp",
  "solid-snake@gmail.com",
  "ww-walterwhite@libero.it",
  "lauracorrado96@hotmail.it",
];

// Click event
let send = document.getElementById("send");
send.addEventListener("click", function () {
  // input value stored in "user_mail" variable with toLowerCase method
  let user_mail = document.getElementById("mail").value.toLowerCase();
  // Flag
  let authorization = false;
  // For statement
  for (let i = 0; i < emailList.length; i++) {
    if (emailList[i] === user_mail) {
      authorization = true;
    }
  }
  // Check authorization and message
  if (authorization === true) {
    document.getElementById("access").innerText = "Accesso autorizzato";
    document.getElementById("access").style.color = "green";
  } else {
    document.getElementById("access").innerText = "Accesso negato";
    document.getElementById("access").style.color = "red";
  }
});

// Enter key event
let input = document.getElementById("mail");
input.addEventListener("keydown", function (enter) {
  document.getElementById("access").innerText = "";
  if (enter.key === "Enter") {
    // same code used for click event
    let user_mail = document.getElementById("mail").value.toLowerCase();
    let authorization = false;
    for (let i = 0; i < emailList.length; i++) {
      if (emailList[i] === user_mail) {
        authorization = true;
      }
    }
    if (authorization === true) {
      document.getElementById("access").innerText = "Accesso autorizzato";
      document.getElementById("access").style.color = "green";
    } else {
      document.getElementById("access").innerText = "Accesso negato";
      document.getElementById("access").style.color = "red";
    }
  }
});