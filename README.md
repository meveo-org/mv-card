# mv-card

MvCard is a Meveo component (based on lit-element) that renders a select input.

## Features

- Renders the select a single component tag
- Can render both string and html template as the option label



## Quick Start

To experiment with the MvSelect component.

1. Clone this repo.
2. Serve the project from the root directory with some http server (best served with meveo itself)
3. Update the code in the demo.js file

You can also check this [demo](https://select.meveo.org/)

## Sample usage

```html
<mv-select
  .data="${this.data}"                            // the current selected value
  .position="${{value:'center'}}"                 // the picture position left center right
></mv-select>
```

The options has the following properties:

```javascript
{
  label, // string or html template to render as the label
  value // object value of the option
}
```
