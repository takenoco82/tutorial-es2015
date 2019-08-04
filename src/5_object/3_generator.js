// ジェネレーターを定義するには functionキーワードのあとに * を付与し yield を使うだけ
function* func1() {
    yield 'aha';
    yield 'ihi';
    yield 'uhu';
}

for (const e of func1()) {
    console.log(e);
}


function* countDown(begin) {
    while (begin >= 0) {
        yield begin--;
    }
}

for (const e of countDown(10)) {
    console.log(e);
}
