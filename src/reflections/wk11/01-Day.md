# 1: C# Inheritance

## Prompts

### *What does Inheritance accomplish for us in C#?*
<br/>

Inheritance is a mechanism to share or reuse code, and also a mechanism to imprint identity into a class.
<br/><hr/><br/>

### *How does Member inheritance work in C#? Does a class inherit all members of the base class?*
<br/>

A derived class inherits all members of the parent. This means that it retains the full functionality and properties of the parent. The members can be overridden, and members can be added onto the child, but it is still of type parent.
<br/><hr/><br/>

### *How does accessibility affect inheritance?*
<br/>

Private members cannot be accessed in a child class that inherits the parent class unless the child class is nested within the parent class.
Protected members are *only* visible to children.
Internal members are available to all derived classes located in the same assembly as the parent.
Public members are, as usual, available to all.
<br/><hr/><br/>