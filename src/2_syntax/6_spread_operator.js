// 108
console.log(Math.max(11, 108, -21, 100));
// NaN. Math.maxは可変長引数を受け取るので、配列を渡すと上手く動作しない
console.log(Math.max([11, 108, -21, 100]));

// 108. 今までやりかた
console.log(Math.max.apply(null, [11, 108, -21, 100]));

// 108. ECMAScript2015の展開演算子を使うやり方
console.log(Math.max(...[11, 108, -21, 100]));
