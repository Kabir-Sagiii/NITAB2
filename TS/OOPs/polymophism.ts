class Brands {
   bname:string 
   price:number 
   qty:number 
   stock:boolean

   display() {
        console.log(this.bname,this.price,this.qty,this.stock)
   }

}

class AppleBrand extends Brands {
     bname = "Apple"
     panme:string = "Macbook Air"
     price = 75000
     qty=10 
     stock = true

     dispaly(): void {
         console.log("This is going to print all the Macbook Details")
         console.log(this.bname,this.panme,this.price,this.qty,this.stock)
         console.log(`Mackbook Total Amount is ${this.price * this.qty}`)
     }
}

class VivoBrand extends Brands {
    bname = "Vivo"
    pname:string = "Vivo A23 Pro"
    price = 40000 
    qty = 8 
    stock = false 

      display() {
        //   super.dispaly()
          console.log(`Vivo A23 Total Amount is : ${this.price * this.qty}`)

      }
}


   var apple1 = new AppleBrand() 
   apple1.dispaly()

   var vivo1 = new VivoBrand() 
   vivo1.display()
   