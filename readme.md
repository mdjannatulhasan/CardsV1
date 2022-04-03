

This directory is used for contained the details and build contents of the Profile Cards Project. 

There are 3 directories for the 3 different layouts.

The first phase of the project is to ONLY build the Vertical card. Once we have it all implemented and figured out we will work on the other two.

Reminder that the outer container of a card is self contained. Meaning we should be able to drop it into just about any div on a page and it will appear as designed. Meaning we need to stop as much parent inheritance as possible.

A card is to be HTML and CSS only. A small amount of localized JS is fine as long as it is only within an object. So no script tags or links to external scripts.

CSS will be to an external css (sbcards.css in root of folder). 

We need to prefix the classes for each card element to the card type unless a class use case works across all card layouts.  

CSS prefix should be:
 - sbcv //vertical
 - sbcp //phone
 - sbcw //web

 See Asana for further instructions and notes.