# 4: REST


### *What does REST stand for?*
<br/>

REST stands for REpresentational State Transfer. When an API is called, the server will *transfer* to the client a *representation* of the *state* of the requested resource.

"Representation" because we may not be getting the *exact* data, but merely a representation of it.

"State" because we are only seeing what we were *transfered* at the time of request.
<br/><br/><hr/><br/>

### *What does stateless mean?*
<br/>

Stateless means that the server doesn't remember anything about the user who uses the API. This allows for anonymity along with efficiency due to one less value to worry about.
<br/><br/><hr/><br/>

### *What URL pattern is used when writing a RESTful API?*
<br/>

The HTTP method. URLS should include nouns, not verbs, and should be plural for consistency.

