const url = "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true";
// 1. On va chercher le fichier
fetch('weather.json')
    .then(reponse => reponse.json()) // 2. On transforme le texte en objet exploitable
    .then(donnees => {
        // 3. On sélectionne notre balise HTML
        const zoneAffichage = document.getElementById('affichage-meteo');
        
        // 4. On écrit dedans (exemple si ton JSON contient une ville)
        zoneAffichage.innerHTML = `La météo à ${donnees.ville} est de ${donnees.temp}°C`;
    })
    .catch(erreur => console.error("Le JSON n'a pas pu être chargé :", erreur));
