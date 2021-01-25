# 4: Nested Routes

## Prompts

### *What is a nested route?*
<br/>

A nested route is a route that is a child of another route. Basically, it is "nested" inside of a parent route.
<br/><br/><hr/><br/>

### *When might you use a nested route?*
<br/>

I would use nested routes when I want to incorporate a more complex URL path system (i.e. if I have `website.com/pokemon` and want to add more paths such as `website.com/pokemon/current` or `website.com/pokemon/favorites`)
<br/><br/><hr/><br/>

### *Can you pass parameters through nested routes?*
<br/>

Yes, and I would pass them the same way we've passed parameters through the parent routes:

for an `id` parameter: `website.com/pokemon/favorites/:id`

As a side note, I am _very_ glad the vue router syntax is similar to the express router syntax.
<br/>
<br/>

#### *When might you use them?*

I would use these if I ever wanted to specify anything through the url path, such as an id to get a specified result.
<br/><br/><hr/><br/>

| Project:  | Vue + Auth0: Pokedex                 |
|-----------|-----------------------------------|
| Course:   | Boise Codeworks Fullstack Program |
| Date:     | January 21, 2021                  |
| Position: | Week 6, Day 4                     |
| Link: | https://github.com/DanielMadden-BCW/BCW_Pokedex_Vue_Auth0 |