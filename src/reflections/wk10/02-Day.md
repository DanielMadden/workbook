# 2: C# List

## Prompts

### *What is a List in C#?*
<br/>

```
A list is a generic type. Very similar to an array, except it can have any amount of indices (does not have to be specified on instantiation), and it has a .Count rather than a .Length.
```
<br/><hr/><br/>

### *What List methods seem like you might use them often? Why?*
<br/>

```
List.Add to "push" into an "array"
List.Clear to reset
List.Contains to check if it has what we want
List.Find, List.FindAll, List.FindIndex, List.IndexOf for searching
List.Remove for deletion
List.Insert for insertion
List.Sort, List.Reverse for reordering
```
<br/><hr/><br/>

### *How would you retrieve an item from a list? What method could you use?*
<br/>

```c#
// I could find the index:
List.FindIndex(item => item.Id == itemId)

// I could access the item at its zero-based index:
List[4]

// I could use the find method
List.Find(item => item.Id == itemId)

// etc...
```
<br/><hr/><br/>