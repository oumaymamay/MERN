const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
/// It will show Tesla
console.log(otherRandomCar)
/// IT will show Mercedes



const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
//// IT WILL SHOW ERROR
console.log(otherName);
//// it will show Elon

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password)
////it will show 12345
console.log(hashedPassword);
////// IT will show undefined because person does not have a password property.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); 
///// IT  will show false because (2 not equal to 5)
console.log(first == third);
/// It will show True because (2 equal to 2)

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
// it will show value
console.log(secondKey);
// IT will show [1,5,1,8,3,3]
console.log(secondKey[0]);
// IT WILL show 1
console.log(willThisWork);
// IT will show 5


