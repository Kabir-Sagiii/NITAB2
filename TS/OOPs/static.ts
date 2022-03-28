class MobileBrand {
   static brandName:string 
    brandPrice:number
    brandModelName:string
    avability:boolean 

    constructor() {
        MobileBrand.brandName = "Vivo"
        this.brandPrice = 50000 
        this.brandModelName = "vivo A23"
        this.avability = true
    }

     static changeBrand():void {
            MobileBrand.brandName = "Apple"
           
           
      }

      displayDetails():void {
          
          console.log(MobileBrand.brandName,this.brandModelName,this.brandPrice,this.avability)
      }

}


    var b1= new MobileBrand() 
    var b2 = new MobileBrand() 
    b1.brandModelName = "Vivo V23"
    b2.brandModelName = "Oneplus"
    MobileBrand.brandName = "Oppo"
    b1.displayDetails() 
    b2.displayDetails()


   