# 2: SQL Relationships

## Prompts

### *What is the difference between a primary key and a foreign key*
<br/>

A primary key is the unique identifier for each row. There are no other rows that have the same primary key.
A foreign key references a key in another table.
<br/><hr/><br/>

### *What is an Alias?*
<br/>

Aliases are what we would think of as variables. They allow us to assign a "name" to a value.
They are declared directly after the name of a table.
<br/><hr/><br/>

### *Demonstrate how you would query a join statement that would get all of a doctors patients from the following collections:*
<br/>

```sql
CREATE TABLE doctors (
  id INT NOT NULL AUTO_INCREMENT,
  -- CODE OMITTED
  PRIMARY KEY (id)
)

CREATE TABLE patients (
  id INT NOT NULL AUTO_INCREMENT,
  -- CODE OMITTED
  PRIMARY KEY (id)
)

CREATE TABLE doctorpatients (
  id INT NOT NULL AUTO_INCREMENT,
  doctorId INT NOT NULL,
  patientId INT NOT NULL,

  FOREIGN KEY (doctorId)
    REFERENCES doctors(id),
  FOREIGN KEY (patientId)
    REFERENCES patients(id),
)
```

```sql
SELECT 
    dp.*,
    p.*,
FROM doctorpatients dp
    JOIN patients p
        ON p.id = dp.patientId
WHERE dp.doctorId = @doctorId
```
<br/><hr/><br/>