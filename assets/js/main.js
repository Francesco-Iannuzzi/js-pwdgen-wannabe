// Traccia: chiedere all'utente il suo nome, cognome ed il colore preferito e mostrare le risposte in schermata

//inserire un prompt per chiedere all'utente il suo nome, registrandolo in una variabile
const username = prompt ("What's your name?");
console.log(username);

//inserire un prompt per chiedere all'utente il suo cognome, registrandolo in una variabile
const surname = prompt ("What's your surname");
console.log(surname);

//inserire un prompt per chiedere all'utente il suo colore preferito, registrandolo in una variabile
const favoriteColor = prompt ("What's your favorite color?");
console.log(favoriteColor);

//aggiungere un h1 con id per mostrare in schermata le risposte

//selezionare e salvare in una variabile l'elemento della dom con getElementById
const nameElement = document.getElementById('answers');
console.log(nameElement);

//stampare in schermata le risposte tutte attaccate con l'aggiunta del suffisso '23' assegnando un nuovo valore all'innerHTML
nameElement.innerHTML=`${username}${surname}${favoriteColor}23`;
