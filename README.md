# mv-card

MvCard is a Meveo component (based on lit-element) that renders a card.

## Features

- Renders the card a single component tag



## Quick Start

To experiment with the MvCard component.

1. Clone this repo.
2. Serve the project from the root directory with some http server (best served with meveo itself)
3. Update the code in the demo.js file

You can also check this [demo](https://card.meveo.org/)

## Sample usage

```html
<mv-card
  position="${position}"                 // the header position left center right
>
  <div slot="header"></div> 
  <div slot="body"></div>                         
</mv-card>
```


