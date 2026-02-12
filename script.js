const form = document.querySelector('.search-container'); 
const input = document.querySelector('input[name="q"]'); 

form.addEventListener('submit', function(event) {
   event.preventDefault() ; 

    const recherche = input.value.trim().toLowerCase(); 

    if (recherche === "berlin") { 
        meteoberlin(); 
    } else { 
        console.log("Ville non reconnue : " + recherche); 
    }
});

function meteoberlin () {
    const affichage = document.getElementById('affichage-meteo'); 
    affichage.innerHTML = "
// 1. On appelle bien le fichier local
fetch('weather.json')
    .then(reponse => reponse.json())
    .then(donnees => {
        const zoneAffichage = document.getElementById('affichage-meteo');
        
        // 2. On va chercher la PREMIÈRE température de la liste "hourly"
        const premiereTemp = donnees.hourly.temperature_2m[0];
        const unite = donnees.hourly_units.temperature_2m;
        
        // 3. On affiche (on écrit Berlin car le JSON indique la timezone Berlin)
        zoneAffichage.innerHTML = `La météo à Berlin est de ${premiereTemp}${unite}`;
        
        console.log("Donnée extraite :", premiereTemp);
    })       
    .catch(erreur => console.error("Erreur de lecture :", erreur));
