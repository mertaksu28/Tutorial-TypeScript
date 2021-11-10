abstract class KrediBase {
    constructor() {
        
    }
    //Tamamlanmış operasyon heryerde ortak
    kaydet():void{
        console.log("Kaydedildi")
    }

    abstract hesapla(): void;
}

class TuketiciKredisi extends KrediBase {

    constructor() {
        super();
    }

    hesapla(): void {
        console.log("Tüketici Kredisine göre hesaplandı");
        
    }

}

class MortgageKredisi extends KrediBase {

    constructor() {
        super();
    }

    hesapla(): void {
        console.log("Konut Kredisine göre hesaplandı");        
    }

    mortgagayeOzguOperasyon(){

    }

}

let tuketiciKredisi = new TuketiciKredisi()
tuketiciKredisi.hesapla()
tuketiciKredisi.kaydet()

let mortgageKredisi = new MortgageKredisi()
mortgageKredisi.hesapla()
mortgageKredisi.kaydet()
mortgageKredisi.mortgagayeOzguOperasyon()


let kredi : KrediBase
kredi= new TuketiciKredisi()

kredi = new MortgageKredisi()