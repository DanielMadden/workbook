# 3: C# Enums

## Prompts

### *What is an Enum, and what are some use cases for them?*
<br/>

```
Enums are strongly typed constants. They allow you to assign symbolic names to integral values. 

This can be used to make code much easier to read, as the result of "North," "East," "South," and "West" are much more distinguishable then 0, 1, 2, and 3.
```
<br/><hr/><br/>

### *How can you modify an Enum?*
<br/>

```c#
// No. Their value cannot be changed after creation.
// But you can modify the indexes of each enum on creation. For example:

public enum Direction {
  East = 0,
  North = 90,
  West = 180,
  South = 270,
}
```
<br/><hr/><br/>

### *How have you used Enums in your afternoon lab projects this far?(if you have not yet, give an example of how you could)*
<br/>

```
Yes and no. Not in C#, but my capstone group did use it on our MongoDB for the days of the week.

An example for gregslist would be to have an enum for the Job model: "Part-time," "Full-time," or "Contract"
```
<br/><hr/><br/>