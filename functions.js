function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(2, 3));
console.log(topla("Ankara", 2));
console.log(topla2(2, 4));
console.log(topla3(4, 8));
//Default Parameters
function topla4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
function topla5(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(topla5(2));
//Rest Parameters: Aynı tipte alacağınız parametre sayısı belli değilse kullanılır
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("Mert", "Ahmet", "Engin"));
