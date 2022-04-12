class Productss {
 public  productName:string
  productPrice:number 
   protected productCategory:string 
   private avability:boolean 
   Qty:number 

    constructor(){
    this.productName = "Macbook"
    this.productPrice = 75000
    this.avability = true 
    this.productCategory = "Apple"
    this.Qty = 5

   }

     public getDetails() {
         this.TotalAmount()
         console.log(this.productCategory,this.productName,this.avability,this.productPrice)
     }

    private TotalAmount():number {
         return  this.Qty * this.productPrice
     }


}

   class Apple extends Productss {
         brandName:string
         constructor(){
             super()
             this.brandName = "Apple"
             
         }
           print() {
               this.getDetails()
               console.log(this.brandName,this.productName,
                this.productPrice,this.productCategory)

               }
                  instanceOfParent(){
                      var p2 = new Productss()
                      p2.productName = "Vivo A23"
                      p2.productPrice = 50000
                      p2.Qty = 3
                     
                  }
           }
   }



     var product1 = new Productss()
     product1.productPrice = 90000 
    //  product1.productCategory = "vivo"
    //  product1.avability = false
     product1.getDetails()