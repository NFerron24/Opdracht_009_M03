let colors = ["yellow", "blue", "red", "orange"];
var arrayLenght = colors.length;

var i = 0;
while (i <= 3) {
  console.log(colors[i]);
  i++;
}
for (i = 0; i < arrayLenght; i++) {
  console.log(colors[i]);
}
colors.forEach(function (element) {
  console.log(element);
});
