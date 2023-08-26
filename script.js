var symbol;
do {
  symbol = +prompt("Введите число:");
} while (isNaN(symbol) || symbol < 0);

var s;
do {
  s = +prompt("Введите степень:");
} while (isNaN(s));

var result = 1;

for (var i = 0; i < s; i++) {
  result *= symbol;
}

alert(result);

var height;
do {
  height = +prompt("height");
} while (isNaN(height) || height <= 0);

var step;
do {
  step = prompt("symbol");
} while (step == "" || step == " "||step === "");

var star;
do {
  star = prompt("symbol 2");
} while (star == "" || star == " "||star === "");

for (var i = 0; i <= height; i++) {
  star = i == 0 ? star : step + star;
  console.log(star);
}
