function jouer() {
    // 1. L'ordinateur choisit un nombre aléatoire entre 1 et 10
    const nombreADeviner = Math.floor(Math.random() * 10) + 1;
    
    let proposition;
    let tentatives = 0;
    let trouve = false;

    // 2. Boucle tant que l'utilisateur n'a pas trouvé
    while (!trouve) {
        proposition = prompt("Devinez le nombre entre 1 et 10 :");
        
        // Si l'utilisateur clique sur "Annuler"
        if (proposition === null) return;

        // Conversion de la saisie en nombre entier
        proposition = parseInt(proposition);
        tentatives++;

        if (proposition < nombreADeviner) {
            alert("C'est plus grand !");
        } else if (proposition > nombreADeviner) {
            alert("C'est plus petit !");
        } else if (proposition === nombreADeviner) {
            alert("Bravo ! Vous avez trouvé en " + tentatives + " tentatives.");
            trouve = true;
        } else {
            alert("Veuillez entrer un nombre valide.");
        }
    }
}
