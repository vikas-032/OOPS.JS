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
circle.draw();


