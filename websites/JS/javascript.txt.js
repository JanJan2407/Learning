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

23. clone an Object
obj1 = {a:1, b:2};
obj2 = {...obj1};
// If object has inner objects use JSON:
obj3 = JSON.parse(JSON.stringify(obj1)); //Not the best

24. If string has a substring
string.includes() // Or for an array

25. Add spaces to strings 
.padEnd .padStart

26. Object.entries('Both keys and values') Object.values() Object.keys()

27. arr.flat(n) // Remove nested loops up to n levels deep default is 1 --> also removes empty entires to an array
arr = [1, 2, [3, 4]];
arr.flat() === [1, 2, 3, 4];

28. .trimStart(), .trimEnd() remove all white spaces before and after string

29. .fromEntries [['jan', 17], ['person', 18]] ===> {'jan':17, 'person', 18}

30. try catch -- error is an optional parameter for catch

31. for (item of items) // for item in items from python

32. for(item in object) // item is each of the keys from an object

33. type bigint for calculating with very big numbers > 9,000,000,000,000,000 

34. optional chaining operator object?.prop1?.prop2 // Does object have prop1 and then if so does prop1 have object with prop2

35. ?? checks if value is null or undefined

36. string.replaceAll('old', 'new') // Replace all instances of old to new in a string

37. arr.at() // In this at you can also add -1 for last or -2 for second to last ... in normal arr[i] you can't do that

38. arr.findLast() // Find last element (you can give a special instruction like item => item > 15 // Last item that is greater than 15)
38.1 arr.findLastIndex() // Obvious

39. reverse() // Reverse list and change original
39.1 toReversed() // Return reversed list but keep the original
40. // Same as 39 for sort() and toSorted()

41. splice(startIndex, howMany) // Array method removing `howMany` items starting from `startIndex` index
41.1 toSpliced() // Same as other 2

42. .with(index, toWhat) // Array method to modify an element at index 'index' with toWhat returns new list original is not changed !

43. Object.groupBy(objectList, function) // Group objects based on a function like:

const pokemons = [
  { name: "bulbasaur", type: "grass"},
  { name: "blastoise", type: "water"},
  { name: "charmander",  type: "fire"},
  { name: "ivysaur", type: "grass"},
  { name: "charmeleon",  type: "fire"},
  { name: "charizard",  type: "fire"},
  { name: "squirtle", type: "water"},
  { name: "venusaur", type: "grass"},
  { name: "wartortle", type: "water"},
  { name: "pikachu", type: "electric"}
];

Object.groupBy(pokemons, (i) => {
    return i.type;
}); 

44. debugger; // To access the debugger in console

45. JS is single threaded (1 call stack)
