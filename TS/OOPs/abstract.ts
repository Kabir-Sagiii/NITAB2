 abstract class Student {
    sid:number
    sname:string 
    sTotalmarks:number
    isPlaced:boolean 

    displayDetails():void {
        console.log(this.sid,this.sname,this.sTotalmarks,this.isPlaced)
    }
    
    abstract  printTotalMarks():number 
 }

  class S1 extends Student {
        sid = 101
        sname="Raj"
        isPlaced = true 

        printTotalMarks(): number {
            return 564
        }

  }

  class S2 extends Student {

    sid = 102 
    sname = "Sneha"
    isPlaced = true 

    printTotalMarks(): number {
        return 590
    }
  }