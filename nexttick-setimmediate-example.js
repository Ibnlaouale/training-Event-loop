console.log('Début du script');

// Planifie une callback à exécuter immédiatement sur la prochaine itération de l'Event Loop
setImmediate(() => {
  console.log('Exécution immédiate');
});

// Planifie une callback à exécuter à la fin de cette phase de l'Event Loop
process.nextTick(() => {
  console.log('Exécution nextTick');
});

console.log('Fin du script');