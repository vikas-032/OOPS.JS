// Now we are going to start Object  oriented programming 
 
// Factories  

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

function Circle (radius){
    this.radius = radius,
    this.draw  = function(){
        console.log('draw');
    }
    
}

const another = new Circle(1);
