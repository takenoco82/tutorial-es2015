let data = [2, 1, 5];

// 従来の書き方
let formatted1 = data.map(function (value, index) {
    return value * value;
})
console.log(formatted1);


// ECMAScript2015のアロー関数の書き方
let formatted2 = data.map((value, index) => value * value);  // 本体が1文の場合 return を明記しなくてもOK
console.log(formatted2);

// return は書いてもOK
formatted2 = data.map((value, index) => {
    return value * value
});
console.log(formatted2);
