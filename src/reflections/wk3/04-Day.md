# 4: The Observer Pattern

## Prompts
<br/>

### *What problem does the Observer Pattern seek to solve?*
<br/>

It simplifies the problem of trying to update loads of data or draw loads of data when a value has been updated. 
<br/><br/><hr/><br/>

### *What are the three mechanisms of the Observer Pattern?*
<br/>

Three mechanisms: 

Subscribing, which adds new observable events;
Unsubscribing, which removes observable events;
Broadcasting, which executes all events with bound data.
<br/><br/><hr/><br/>

### *Review the code generated from the bcw-template and reflect on the proxy objects from yesterday, and your understanding of the observer pattern today. With this knowledge, explain how the magic of the bcw-template uses these two concepts to manage and update the dom.*
<br/>

When we set our const ProxyState, we create a new Proxy for our AppState. Then we set our custom get and set rules which include checking if the property is a valid property. 

Now, the AppState is a special class because it is already extending the EventEmitter class. This thing is full of tons of mumbo jumbo that I can't fully comprehend, but we're basically setting our *on, off,* and *emit* functions which are mirrors of *subscribing, unsubscribing,* and *broadcasting.*

We can use these event listeners to listen for a specified property, and when it is updated we run whatever function was specified.
