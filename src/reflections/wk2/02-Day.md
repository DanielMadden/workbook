# 2: Function, Object, Loop

<div style="text-align: right">Tuesday<br/>12-08-20</div>

## Reflection

Had a lot of fun today. 

<br/><br/><br/>

## Morning Challenge

Had some fun with this and challenged myself to go the extra mile:
https://danielmadden.github.io/ComplexObject/

<br/><br/><br/>

## Afternoon Challenge

Finished the afternoon challenge extremely early, so I spent my time helping the others and teaching Chris.

<br/><br/><br/>

## Prompts

### *What are three ways to syntactically write a function? What are the differences in how the function acts (if any)?*
<br/>

1: Typical function
```js
function Hello() {
  console.log("Hello World!")
}
```
2: Variable function
```js
var Hello = function() {
  console.log("Hello World!")
}
```
3: Arrow function
```js
Hello() => {
  console.log("Hello World!")
}
```
<br/>
If a function only has one statement and the statement returns a value, the function can be written in a single line:
<br/><br/>

Variable/Arrow single return function
```js
var Hello = () => "Hello World!"

Hello() => "Hello World!"
```
<br/><hr/><br/>

### *What is the difference between Parameters and Arguments?*
<br/>

Arguments are the values that we PASS into the function. 
```js
Hello("Hello","World","!")
```
Parameters are the values we RECEIEVE into the function and LABEL for use within the function.
```js
function Hello(a, b, c) {
  console.log(a + " " + b + c)
}
```
<br/><hr/><br/>

### *What are the higher order functions? Can you provide an example?*
<br/>

Higher order functions are functions that operate on *other* functions. They can take them as arguments, refer them as parameters, or use them to obtain a new value.