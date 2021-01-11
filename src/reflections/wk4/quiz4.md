# UnderStanding Asynchronous Code, and API's

**1.** What is the difference between `asynchronous` code and `synchronous` code?
<!-- enter you answer in the space below -->
```
Synchronous code fires each line off in the order that the lines are written. Asynchronous code will fire certain functions off after certain data is ready to be processed.
```
**2.** What is an event listener?
<!-- enter you answer in the space below -->
```
An event listener is a procedure in Javascript that waits for an event to occur. If we have set a listener on something, we can specify what we want to happen when that listener is fired off.
```
**3.** What does the `O` represent in the `SOLID` principles?
<!-- enter you answer in the space below -->
```
"Objects or entities should be OPEN for extension but closed for modification." Basically, we shouldn't have to modify our code to handle every single case. We can extend our code instead.
```
**4.** What is a callback / higher order function?
<!-- enter you answer in the space below -->
```
A "callback" is a "call" "back" to a function that is somewhere else in the code. 
```
**5.** What is a `promise`? How do you capture an error from a `promise`?
<!-- enter you answer in the space below -->
```
A promise is a function or database's way of saying, "Hey, I haven't sent you data back yet, but I promise that I'll get something to you." It can hold three states: pending, resolved, or rejected. If we wanted to capture an error from it, we would use the .catch() method.
```
**6.** Name three processes used to make requests over `HTTP`?
<!-- enter you answer in the space below -->
```
.get(url),
.post(url, data)
.put(url, data)
.delete(url)
```
**7.** What does the `API` acronym stand for?
<!-- enter you answer in the space below -->
```
Application Programming Interface
```
**8.** In the `MVC` design pattern, who is responsible for making calls to `APIs`?
<!-- enter you answer in the space below -->
```
The services
```
**9.** What is the purpose of encapsulation in programming?
<!-- enter you answer in the space below -->
```
Organization, fluidity, team segregation. Basically, grouping like interests.
```
**10.** What is `HTTP` response code for a successful request?
<!-- enter you answer in the space below -->
```
Anything within the 200's
```
**11.** What is a 500 error?
<!-- enter you answer in the space below -->
```
A generic error message given when something unexpected happened or if there was just no other error message to send that would have fit the bill of the situation.

Anything within the 500s is a server error.
```