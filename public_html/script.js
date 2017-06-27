/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//define a class
class Rectangle {
  constructor(height, width) {  //constructor
    this.height = height;
    this.width = width;
  }
  set DimWidth(x){     //setter function in es6
      this.width =x;  
  } 
   set DimHeight(x){     //setter function in es6
      this.height=x;  
  } 
  get Dim(){
       return 'Width = '+ this.width + ' height = '+this.height;
  }
   calcArea() {
       console.log(this.width*this.height);
       
    return this.height * this.width;
  }
};

class Square extends Rectangle{  //square extending rectangle
    constructor(height, width){
        super(width,width);
        this.name = "testName";
    }
    calcArea(){
        super.calcArea();         // return this.width*this.width;
     return super.calcArea();  //accessing parent class method
            }
            
    sayName(){
        console.log(this.name);
    }        
};


var rect = new Rectangle(2,4);
rect.DimHeight=10; //setting the value
rect.DimWidth = 20; 
console.log('Area of the rectangle is '+rect.calcArea() + ' dim is '+rect.Dim); //access getter
var sqr = new Square(2,3);
console.log('Area of the square is '+sqr.calcArea() + ' side is ' + sqr.Dim); 
sqr.sayName();



var name = "Brendan";
console.log(`Yo, ${name}!`);
function test(username ="SAI KRISHNA",org ="Marlabs"){
    return 'Yo ra e ,${username}' ;
    
}
console.log(test());

var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
                         // because keyString === 'a string'
//myMap.get({});           // undefined, because keyObj !== {}
//myMap.get(function() {}) 

var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one

for (var key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (var value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (var [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = onevar myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one

for (var key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (var value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (var [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one

myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value);
});

var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add('some text'); // Set { 1, 5, 'some text' }
var o = {a: 1, b: 2};
mySet.add(o);
mySet.add({a: 1, b: 2}); // o is referencing a different object so this is okay
mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has('Some Text'.toLowerCase()); // true
mySet.has(o); // true
mySet.size; // 5
mySet.delete(5); // removes 5 from the set
mySet.has(5);    // false, 5 has been removed
mySet.size; // 4, we just removed one value
console.log(mySet);// Set {1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2}}

for (let item of mySet) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2} 
for (let item of mySet.keys()) console.log(item);
 
// logs the items in the order: 1, "some text", {"a": 1, "b": 2} 
for (let item of mySet.values()) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2} 
//(key and value are the same here)
for (let [key, value] of mySet.entries()) console.log(key);

// convert Set object to an Array object, with Array.from
var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}]

let i = 50; //global variable
console.log(this.i);
function letConstKeywordDemo()
{
    console.log('testing for global' + i);
    var i = 0;
    let k = 999;
    var i = 100;
    console.log("x =" + i); //redeclaring var  , but it doesnt work with let
    if (k === 999)
    {
        const ct = 290;
        console.log(ct);
        let b = 1000; //b is defined in outer nested block
        if (b === 1000) {
            console.log("im in nested inner block b = " + b);
            console.log(ct);
        }
        console.log("im in outer block b = " + b);
        console.log(k);
    }
    const ct = 100;
    console.log(ct);
    if (true)
    {
        let random = 10;
    }
    //console.log("i declared a no in if block and trying to acces it outside if block is "+ random);

    // const also works on objects
    const MY_OBJECT = {'key': 'value'};
    //MY_OBJECT = {'OTHER_KEY': 'value'}; // Attempting to overwrite the object throws an error
    MY_OBJECT.key = 'otherValue'; // so the following statement is executed without problem

    const MY_ARRAY = [];// The same applies to arrays
    MY_ARRAY.push('A'); // ["A"] // It's possible to push items into the array
    MY_ARRAY = ['B']; // However, assigning a new array to the variable throws an error


}
letConstKeywordDemo();

function destructuringDemo() {
    var a, b, rest;
    [a, b] = [10, 20];
    console.log(a); // 10
    console.log(b); // 20

    [a, b, ...rest] = [10, 20, 30, 40, 50];
    console.log(a); // 10
    console.log(b); // 20
    console.log(rest); // [30, 40, 50]

    ({a, b} = {a: 10, b: 20});
    console.log(a); // 10
    console.log(b); // 20

    var x = [1, 2, 3, 4, 5];
    var [y, z] = x;
    console.log(y); // 1
    console.log(z); // 2

    var foo = ['one', 'two', 'three'];
    var [one, two, three] = foo;
    console.log(one); // "one"
    console.log(two); // "two"
    console.log(three); // "three"

    var a, b;

    [a = 5, b = 7] = [1];
    console.log(a); // 1
    console.log(b); // 7

    var a = 1;
    var b = 3;
    [a, b] = [b, a];
    console.log(a); // 3
    console.log(b); // 1

    function f() {
        return [1, 2];
    }
    var a, b;
    [a, b] = f();
    console.log(a); // 1
    console.log(b); // 2

    function f1() {
        return [1, 2, 3];
    }
    var [a, , b] = f1();
    console.log(a); // 1
    console.log(b); // 3


    var [a, ...b] = [1, 2, 3];
    console.log(a); // 1
    console.log(b); // [2, 3]

    var o = {p: 42, q: true};  //working on objects
    var {p, q} = o;
    console.log(p); // 42
    console.log(q); // true

    var o = {p: 42, q: true};
    var {p: foo, q: bar} = o;
    console.log(foo); // 42 
    console.log(bar); // true

    var {a = 10, b = 5} = {a: 3}; // a=3 , b =5

    var metadata = {
        title: 'Scratchpad',
        translations: [
            {
                url: '/de/docs/Tools/Scratchpad',
                title: 'JavaScript-Umgebung'
            }
        ],
        url: '/en-US/docs/Tools/Scratchpad'
    };
    var {title: englishTitle, translations: [{title: localeTitle}]} = metadata;
    console.log(englishTitle); // "Scratchpad"
    console.log(localeTitle);  // "JavaScript-Umgebung"
    
    
    var people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (var {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}
// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"


}
