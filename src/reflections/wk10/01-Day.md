# 1: C# Data Types

## Prompts

### *What are the three categories of data types? How are they different?*
<br/>

```
Value types, reference types, and pointer types.

Value types hold a data value within their own memory space.

Reference types store an address that refers to the location that the actual value is stored. 

Pointer types point to other values or data references. Changing the value of these pointers can change the value of their reference as well.
```
<br/><hr/><br/>

### *What are the Value-type data types? What differences do you notice from JavaScript?*
<br/>

```
bool
byte
char
decimal
double
enum
float
int
long
sbyte
short
struct
uint
ulong
ushort

The main difference I notice is the HARD typing. It is far more specific than javascript.
```
<br/><hr/><br/>

### *In your own words how do Reference types get stored in memory? How does this differ from Value types?*
<br/>

```
Reference types have a random memory slot specifically made for their value. Then the "address" of that memory slot is placed in the direct memory of the program.
```
<br/><hr/><br/>