const data = 100;
// constを使うと再代入できないのでエラー. TypeError: Assignment to constant variable.
// data = 100;


const ary = [1, 3, 2];
// ary[0] = 1
console.log("ary[0] =", ary[0]);
// 配列の要素を変更しているだけなので↓はOK. オブジェクトのプロアクティブも同様
ary[0] = 10;
// ary[0] = 10
console.log("ary[0] =", ary[0]);
