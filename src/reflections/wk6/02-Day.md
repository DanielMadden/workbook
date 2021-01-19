# 2: Props in Vue

## Prompts

### *1 & 2 ~ What are props and what are they used for?*
<br/>

"Props are how we pass variables and other information around between different components."

They are used to pass information down from a parent component into a child component.
<br/><br/><hr/><br/>

### *3 ~ Where can props be used or accessed?*
<br/>

Props can be used in the same way HTML attributes are used:
```html
<Camera
	name="Sony A7RIV"
	img="../sony-a7riv.jpg"
/>
```
They could then be accessed in the Camera template like so:
```html
<div class="camera">
	<h2 class="camera__name">{{ name }}</h2>
	<img class="camera__image" src="img" />
</div>
```
We can declare their types, defaults, and requirements in our script:
```javascript
props: {
  	name: {
      type: String,
      required: true,
  	},
  	img: {
      type: String,
      default: '../no-camerage-found.jpg',
  	},
  	rating: {
      type: Number,
      default: 0,
  	},
}
```
<br/><br/><hr/><br/>

| Project:  | NASA Picture Of The Day                     |
|-----------|-----------------------------------|
| Course:   | Boise Codeworks Fullstack Program |
| Date:     | January 19, 2021                  |
| Position: | Week 6, Day 2                     |
| Link: | https://github.com/DanielMadden-BCW/BCW_Nasa_Apod_Vue |