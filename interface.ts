interface Product{
    id:number
    name:string
    unitPrice:number

}

function save(product:Product) {
    console.log(product.name + " Kaydedildi");  
}



class Product2 {

    id:number
    name:string
    unitPrice:number
}

function save2(product:Product2) {
    console.log(product.name + " Kaydedildi");  
}

save({id:1 , name:"laptop", unitPrice:5000})

let mouse = new Product2()
mouse.name="A4Tech"
save2(mouse)

interface PersonService{
    save():void
}

class CustomerService implements PersonService {
    save(): void {
        throw new Error("Method not implemented.");
    }

}
