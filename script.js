//Ajout des éléments créateur du HTML 
const qcount = document.getElementById('count');
const creatorView = document.getElementById('creatorview');
const quizzEdition = document.getElementById('quizz-edition');
const submit = document.getElementById('submit');
const questionCounter = document.getElementById('questioncounter'); 
const launcher = document.getElementById('launcher');
//stockage des questions
let questionTableau = []; 
//Ecoute de l'enregistrement des questions
quizzEdition.addEventListener('submit', function(event) {
  event.preventDefault(); 
  //récupération des valeurs
  const quest = document.getElementById('question-input').value;
    const r1 = document.getElementById('ans1').value;
    const r2 = document.getElementById('ans2').value;
    const r3 = document.getElementById('ans3').value;
    const r4 = document.getElementById('ans4').value;
  const nouvelleQuestion = {
    titre : quest, 
    choix: [r1,r2,r3,r4],
    bonnereponse : 0 
}; 
questionTableau.push(nouvelleQuestion); 
quizzEdition.reset(); 
console.log("Tableau mis à jour", questionTableau); 
  console.log("all good"); 
  const qinput = document.getElementById('question-input').value;
  console.log("question enregistrée" + qinput);
  document.getElementById('question-input').value = "";
});
let qcount = 0;
submit.addEventListener('click', function() {
  qcount = qcount+1; 
  count.textContent = qcount;
});
  
//Passons au côté utilisateur
const UserView = document.getElementById('user-view'); 
const QuizzContainer = document.getElementById('quizz-container'); 
const Back = document.getElementById('back'); 

launcher.addEventListener('click', function()  {
  if (questionTableau.length === 0){
    alert("Action bloquée"); 
    return; 
} else {
  creatorView.classList.add('hidden');
}
});

