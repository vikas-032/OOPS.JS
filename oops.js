// Now we are going to start Object  oriented programming 
 
// Factories  
/*
function createCircle (radius){
return {
   radius: radius,
    draw: function(){
        console.log('draw');
    },
   
 }; 
}
const circle = createCircle (1);


// Constructors Functions
/*
function Circle (radius){
    this.radius = radius,
    this.draw  = function(){
        console.log('draw');
    }
    
}

const another = new Circle(1);
*/


/*
class person{
constructor(n , a){
    this.name = n;
    this.age =  a;
} 
sayHi(){
    console.log("hii...")
}
static hello(){
    console.log("hello" );
}
}

class person2{
    constructor(s , st){
        this.school = s;
        this.student = st;
    }

}


let person1 = new person("Vikas", 23);
let newperson2 = new person2("My own school" , "Shivani");

 
console.log(newperson2);
console.log(person1); 
person1.sayHi();
person.hello();
*/

// Inheritence in OOPS

 class emp{
    constructor(n){
        this.name= n;
    }
  msg(){
    console.log("Just a normal txt");
    
  }
 }

  
 class manager extends emp{
    constructor(s ,d){
        super(s);
this.department = d;
    }
msg(){
    console.log("hlo");
    
  }
    
    info(){
        this .msg();
        console.log(this.name + "is manager of department  " + this.department); 
    }
    
 } 

 class admin extends manager{

 }

  

 let admin1= new admin("shivani  " , "vikas");
   
console.log(admin1);