
console.log(example);
var example = "I'm the example!";
 
/// it will show indefined

console.log(example);
let example = "I'm the example!";   
// it will show indefined  we  can not acess to exaple becore intialisation

console.log(hello);                                   
var hello = 'world';   
// it will show indefined                              

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// it will show magnet

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// it will show super cool

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// it will show chiken and half chiken

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// it will show error mean is not a function
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// it will show indefined , rock ,r&b ,disco
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// It will show san jose , seattle , burbank, san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//// It will show dojo { name: chicago ,students:65, hiring:true } and error




