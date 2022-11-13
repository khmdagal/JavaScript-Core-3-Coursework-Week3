# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
Answer:
line 4 and 1 are separate variables, therefore line6 is calling the global varialbe that exits which is line 1 and the value of x = 1.
further more the f1 function is not called in this example, therefore line 5 will not be executed.

## Question 2

Take a look at the following code:

```
line
1    let x = 10
2    function f1(){
3    console.log(x)
4    let y = 20
5    }
6
7  console.log(f1())
8  console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
Answer:-
The output will be
1 output (10 )- this ten coming from line 3 that logs the x, so the program will look above line 3 but within the function scop,
and if it doesn't fine a varialble decleared as x, it will go up one level above. and that will the line 1.

2 output (Undefined) is coming from line 7 that is logging a function that has not return key word, further more this undefined output
could be disappear is you don't use the two console.logs line 7 and 3.

3 output (referenceErro) line 8 can not print out the value of y in line 4, because line 4 is local scope or in f1 function scope

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);




const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
Answer:-
First out put is coming from f1 will be 9, and the reason is that x is decleared with constant variable, and cann't be re-assign to another value.
second out put is coming from f2 10 the reason is that the y object has one proport called x and that has x has value of 9, 
so I believe object propety are mutable, thought the object it self is decleared with const key word.
