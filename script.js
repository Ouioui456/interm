//Ajout des éléments créateur du HTML 
const.creatorView = document.getElementById('creatorview');
const.quizzEdition = document.getElementById('quizz-edition');
const.submit = document.getElementById('submit');
const.questionCounter = document.getElementById('questioncounter'); 
const.launcher = document.getElementById('launcher');
//stockage des questions
let questionsTableau = []; 
//Ecoute de l'enregistrement des questions
quizzEdition.addEventListener('submit', function(event) {
  event.preventDefault(); 
  console.log("all good"); 
  const.qinput = document.getElementById('question-input').value;
  console.log("question enregistrée" + qinput);
});
