function deger(x: number): number {
    return x
}

function deger2(x: string): string {
    return x
}

let sayi = deger(10)

console.log(sayi);

let sehir = deger2("Giresun")

console.log(sehir);

//Generic: Farklı tiplerle aynı işlemi yapacağımız zaman kullanıyoruz

function deger3<T>(x:T):T {
    return x
}

let sayi3 = deger3<number>(10)
let sehir3 = deger3<string>("Ankara")

class GenericClass<T> {

    degisken:T
    fonsksiyon(add:T):T {
        return add
    }

}

let sinif = new GenericClass<number>()

sinif.fonsksiyon(10)