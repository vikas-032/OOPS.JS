


class emp{
    #name = ""
    constructor(n){
        this.name=n;
    
    }

    getName(){
        console.log(this.#name);
    }
}

let Emp2 = new emp("vikas");
console.log(Emp2.getName());

