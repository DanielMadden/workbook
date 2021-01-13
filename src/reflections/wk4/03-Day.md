# 3: Async and Await


### *What is the purpose of async/await?*
<br/>

The purpose of async/await was to further improve on the promises which were meant to improve upon the callback hell. Promises were great, but it was clear they needed more ease due to their complexity and syntax. 
<br/><br/><hr/><br/>

### *What must you do to await a promise inside of a function?*
<br/>

You must make sure that the function is declared as an asynchronous function. This can be done by placing "async" before the function's declaration.
<br/><br/><hr/><br/>

### *What are some of the primary benefits of async/await?*
<br/>

1. The code is MUCH simpler to read in comparison to the previous promise syntax (and especially the callback syntax)
2. The code is also much easier to chain.
3. The code is treated as if it's synchronous code, allowing for the debugger to step through it (because the code won't continue until the promise resolves)

