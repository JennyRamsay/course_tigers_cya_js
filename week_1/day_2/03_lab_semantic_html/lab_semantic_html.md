# Semantic HTML Lab

**Learning Objectives:**

- Be able to correctly use some common HTML tags
- Be able to create and set up a new HTML document
- Be able to structure content using semantic HTML tags
- Be able to apply some basic techniques to ensure accessibility in HTML
  - alt text
  - aria labels

## Brief

In this lab you will practice breaking down content in a mockup of a webpage into the appropriate semantic HTML elements.

Use thease resources to help you choose an appropriate element for each piece of content. 

[MDN documention on HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
[Semantic HTML cheatsheet](https://websitesetup.org/wp-content/uploads/2014/09/html5-cheat-sheet.png)

Once broken down into the correct elements, you will write the HTML for the page in an HTML file. If you get that completed and have some time left you should go through the page and add `alt` text and `aria-label`s to elements as appropriate to practice accessibility.

You can ignore the icons in the navbar and substitute then for the word "icon". If you still have time after adding accessibility attributes you can search Google to try add in icons.

## Webpage Mockup

![Mockup of webpage](./images/mockup.png)

## Approach

It's recommended that you annotate the mockup with the elements you think are appropriate, this will help you in building the HTML when you start coding.

Do not think about styling or layout, focus solely on breaking down pieces of content.

## Hints

Don't forget to use the `html:5` snippet when you first create your HTML file.

Make sure to use the semantic HTML reference guide to help you choose elements.

When adding accessibility attributes consider the following:

- Alt text on img tags
  - Alt text allows screenreaders to describe images for visually impaired users or if the image hasn't loaded (which helps accessibility for places which are information poor)
  - `<img src="https://placebear.com/200/200" alt="Bears in a river">`
- The aria-label attribute
  - Used to help screenreaders describe an element. Only to be used when a visible label for the element is not on the screen.
  - `<header aria-label="Site navbar"> ... </header>`
