// Fonction de vérification
function Verif() {
    // Vérifie tous les champs du formulaire
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var code = document.getElementById('code').value;
    var genre = document.querySelector('input[name="sexe"]:checked');
    var pays = document.getElementById('pays').value;
    var formations = document.querySelectorAll('input[name^="formation"]:checked');
    var image = document.getElementById('fichier').value;

    // S'assure que toutes les variable du html soit bien remplie
    if (nom === '' || prenom === '' || code === '' || genre === null || pays === '' || formations.length === 0 || image === '') {
        alert('Veuillez remplir tous les champs du formulaire.');
        return false;
    }

    // S'assure une deuxieme fois que la longueure du mdp soit de 8. Bloque à 8 et envoie un message d'erreur si le mdp n'est pas a 8 
    if (code.length !== 8) {
        alert('Le code doit être formé exactement de 8 caractères.');
        return false;
    }
    alert('Formulaire valide !');
}
document.getElementById('nom').addEventListener('blur', function () { /* Lorsque l'objet est valide il s'ellumine en vert*/
    this.style.border = '2px solid green';
});

document.getElementById('prenom').addEventListener('blur', function () {
    this.style.border = '2px solid green';
});

document.getElementById('code').addEventListener('blur', function () {
    this.style.border = '2px solid green';
});
