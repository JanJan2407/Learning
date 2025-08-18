1. //forEach:
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) { //Multiply all elements of an array by 10
  arr[index] = item * 10;               // index and arr are optional
}

2. document.querySelector() document.querySelectorAll() //Put css selectors in to work like li .class #id ...
3. getAttribute setAttribute
4. className or better classList .add() .remove() .toggle()
5. .parentElement(one) .children (all)
6. .addEventListener(event, function) // function here is not called just passed in even if it has parameters  
7. .createElement .createTextNode .appendChild
8. event: keydown --> event.key --> "enter", "k", "shift" ...
9. event: input (anytime input is changed)
10. scope does matter !
11. ternary operator: condition ? ifTrue : ifFalse 
12. switch(something){
  case (something == smt1):
      type here
      break;
  case(something == smt2):
      type here
      break;
  ...
  default:
      if no condition is met
}
13. const obj{
  f1: feature1,
  f2: feature2,
  f3: feature3
}
const {f1, f2, f3} = obj;
// f1 === feature1, f2 === feature2, f3 === feature3

14. const a = 'test';
const b = 'hi';
const obj = {a,b};

15. Symbol() -- a unique value even if 2 symbols have the same value they are not equal

16. Arrow functions
  function add(a, b){
    return a + b;
  }
is equal to
  const add(a, b) => a + b;

17.   Currying
const multiply = (a) => (b) => (a * b);
const multiplyBy10 = multiply(10);
multiplyBy10(30); // 300
multiply(5)(8); //5*8 === 40

18. Compose //combine 2 or more functions
const com = (f, g) => (a) => (f(g(a)));
const doubleNum = (num) => num * 2; 
const addTwo = (num) => num + 2;
compose(doubleNum, addTwo)(10); // 24

19. map with an array
const arr1 = [1,3,5,7,9];
const double = arr1.map((n) => {return n*2}) // or arr1.map(n => n*2); [2,6,10,14,18]

20. filter with an array
const arr1 = [1,3,5,7,9];
const biggerThan5 = arr1.filter((n) => {return n > 5}); // or shorter arr1.filter(n => n > 5)

21. reduce with an array 
const arr1 = [1,3,5,7,9]
const x = 0;
const sum = arr1.reduce((acc, num) => {return acc+num}, x); //1+3+5+7+9+x === 25

22. OOP 
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hello I am ${this.name}, and I am ${this.age} years old`);
  }
}

class Student extends Person{
  constructor(name, age, school){
    super(name, age);
    this.school = school;
  }
  promote(){
    console.log(`You should really go to ${this.school} :\)`);
  }
}

const person1 = new Student('Jan', 17, 'Harvard');
person1.sayHi();
person1.promote();