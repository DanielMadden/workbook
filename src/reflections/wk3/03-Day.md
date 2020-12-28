# Proxy Objects

## Reflection

Loved this. I completely understand the Proxy now. I absolutely hated how the teachers said "it's just magic" because I ALWAYS want to know WHY and HOW something works so I can understand it's purpose. If something has no purpose, why is it even there? After asking Jake and having him explain it to me, I realized the purpose of it. And I'm glad I got to read this because now I understand the HOW of it!
<br/><br/><hr/><br/>

## Prompts
<br/>

### *What are the two common operations we will set in the handler?*
<br/>

get and set. these normally happen with all classes and objects, but by setting these get and set operators in a Proxy State, we are defining custom rules for them.
<br/><br/><hr/><br/>

### *What do you have to do with every Get to make sure the value does not become undefined?*
<br/>

We have to override the default return. This is caled a "trap."
<br/><br/><hr/><br/>

### *What are some of the benefits of the Proxy Object we are using in our application?*
<br/>

We can use these for privacy and validation! Privacy because we can restrict what values or types of values can be accecesed, and validation because we can restrict what values or types of values can be set. 