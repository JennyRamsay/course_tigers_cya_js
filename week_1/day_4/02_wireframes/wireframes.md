# Wireframes
**Learning Objectives**
- Understand the purpose of wireframes
- Be able to translate a wireframe into HTML elements and CSS layouts

## What are wireframes?
**Learning Objectives**
- Understand the purpose of wireframes

Wireframes are rough illustrations of designs for software products:
- Not detailed
- Generated from storyboarding and user stories/journeys
- Placeholder text
- Not usually coloured
- Usually communicate layouts more than aesthetics:
  - Flexboxes/Grids
  - Box model (margin & padding)
  - Element sizes
- Usually enough to break down into HTML & CSS layouts

Wireframes can serve many purposes in the development process:
- Paper prototype testing
- Allow developers to start building early
- Quick feedback from stakeholders
- Brainstorming

Wireframes are more detailed than sketches but a far cry from a high fidelity mock-up.
- Balances between detail and time/cost
- Don't necessarily require speciality skills or specific tools
  - Most people can wireframe, however _design_ is a totally different skill

## Breaking down a wireframe
**Learning Objectives**
- Be able to translate a wireframe into HTML elements and CSS layouts

Let's break down a wireframe into semantic HTML, then CSS layouts.

### The Wireframe
> Show and talk through wireframe with students

![EventBulb Landing Wireframe](./images/wireframe_1.png)

### Semantic HTML
> Annotate wireframe breaking down into semantic pieces of content
> - Can do this on board, Zoom, or show these diagrams
> - Explain each decision as it's broken down and annotated

![Breakdown Step 1](./images/html_breakdowns/1.png)
![Breakdown Step 2](./images/html_breakdowns/2.png)
![Breakdown Step 3](./images/html_breakdowns/3.png)
![Breakdown Step 4](./images/html_breakdowns/4.png)

> Note with the students that there's no semantic tag to use for the `div` box
> - Explain that a `<div>` can be used to aid styling and layout without describing content
> - Describe the use of `<div>` here, allowing us to style that box without misusing a semantic tag

![Breakdown Step 5](./images/html_breakdowns/5.png)
![Breakdown Step 6](./images/html_breakdowns/6.png)
![Breakdown Step 7](./images/html_breakdowns/7.png)

> Note with the students that despite its button-like styling, `<a>` is semantic as this 'button' will only act as a link to another page

![Breakdown Step 8](./images/html_breakdowns/8.png)

### The CSS
> Annotate wireframe breaking down into css layouts
> - Can do this on board, Zoom, or show these diagrams
> - Explain each decision as it's broken down and annotated
> - Point out that `align-items`, `justify-content`, most margins & padding, and some other layout properties are not being annotated
> - Elements not using layouts or relevant properties are ignored in the annotation

![Breakdown Step 1](./images/css_breakdowns/1.png)
![Breakdown Step 2](./images/css_breakdowns/2.png)
![Breakdown Step 3](./images/css_breakdowns/3.png)
![Breakdown Step 4](./images/css_breakdowns/4.png)
![Breakdown Step 5](./images/css_breakdowns/5.png)
![Breakdown Step 6](./images/css_breakdowns/6.png)

### Annotated Resources
#### HTML Breakdown
![Breakdown Step 8](./images/html_breakdowns/8.png)

#### CSS Layout Breakdown
![Breakdown Step 6](./images/css_breakdowns/6.png)
