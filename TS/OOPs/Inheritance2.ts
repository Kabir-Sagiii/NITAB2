class Brand {
     brandName:string 
     modelName:string 
     price:string

     constructor(bname,mname,price){
           this.brandName = bname
           this.modelName = mname 
           this.price = price
     }
     displayBrand() {
         console.log(this.brandName)
     }
      
}

 class Apple extends Brand {

     
      constructor(mname,price){
          
          super("Apple",mname,price)
          
      }

         printAllDetails() {
             this.displayBrand()
             console.log(this.modelName,this.price)
         }

 }

    var product1 = new Apple("Iphone 12",90000)
    product1.printAllDetails()


    class Vivo extends Brand {
       
        rating:number
        constructor(mname,price) {
            super("Vivo",mname,price)
           
            this.rating = 4.5
        }

        printDetails() {
            this.displayBrand()
            console.log(this.modelName,this.price,this.rating)
        }
    }


    var vivo1 = new Vivo("VivoA23 pro",40000)
    vivo1.printDetails()