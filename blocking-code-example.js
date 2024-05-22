console.log('Début du script');

// Opération bloquante simulant une grosse tâche synchrone
const startTime = Date.now();
while (Date.now() - startTime < 1000) {
    console.log('blockage en cours');
  // boucle pendant 1 seconde
}

console.log('Fin du script');