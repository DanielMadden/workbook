# 1: MVCS

## Prompts

### *What problem does using exports solve?*
<br/>

Using exports allows us to improve the efficiency of our page loads, group like interests, and hold privacy. It improves our page loads by using a single script tag in our HTML, and within that script we export everything we're going to use. This reduces the requests being made whenever we use tons of script tags. This can also hold privacy because files can only import what we've chosen to export.
<br/><br/><hr/><br/>
### *How does export differ from export default?*
<br/>

When we use multiple exports, the resulted "single" export is an object with these exports as the values of properties within this object. We can receive this by importing an object with the names of each of these properties.

When we use a default export, we export a single variable and receive this single variable in our import.
<br/><br/><hr/><br/>
### *What is a benefit of the module system?*
<br/>

Well, I kind of answered this in the exports section... it blended both of these concepts together. Refer to the first answer ^^^