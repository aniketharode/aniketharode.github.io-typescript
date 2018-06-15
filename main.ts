class Mobile{

    

    constructor(private name?:string,private ram?:string,private price?:string){
     this.name=name;
     this.price=price;
     this.ram=ram;
    }
    
    display = () => {
       return this.name;
    };
  
    getName = () =>{
        return this.name;
    }

    setName = (name:string) =>{
         this.name=name;
    }

}

class Computer extends Mobile{



}

let value = new Computer();
