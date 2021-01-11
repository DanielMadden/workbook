# Promises

"Promises are only meant to be broken."

*insert sad boi hours*

<br/><br/>

### *What are the three states of a promise?*
<br/>

Pending: Initial State, before the Promise succeeds or fails

Resolved: Completed Promise

Rejected: Failed Promise
<br/><br/><hr/><br/>

### *How do promises seek to resolve the issues of callback hell?*
<br/>

Promises allow us to chain our functions rather than nesting them into the endless pyramid. It looks much cleaner and is much, much easier to read. We can use the final function at the end of the chain to handle the final error.
<br/><br/><hr/><br/>

### *What is the difference between .then() and .catch()?*
<br/>

.then() is used for resolved Promises, while .catch is used for rejected Promises. Similar to our try {} catch (error) {}.

