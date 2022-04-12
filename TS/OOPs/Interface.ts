interface IBrand {
    bName:string 
    pName:string 
    price:number
    qty:number

    printDetails():void 
    totalAmount():number
}

class AppleBrand implements IBrand {

     bName: string = "Apple"
     pName: string = "Iphone 13Pro"
     price: number = 130000 
     qty: number = 5
     rating:number = 20

     printDetails(): void {
         console.log(this.bName,this.pName,this.price,this.qty)
     }
     totalAmount(): number {
         return this.price * this.qty
     }
}