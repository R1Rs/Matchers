export default function arraySorting(array) {
  array.sort((a, b) => b.health - a.health);
  return array;
}
