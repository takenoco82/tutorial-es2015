if (true) {
    let i = 42;
    // i = 42
    console.log("i =", i);
}

// ↓はブロックスコープ外なのでエラー. ReferenceError: i is not defined
// console.log("i =", i);
