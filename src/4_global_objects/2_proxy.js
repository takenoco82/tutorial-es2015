let obj = {aha: 'あは', ihi: 'いひ'};
let proxy_obj = new Proxy(obj, {
    // 存在しないプロパティを取得したときに undefined を返す
    get(target, prop) {
        return prop in target ? target[prop] : 'undefined';
    }
});

// あは
console.log(proxy_obj.aha);
// undefined
console.log(proxy_obj.ufu);


// プロクシに対する操作はターゲットにも反映される
proxy_obj.aha = 'ahaha'
// ahaha
console.log(proxy_obj.aha);
// ahaha
console.log(obj.aha);
