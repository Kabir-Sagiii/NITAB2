class Name {
    name:string = "NIT"
    getName():void {
        console.log(this.name)
    }
}

class City extends Name {
    city:string = "Hyd"
    
    getCity():void {
        console.log(this.city)
    }
}

var c1 = new City() 
var n1 = new Name()


c1.getName() 
c1.getCity()

n1.getName()
