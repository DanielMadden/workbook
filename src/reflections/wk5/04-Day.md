# Virtuals

## What is a virtual property?

Virtuals are additional fields for a given model *with defined functionality.* They are "ghost properties," meaning that they aren't persisted in the database; they only exist logically.

## When might you use one?

I have literally used them to access the _id of a user in my accounts collection to assign into a property in another collection. So, there's an example.

A hypothetical application would be to join two properties together (such as first and last name) on a get, or to split a whole name into first and last name properties on a set.

## How do you search by a virtual property's value?

Is this a trick question?...

```"Virtuals are NOT available for document queries or field selection. Only non-virtual properties work for queries and field selections."```

<hr/>

Hackathon: https://github.com/DanielMadden/hackathonn