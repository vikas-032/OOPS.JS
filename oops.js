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


 function Person1 (school , college , university){
    this.firstSchool = school;
    this.SecondCollege = college;
    this.thirdUniversity = university;

 }

 Person1.prototype.fullName = function(){
    console.log(this.firstSchool + " " + this.SecondCollege );
 }

 let Person3 = new Person3("Vikas", "kumar", 22);

 console.log(Person3);