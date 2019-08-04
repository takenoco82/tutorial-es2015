let data = [2, 1, 5];
// 配列にメンバ hoge を追加
Array.prototype.hoge = function () {};

console.log("start for ... of");
for (const e of data) {
    console.log(e);
}

// for ... in の場合、インデックスを列挙するし、prototypeで拡張されたメンバまで列挙する
console.log("start for ... in");
for (const e in data) {
    console.log(e);
}
