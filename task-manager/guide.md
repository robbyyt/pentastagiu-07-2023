# Folder structure - create-react-app

- Node.js generated files:
  - package.json
  - package-lock.json
  - node_modules
- public

  - stores files that will be served statically

- src
  - source code

## index.html and how a "SPA" works

- SPA = Single page application + CSR (client-side rendering)
  - does not mean we have to only have one page!
  - one HTML document, "navigation" is done using javascript

## A small intro to bundlers and node

- the javascript you write will not be "directly" published to production
- the code needs to be bundled, optimized, minified, etc..

## Why React & JSX?

- Writing vanilla HTML, CSS, and JS is ...hard.
  - How do we re-use markup? copy - paste
    - If I change it in one place, I have to do it everywhere
  - Updating the DOM is tedious.
    - Using .setInnerHTMl() is not safe...
    - Defining DOM elements is not fun.

The solution: A javascript library for defining re-usable "components". And efficiently render them. We will see how.

## What is a component?

- A function that returns some JSX.

## How to break down an app into components? The task manager app example:

Possible components:

- TaskList
- Task (completed or in progress)
- Dialog
- Create button
- Navbar
- Footer

## How does React render stuff in the DOM?

Answer: The VDOM. <-- Read up on this for interviews.

## What is the VDOM?

Answer: An object.

## What is the relation between the VDOM and the DOM?

React uses the VDOM to check when it needs to re-render the DOM.

It compares the current state of the VDOM with what's currently rendered, and if required it updates the dom.
