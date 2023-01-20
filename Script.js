function valider(){
    let mdp1 = document.forms[0]["mdp1"].value;
    let mdp2 = document.forms[0]["mdp2"].value;
    if(mdp1 === mdp2 && mdp1.length >= 8 && mdp1.length >= 8){
        return true;
    }
    else{
        alert("Les 2 mot de passes doivent être identiques");
        return false; // sert a empêcher l'envoie du formulaire
    }
}