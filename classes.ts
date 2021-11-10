class Ev {
    private odaSayisi: number //Private sadece tanımlandığı class içerisinde geçerli
    pencereSayisi: number
    kat: number
    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this.odaSayisi = odaSayisi
        this.kat = kat
        this.pencereSayisi = pencereSayisi
    }
    yemekYe() {
        console.log(this.kat + " katlı evde " + "yemek yiyildi")
    }
}

let ev = new Ev(5, 4, 8)
ev.yemekYe()
console.log(ev.kat)

//Inheritance

class Kisi {
    private _isim: string

    get isim() {
        return "Sayın" + " " + this._isim
    }

    set isim(ad: string) {
        this._isim = ad
    }

    kaydet() {
        console.log("Kişi kaydedildi");
    }
}
//Protected: Inheritance verdiği class içerisinde de geçerli yani ulaşılabilir
class Musteri extends Kisi {
    satisYap() {
        console.log("Satış yapıldı");

    }
}

class Personel extends Kisi {
    maasOde() {
        console.log("Maaş ödendi");
    }
}

let musteri = new Musteri()
musteri.isim="Mert"
console.log(musteri.isim);

musteri.kaydet()
musteri.satisYap()


//Getter ve Setter Encapsulation Tekniği için kullanılır