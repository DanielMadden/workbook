# 4: Welcome to SQL

## Prompts

### *In a SQL table, what is the difference between information in a row and information in a column?*
<br/>

Information in a row all represent a single "object" or "insert." Each row has the same type of values, represented by each column. For example, I can have three columns: name, age, and description. I can also have two rows, both of which will have a name, age, and description (i.e. "Johnny", 5, "He's the boy" and "Billy", 10, "Bob Joe").
<br/><hr/><br/>

### *Demonstrate the basic structure for creating a new table called characters with the values name, age, description as strings, and an int id*
<br/>

```
CREATE TABLE characters
(
  id INT AUTO_INCREMENT,
  name VARCHAR(255),
  age VARCHAR(255),
  description VARCHAR(255),

  PRIMARY KEY(id)
)
```
<br/><hr/><br/>

### *What is the difference between the following statements*
<br/>

```
DELETE FROM table_name;
DROP TABLE table_name;
```

DELETE FROM deletes the values INSIDE the table, while DROP TABLE deletes the table and everything within it
<br/><hr/><br/>