import {
  LitElement,
  html,
  css,
} from 'lit'
import '@meveo-org/mv-button'
import '@meveo-org/mv-container'

import '../../mv-card.js'

const PROFILE_DATA = {
  hits: '133',
  time: '24',

}

export class MvTotalCard extends LitElement {
  static get properties() {
    return {
      theme: { type: String, attribute: true },
      data: { type: Object, attribute: false, reflect: true },
      position: { type: Object, attribute: false, reflect: true },
    }
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --mv-select-font-size: 16px;
        --mv-select-input-padding: 6px;
        --mv-select-border: 1px solid #4e686d;
      }
      .total-card{padding:20px;}
      .header,.body {text-align:left;padding:20px 20px 0 20px;font-size:24px;width:300px;}
      .header{color:#000;}
      .body{color: #22788E;}
      .body{padding-bottom:0;}

      .body{    padding-bottom: 20px;}

    `
  }

  constructor() {
    super()
    this.theme = 'light'
    this.data = {}
    this.position = {}
  }

  render() {
    const { theme } = this
    let options = { ...PROFILE_DATA }
    let position = 'center'

    return html`
     


        <mv-card .data="${options}" .position="${position}">
          <div slot="header" class="header">
           Player Wins
          </div>
          <div slot="body" class="body">
          <strong>${options.hits}</strong> in ${options.time} hours
          </div>
        </mv-card>

    `
  }

  firstUpdated() {}

}

customElements.define('mv-total-card', MvTotalCard)
