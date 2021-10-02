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
 