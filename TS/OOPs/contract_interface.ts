interface IPersonType {
  name:string 
  city:string 
  phn:number 
  isPlaced:boolean

getDetails():void

}

   var student:IPersonType = {
        name:"NIT",
        city:"Hyd",
        phn:98989898,
        isPlaced:true,

        getDetails:function(){
               console.log("Function is designed in the contract")
        }
        }

     console.log(student)
     student.getDetails()