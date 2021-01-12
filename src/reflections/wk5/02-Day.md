# MongoDb Relationships

## Prompts

### *What are the three types of relationships?*
<br/>

One-To-One (1:1)

One-To-Many (1:A)

Many-To-Many (A:B)
<br/><br/><hr/><br/>

### *What are the benefits of traditional linking of relationships instead of embedding?*
<br/>

Well, if we wanted to connect two documents of data (i.e. a `user` vs. their `map` data for the day) we could use a `foreign key`. A foreign key represents a signifying `ID` that will link both types of data to one another.

Now, what's wrong with embedding? Well, the potential problem with embedding is that a single document's content may exceed expectations. Let's say we embed the `map` data inside of the `user` data as a property. After receiving our user data, we would then have to filter through the property that holds that map data... A bit of extra work.

The traditional practice of linking not only allows us to instantly find what we need through our database functions, but also to have more control over our file sizes!
<br/><br/><hr/><br/>

### *What are some challenges faced when deciding how to manage a many-to-many relationship that ultimately drive your decision on how to create it?*
<br/>

The question is, in the relationship of `A:B`, which will hold more/less of the other one? Will `A` have more `B` in it? Or will `B` have more `A` in it? This is what will drive our decision.

Lets say `A = "Movie Genres"`

And `B = "Movies"`

Clearly, we're going to have more movies in a genre rather than the genres that each movie holds. In this case, it is best to use `One-Way Embedding.`

<br/><br/>

In some cases, if both `A` and `B` are similar to one another in their maximum relationships, `Two-Way Embedding` *could* be used. But honestly, `One-Way Embedding` seems like the safest practice since it prepares for potential overflow of relationships in one of the categories.