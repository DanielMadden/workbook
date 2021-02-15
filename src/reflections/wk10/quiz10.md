# ~ Quiz 10


**1.** What is the purpose of a `namespace`?
<!-- enter you answer in the space below -->
```
A namespace is designed for providing a way to keep one set of names separate from another. The class names declared in one namespace does not conflict with the same class names declared in another.

Basically, it provides another level of scoping.
```
**2.** What is the difference between a `class` and a `struct`?
<!-- enter you answer in the space below -->
```
There is no point to me typing all of this out; there are many differences, which one would not memorize. Therefore here is a detailed list, pulled off the internet, of the differences between the two:

Struct cannot have a default constructor (a constructor without parameters) or a destructor.

Structs are value types and are copied on assignment.

Structs are value types while classes are reference types.

Structs can be instantiated without using a new operator.

A struct cannot inherit from another struct or class, and it cannot be the base of a class. All structs inherit directly from System.ValueType, which inherits from System.Object.

Struct cannot be a base class. So, Struct types cannot abstract and are always implicitly sealed.

Abstract and sealed modifiers are not allowed and struct member cannot be protected or protected internals.

Function members in a struct cannot be abstract or virtual, and the override modifier is allowed only to the override methods inherited from System.ValueType.

Struct does not allow the instance field declarations to include variable initializers. But, static fields of a struct are allowed to include variable initializers.

A struct can implement interfaces.

A struct can be used as a nullable type and can be assigned a null value.
```
**3.** What is the method that returns an instance of a class, yet it has no return type?
<!-- enter you answer in the space below -->
```
void
```
## Example 1
```c#
abstract class Car
{
  ...
  public virtual string Start()
  {
    return "Vroooom";
  }
}
```
**5.** In the example what is the access modifier of the `Start()` method?
<!-- enter you answer in the space below -->
```
public
```
**6.** In the example what is `string` an indication of?
<!-- enter you answer in the space below -->
```
it indicates the type of value that the method will return
```
**7.** In the example what is `abstract` preventing?
<!-- enter you answer in the space below -->
```
abstract classes prevent the class from being instantiated; it can only be inherited. Kinda like a template-only class.
```
**8.** In the example what is the purpose of `virtual`?
<!-- enter you answer in the space below -->
```
The virtual type allows for method creation within a base class that can be inherited and/or overridden in the derived class.
```
**9.** Name four access modifiers:
<!-- enter you answer in the space below -->
```
public: can be accessed by anything within the same assembly or assembly that references it
interal: can only be accessed within the same assembly
protected: can only be accessed within class or derived class
private: can only be accessed within same class or struct
```
**10.** If you set a class or method to private, what can access it?
<!-- enter you answer in the space below -->
```
Private Classes can be accessed within the same assembly
Private Methods can be accessed within the same class
```