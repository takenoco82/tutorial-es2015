let m = new Map();
// 要素の追加
m.set('aha', 'あは');
m.set('ihi', 'いひ');

// あは
console.log(m.get('aha'));
// undefined
console.log(m.get('uhu'));

// keyの取得
for (const key of m.keys()) {
    console.log(`key = ${key}`);
}

// key, value の取得
for (const [key, value] of m) {
    console.log(`key = ${key}, value = ${value}`);
}
// forEach() の場合は value, key の順になる
m.forEach((value, key) => {
    console.log(`key = ${key}, value = ${value}`);
})

// 要素の削除
m.delete('aha')
// undefined
console.log(m.get('aha'));
