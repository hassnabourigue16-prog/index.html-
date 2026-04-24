// Demande des deux nombres à l'utilisateur
let saisie1 = prompt("Entrez le premier nombre :");
let saisie2 = prompt("Entrez le deuxième nombre :");

// Conversion des chaînes de caractères en nombres décimaux
let num1 = parseFloat(saisie1);
let num2 = parseFloat(saisie2);

// Vérification si les entrées sont des nombres valides
if (isNaN(num1) || isNaN(num2)) {
    console.error("Erreur : Veuillez entrer des nombres valides.");
} else {
    // Calculs
    let somme = num1 + num2;
    let difference = num1 - num2;
    let produit = num1 * num2;
    
    // Affichage des résultats de base
    console.log("--- Résultats pour " + num1 + " et " + num2 + " ---");
    console.log("Somme : " + somme);
    console.log("Différence : " + difference);
    console.log("Produit : " + produit);

    // Gestion de la division par zéro
    if (num2 !== 0) {
        let quotient = num1 / num2;
        console.log("Quotient : " + quotient);
    } else {
        console.log("Quotient : Division par zéro impossible.");
    }
}
