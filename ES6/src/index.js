
import { Person } from './Person';
import Teacher from './teacher';
// var --> function
// let --> block
// const --> block git first priority over let

function sayHello(){
    for(let i = 0;i<5;i++){
        console.log(i+1);
    }
}
sayHello();
//---------------------------------------
const x = 4
console.log(x)
//----------------------------------------

const obj = {
    name:'Swaraj',
    walk: function(){
        console.log(this)
    },                                  //in  two ways can be defined \/
    talk(){}

}
const time = 'name';
obj[time] = 'Space';
obj.walk();                             //reference to obj object
//-------------------------------------------
const walk_talk = obj.walk.bind(obj);   //binding this
walk_talk()

//-----------------------------------------------------
const normalFunction =function fun(){return 4*4}; // normal function
const myArrow = ()=>4*4;                //Arrow functions
console.log(myArrow())
console.log(normalFunction())
//-----------------------------------------------------
// object destructuring
const Arr={
    a1:[1,2,3,4],
    a2:[2,4,8],
    a3:[0,1,1,2]
}
const{a1,a2,a3} = Arr
console.log(a1)
console.log(a2)
console.log(a3)
// --------------------------
// Spread Operator Array
const concatMtd= a1.concat(a2).concat(a3) //<-- normal concat mtd

const spread = [...a1,'swaraj',...a2,44,...a3] //<-- spread operator

console.log(concatMtd)
console.log(spread)

// Spread operator object
const first_name = {name:'Swaraj'}
const last_name = {l_name:'Patil'}
const combined = {...first_name,...last_name}
console.log(combined)
const clone = {...combined}
console.log(clone)
// --------------------------------------------
// class

// class Person{
    // constructor(name){
        // this.name = name;
    // }
    // full_name(){
        // console.log(`${this.name} Patil`)
    // } 
// }

const person = new Person('Swaraj');
console.log(person)
console.log(person.name)
person.full_name()

//-----------------------------------------
// inheritance

// class Teacher extends Person{
    // teach(){
        // console.log('teach')
    // }
// }

const teacher = new Teacher('Hanuman')

console.log(teacher.name)