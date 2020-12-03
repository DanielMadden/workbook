# Thoughts On CSS

Tuesday<br/>
12-01-20

## What is a Pseudo-Class and what are the most common ones you think you'll use?
A pseudo class is a special selector reserved for the *states* of objects. For example, if an \<a> tag is hovered over, it obtains the pseudo class of *hover* and a new opportunity for specificity is created.
The most common ones I've used in my experience are

- :hover
- :active
- :visited
- :enabled

## What is Specificity and how might you use it to your benefit?
Specificity allows us to specify our desired targets. The * selector selects everything, then there is the tag selector, then the class selector, then the id selector, then the pseudo-class selector. 

This can be used to my benefit to affect, for example, a specific \<a> tag with the id of "linkTwo" that is currently being hovered over. I do not want to affect all \<a> tags, even when they are being hovered over. Therefore I can use the reference *#linkTwo:hover* while leaving the other tags unaffected.

## What problems do you think you could run into if you over-utilized the !important feature?
The !important feature completely overrides everything, regardless of specificity tiers. This isn't a safe practice in solving issues, since all issues can be solved with specificity. In fact, it's quite lazy. If, for example, a programmer cannot figure out why the css isn't doing what they want, they may be able to "solve" this problem by placing !important somewhere. But they haven't *really* solved the problem. Then if another developer needds to make some changes, they may not know what the purpose of the !important tag is, and it may interfere with their additions.
It's a much better practice to simply take the time to figure out what the problem is, then target it specifically.

## Today's CSS Project
This project was decently fun and made me bring up some old techniques from the past. I was also able to help two of my classmates since I have a strong background in HTML, CSS, and Javascript. I heeded the common issue of "are you *REALLY* helping them?" and refrained from giving direct answers. Instead, I *directed* them towards solutions and goals. It was really interesting to see how the minds of other coders work with less experience. I am glad to have some previous experience and use my gifts to help others. 

Link to the project:



