# 3: Subdocuments

## In simple terms what is a subdocument?

A subdocument is a documented nested inside of another document.

## When might you use a sub-document?

I thought subdocuments aren't recommended for one-to-many relationships??... Isn't the traditional practice of linking prefered?

I mean, as long as our subdocument isn't going to be HUGE, I guess it'd be fine to put it inside of the parent document...

## How do you add to a collection of sub-documents? What about editing them?

You can add with a simple Array.push() method.

If you want to edit them, you'd assign their properties just as you would any object.

The only difference is that we have to call a .save() after making all of our changes.

<hr/>

Afternoon Project: https://github.com/DanielMadden/bcw_UniverseAPI

