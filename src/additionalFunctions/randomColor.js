export function getRandomPastelColor() {
  var r = Math.floor(Math.random() * 156) + 100; // від 100 до 255
  var g = Math.floor(Math.random() * 156) + 100; // від 100 до 255
  var b = Math.floor(Math.random() * 156) + 100; // від 100 до 255

  var hex = '#' + r.toString(16) + g.toString(16) + b.toString(16);

  return hex;
}
