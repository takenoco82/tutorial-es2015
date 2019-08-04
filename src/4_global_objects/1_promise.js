function func1(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve(`value is ${value}.`)
            } else {
                reject(`value is empty.`)
            }
        }, 2000);
    })
}

// 引数あり
func1('alice').then(
    response => { console.log(response); },
    error => { console.log(error); }
);

// 引数なし
func1().then(
    response => { console.log(response); },
    error => { console.log(error); }
);


// 非同期処理を連結する
//   新たなPromiseオブジェクトを返してあげれば then() をメソッドチェーンできる
func1('alice').then(
    response => {
        console.log('1. ' + response);
        return func1('bob');
    }
).then(
    response => {
        console.log('2. ' + response);
    },
    error => {
        console.log('error: ' + error);
    }
);


// 複数の非同期処理を並行して実行する
//    Promise.all() を利用すると複数の非同期処理を実行し、そのすべてが成功した場合に処理を実行することができる
Promise.all([
    func1('alice'),
    func1('bob'),
    func1('carol')
]).then(
    // それぞれのresolveから渡された結果の配列
    response => { console.log(response); },
    // 失敗したrejectから渡された結果
    error => { console.log("Promise.all is error.", error); }
);
