// 配列
let [foo, bar] = [15, 21];
console.log("foo = ", foo);
console.log("bar = ", bar);


// オブジェクト
let {aha, ihi} = {aha: 'ahaha', ihi: 'ihihi'};
console.log("aha = ", aha);
console.log("ihi = ", ihi);


// 関数から複数の値を返す
function destructure() {
    let result1 = 10;
    let result2 = 20;
    return [result1, result2];
}

let [result1, result2] = destructure();
console.log("result1 = ", result1);
console.log("result2 = ", result2);

let [, result3] = destructure();
console.log("result3 = ", result3);


// 変数の値を入れ替える
let var1 = 3;
let var2 = 11;
[var1, var2] = [var2, var1];
console.log("var1 = ", var1);
console.log("var2 = ", var2);
