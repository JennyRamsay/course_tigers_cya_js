# Basic HTML tags for content

In this lesson we will cover the most commonly used HTML tags - there are many more, of course, some of them obsolete by now, some of them might have niche use cases. However, one of my favourite quotes from Albert Einstein that *is* actually from him is "Never memorize something that you can look up"!

There is no need to memorize things that can be looked up - we can use our brain capacity for much more useful concepts.

Important: HTML tags can be either regular or self-closing. Regular tags have another set of tags that close itself down, like an h1 tag: `<h1>Hello World!</h1>`.

Self closing tags do not need another set of tags, instead it used to use the `/` character to indicate its end. `<img src="some_url.jpg" />`. With HTML5, this character is optional, we can omit it entirely, like so: `<img src="some_url.jpg">`

## HTML attributes

All HTML tags have access to global attributes. Attributes are used as additional values in our tags to configure them or adjust their behaviour. Examples of global attributes that we will use often are `class` and `id` (mostly for CSS). Some tags have specific attributes only used by them, such as the `<img>` tag's `src`, or an `<a>` tag's `href`.

```html
<p class="main-paragraph"> This text have its class attribute set to 'main-paragraph' </p>

<a href="www.google.com">This link has a tag-specific attribute called 'href'</a>
```

## Paragraph - `<p></p>`

Paragraph tags can be used to - shocking! - represent a paragraph. It is important for splitting up our text content with `p` tags.

First, it helps with accessibility - screen readers can work better with our website if we use paragraphs. 

Second, the only way to format the text to nicely separated paragraphs is to use these tags. If we don't, we will get a large wall of text with no indentation whatsoever:

```html
<!--This text will go on a single line, , even though I use a linebreak at the end of it:-->
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
Tenetur facilis nam quam exercitationem quaerat assumenda vero id nobis distinctio.
Sequi, tempora commodi illo placeat debitis libero a perferendis eligendi qui!</p>

<!--This text will nicely separate into paragraphs-->
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<p>Tenetur facilis nam quam exercitationem quaerat assumenda vero id nobis distinctio. </p>
<p>Sequi, tempora commodi illo placeat debitis libero a perferendis eligendi qui!</p>
```

Hint: Use `lorem<number>` in VS Code to quickly create large chunks of text, eg. `lorem500` + `tab` or `enter`.

Important: NEVER enter text values without an enclosing tag around it. It will display the content, but you have no way of formatting it, and it's also bad for accessibility.

## Section Heading elements - `<h1> - <h6>`

It represents section headings - `h1` being the highest, `h6` is the lowest. Think of them as sub-section headers after the first `h1` tag.

* Do not use heading tags to resize text - use CSS for it. Headings are useful to indicate relative importance, but should not be used for general purpose resizing.
* Do not skip section headings - after `h1` always use `h2`, then `h3`, and so on.
* Only use one `h1` tag per page. Imagine it being the title, or the purpose of the page - you do not give your book or movie multiple titles, don't do that with wepages either!

```html
<h1>HTML Course Review</h1>
<h2>Summary</h2>
<p>Fascinating, but not enough dog images. 3.5/5</p>

<h2>Overview</h2>
<h3>Day 1</h3>
<p>Covered HTML. No colours! Bored.</p>

<h3>Day 2</h3>
<p>CSS day! Finally, I can make things neon</p>

<h3>Day 3</h3>
<p>Finally! My DogeBook website is live! </p>

<h2>Final comments</h2>
<p>Eh, it was ok</p>
```

## Line break element - `<br>`

Our first self-closing tag. Used to create a line break in text. Useful for addresses or poems, where the separation of lines is important.

Important: Do NOT use it for creating larger margins between paragraphs - use the paragraphs' `margin` property for it!

```html
37 Castle Terrace<br> 
Edinburgh<br> 
EH1 2ELM<br> 
United Kingdom
```

## Image tag - `<img>`

Used for embedding an image in the document.

This is the first tag where we will need to use an attribute for our tag - without the `src` attribute, our `<img>` tag will not work. The `src` tag will use a URL to the image - be it on the users machine, the server where the webpage is being hosted or a URL to another website's image. Remember that you should never use an image which you do not own on a commercial site!

Note that where we get our image from and how big it is will have an effect on our website's performance!

Another attribute that you should use for image tags is the `alt` - it is a text desciption of the image. It should ALWAYS be there - Screen readers will use it for their users, plus whenever the image cannot be loaded for some reason it will display the text instead of a broken image placeholder.

```html
<img src="https://dailybusinessgroup.co.uk/wp-content/uploads/2015/10/2009-01-01-12.10.49-e1444743139452.jpg" alt="Can you find Zsolt in the picture?">
```

## Anchor tag - `<a></a>`

Anchor tags - also known as links/hyperlinks - are used for navigation.

These will also require attributes to work properly - namely `href`. The `href` attribute will need a URL address to it to work properly, but it can be many things - links to another website, a different page on the same site, a link to download something, an e-mail address or phone number.

Whatever goes between the anchor tags will be the link itself that the user clicks on - this should always indicate the link's purpose!

```html
<a href="https://www.codeclan.com">CodeClan's website!</a>
<a href="mailto:info@codeclan.com">Send us some mail!</a>
<a href="tel:+44131 290 2600">Or give us a call!</a>
```

A neat trick that you can use is that you can turn images (or any HTML tag) into anchor tags! Simply insert an `img` tag inside an anchor tag with a specific URL:

```html
<a href="https://www.codeclan.com"><img src="https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/4975/s300/codeclan-logo-coursereport.png"></a>
```

## Ordered/Unordered lists with list items - `<ol></ol>, <ul></ul>, <li></li>`

Quite self-explanatory: when you need itemized lists, you should use ordered or unordered lists, with as many list items nested as you need.

```html
<ul>
    <li>Alpha</li>
    <li>Bravo</li>
    <li>Charlie</li>
</ul>

<ol>
    <li> First action </li>
    <li> Second action </li>
    <li> Third action </li>
</ol>
```

You can nest any other element inside these tags (like anchor tags inside an `<li>` or even other ordered/unordered lists!

```html
<ul>
    <li>My favourite films:</li>
        <ol>
	    <li>LOTR: Fellowship of the Ring</li>
	    <li>LOTR: The Two Towers</li>
	    <li>LOTR: The Return of the King</li>
	</ol>
    <li>My favourite websites:</li>
	<ol>
	    <li><a href="https://developer.mozilla.org/en-US/">THE MDN WEBSITE!</a></li>
	    <li><a href="https://codepen.io/">Codepen.io, for the designerz!</a></li>
	</ol>
</ul>
```

## TASK (20 minutes)

Figure out what the following HTML tags do, using the links provided:

`<iframe>` `<object>` `<b>` `<em>` `<blockquote>` `<i>`

Hint: Try searching for them in the following format: `html iframe mdn`/`html b mdn`/`html i mdn`


There are plenty of other tags used for formatting text - we will not look into them, but with the above research skills, you should find them and learn how to use them no problem!
