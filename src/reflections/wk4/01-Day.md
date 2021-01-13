# 1: Queries

### *What are some signs and causes of callback hell?*
<br/>

A sign of callback hell can be the endless pyramid of closing brackets. A main cause of this is due to someone nesting all the functions within the other functions instead of calling them from another location.
<br/><br/><hr/><br/>

### *What does asynchronous mean and how are callbacks involved?*
<br/>

Asynchronous means "take some time" or "act on this later." Callbacks just refer to the functions that we run AFTER data is finished loading.
<br/><br/><hr/><br/>

### *Summarize 3 ways to fix callback hell*
<br/>

1. Keep your code shallow. Name your functions. Organize your functions. Call the function instead of nesting it within another one.

2. Modularize. Use imports. Use exports. Use the MVCS pattern.

3. Handle every single error. Use try {} catch (error) {} to deal with failiures in the code.

