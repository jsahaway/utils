let loopState = obj => {
  function* checkState(obj) {
    let keys = Object.keys(obj);
    for (let i = 0, iMax = keys.length; i < iMax; ++i) {
      // yield { [keys[i]]: obj[keys[i]] };
      yield obj[keys[i]];
    }
  }

  let presentState = checkState(obj);
  let iter;
  console.log("throw : ");
  while ((iter = presentState.next())) {
    console.log(iter);
    if (!iter.value) {
      presentState.return();
      break;
    }
    if (iter.done) {
      break;
    }
  }
};

let state = { fir: true, sec: true, thi: false };
loopState(state);

state.thi = true;
loopState(state);

// https://putaindecode.io/fr/articles/js/es2015/generators/
// function execAsync(promiseGenerator) {
//   const iter = promiseGenerator(); // en pause…

//   function loop(iteration) {
//     if (iteration.done) {
//       // Le générateur a return'é, fin du game
//       return iteration.value;
//     }

//     // c'est un générateur de promesse, dont on attend la résolution ici
//     return iteration.value.then(result => {
//       // La promesse est résolue, on peut repasser sa valeur au générateur
//       const nextIteration = iter.next(result); // cette valeur est return'ée par
//       // le même "yield" qui a émis la promesse, ça tombe bien :)

//       // Puis on relance notre boucle, et on continue récursivement
//       return next(nextIteration);
//     });
//   }

//   const promiseIteration = iter.next(); // exécution reprise jusqu'au prochain "yield"
//   // le générateur est remis en pause jusqu'au prochain appel à "iter.next"

//   // Première itération de la boucle
//   return loop(promiseIteration);
// }
