const form = document.querySelector('form');
form.addEventListener('submit', (event ) => {
  event.preventDefault();
  const prenom = document.getElementById('prenom').value;
  const mail = document.getElementById('mail').value;
  const msg = document.getElementById('message').value;

  if (!prenom || !mail || !msg ) {
    alert ('veuillez remplir tous les champs !')
    return;
  }
  else{
    alert ('Message bien reçu');
    form.reset();
  }

})