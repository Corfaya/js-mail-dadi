// array filled and stored
let emailList = ["pippo_franco@libero.it", "jerry.cala@gmail.com", "sergio-mattarella@pec.governo.it", "emiliofede-100@live.it", "divine-otelma-wizard@hotmail.it", "batman-is-brucewayne@gmail.com", "bilbobaggins@contea.org", "ryu.fighter@street.com", "vittoriofeltri@libero.it", "zeb_eh_volevi.2account@hotmail.it", "snoopdogg70@gmail.com", "onizuka-teacher@anime.jp", "solid-snake@gmail.com", "ww-walterwhite@libero.it", "lauracorrado96@hotmail.it"];

// prompt stored in "user_mail" variable with toLowerCase method
let user_mail = prompt("Inserire l'email").toLowerCase()

// Flag
let authorization = false;

for (let i = 0; i < emailList.length; i++) {
    if (emailList[i] === user_mail) {
        authorization = true;
    }
}

// Check authorization and message alert
if (authorization === true) {
    alert("Accesso autorizzato")
} else {
    alert("Accesso negato")
}