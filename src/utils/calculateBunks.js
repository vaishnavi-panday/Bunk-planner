// How many more classes can you skip and still stay at 75% or above?
export function calculateBunks(attended, total) {
  const allowedAbsences = total * 0.25;
  const absencesSoFar = total - attended;
  return Math.floor(allowedAbsences - absencesSoFar);
}

// How many classes in a row must you attend to get back to 75%?
export function classesToRecover(attended, total) {
  return Math.max(0, 3 * total - 4 * attended);
}
