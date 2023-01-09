// function message() {
//     let nom = prompt('Votre Nom :');
//     let confirm = prompt('Veuillez confirmer votre nom :');

//     if(nom === confirm) {
//         alert('Hello '+ nom);
//     }
//     else {
//         alert('Votre nom ne correspond pas, veuillez réessayer.');
//         message();
//     }
// }
// message();
let btnNom = document.querySelector(".someclass");
btnNom.addEventListener("click", (e) => {
    let prenom = prompt("rentrez votre prénom");
    let confirmation = confirm("ok", "annuler");
    if (confirmation) {
        alert('Hello ' + prenom);
    }
    else {
        alert('erreur');
    }

});