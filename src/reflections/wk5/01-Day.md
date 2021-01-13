# 1: Queries

## Prompts

### *What is the purpose of a Query string?*
<br/>

Query strings are what we use to assign values to parameters when we're requesting data from a server! (i.e. supposed I insert a query string "?count=10" in the hopes of receiving 10 of some form of data)
<br/><hr/><br/>

### *What is the format of a query parameter? How does it start? How do you distinguish between one parameter and the next?*
<br/>

?`key`=`value`&`key2`=`value`

The query starts with a `?` mark, then directly following it is the `key` we want to pass, followed by an `=` sign and then the `value` of that key. 

Express will interpret this like so:
`{key: value}`

**Arrays**

If a single key shows up multiple times:
`?cars=car1&cars=car2`

It will be interpreted like so: `{cars: ['car1', 'car2']}`

**Objects**

If square brackets are used in a parameter: `?shoe[color]=white`

It will be interpreted like so: `{shoe: {color: 'white'}}`
<br/><br/><hr/><br/>

### *When do you think query parameters would be helpful when writing your server?*
<br/>

Whenever the client wants specific results, query parameters will *always* be helpful. I've forced myself to take in an `id` query parameter rather than an `:id` on the link in order to practice parsing queries.
<br/><hr/><br/>

Afternoon Project: https://github.com/DanielMadden/BCW_BurgersAPI

<hr/>

## Boise Codeworks: Burgers API

Today we learned how to create an API that handles .get .post .put and .delete requests.

I finished it fairly quickly, so I challenged myself to develop a system in the get function that filters through the data and creates a new object off of accepted data. Then I decided to improve upon the system to make certain properties "required."

I did so with the following two objects:

```javascript
let checkData = {
        "name": [" ", true],
        "description": [" ", true],
        "ingredients": [[], false],
        "notes": [" ", false]
      }
let acceptedData = {}
```
Each property in the `checkData` object is an array. The zero index of the array is the expected type of data, and the first index sets it's requirement. I then use the new `Object.entries()` method to convert the received request body into an array of arrays of keys and values then cycle through each one:
```javascript
for (const [key, value] of Object.entries(req.body)) {
    if (checkData[key] && typeof checkData[key][0] == typeof value) {
        acceptedData[key] = value
        if (checkData[key][1]) checkData[key][1] = false
    }
}
```
If the received data contained an expected key AND the value was the right type of value, then I set that property and value within the `acceptedData` object. This object will be what I will push to the database. Also, if the property of the `checkData` object was required and fulfilled, I set that true value to false.

After the for loop runs, I create an array based off of the required properties in `checkData` that were not fulfilled:
```javascript
let missesArr = Object.entries(checkData).filter(([key, [type, needed]]) => needed == true)
```
If this `missesArr` has a length that is less than one, I know that everything passed. I then send that accepted object to the database:
```javascript
if (missesArr.length < 1) {
    res.send(burgersService.create(acceptedData))
}
```
Otherwise, I'm not going to accept the data and I'm going to tell the client what went wrong:
```javascript
let missesObj = {
        "message": "You either didn't pass a required key or passed it with improper data. The following properties show the required keys and their required form of data."
}
    missesArr.forEach(([key, [type, needed]]) => missesObj[key] = typeof type)
    res.send(missesObj)
```
And that's it! Challenging myself was my favorite part of the project. I love programming.

<br/>


| Project:  | Burgers API                     |
|-----------|-----------------------------------|
| Course:   | Boise Codeworks Fullstack Program |
| Date:     | January 11, 2021                  |
| Position: | W5_D1                     |