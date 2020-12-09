# Javascript

<div style="text-align: right">Monday<br/>12-07-20</div>

## Reflection 

My anxiety during lecture is unbearable. I want to keep moving around. I want to run out of class. I'm not sure what it is. Do I have ADD? ADHD? Not sure. All my life I've refrained from labeling conditions and now I'm finally beginning to notice them. I bought a fidget cube that will arrive Thursday. Hopefully it helps.

Anyways...

Went over Javascript today. Even though I've used it a TON, I actually learned some things I didn't know! Such as accessing and modifying objects and arrays, and which one is typically better to use.
<br/><br/><br/>

## Challenge 

Fun and slightly challenging.

https://github.com/DanielMadden/js-tests-basics
<br/><br/><br/>
## Prompts 

### *What is Scope?*
<br/>
Scope in javascript refers to the accesibility of variables. There are two scopes: local, and global. A variable declared inside a function is local; only available within that function. A variable declared outside of any function is global; available everywhere. 
<br/><br/><hr/><br/>

### *What is Hoisting?*
<br/>
Hoisting is javascript's default behavior of moving all declarations to the top. Because of  this, we can alter or call a variable "before" it has been declared. Example 1 gives  the same result as Example 2:
<br/><br/>
<h3>Example 1</h3>

```js
x = 5;

elem = document.getElementById("demo"); 
elem.innerHTML = x;                     

var x;
```

<h3>Example 2</h3>

```js
var x;
x = 5; 

elem = document.getElementById("demo"); 
elem.innerHTML = x;             
```   

*(Examples taken off of w3schools)*
<br/><br/><hr/><br/>

### *In what cases might you use let vs const vs var?*
<br/>

I used to use *var* a lot when I coded as a kid, but after reading the documentation I honestly think that using this may not be the best decision anymore. The only case I can think of using this is if I want a variable that I can change anywhere at anytime, which isn't the best practice...

*let* is going to be my main use due to its restrictions, mainly in keeping variables within their function.

*const* can be used if I want a hard-set variable throughout the code.
<br/><br/><hr/><br/>