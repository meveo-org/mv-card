import { LitElement, html, css } from 'lit'
import '@meveo-org/mv-button'
import '@meveo-org/mv-container'

import './mv-card.js'

import './src/spv2/mv-identity-card.js'
import './src/spv2/mv-total-card.js'
import './src/spv2/mv-social-analysis-card.js'
import './src/spv2/mv-cross-analysis-card.js'
import './src/spv2/mv-social-detection-card.js'
import './src/spv2/mv-online-mentions-card.js'
import './src/spv2/mv-social-monitoring-card.js'
import './src/spv2/mv-assets-detection-card.js'
import './src/spv2/mv-overview-card.js'






export class MvCardDemo extends LitElement {
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

      .avatar-container {
        position: relative;
        bottom: 50px;
        margin: auto;
        display: inline-block;
      }

      .white-circle {
        border-radius: 50%;
        text-align: center;
        display: inline-block;
        border: solid 4px rgb(255, 255, 255);
        margin: auto;
      }
      .white-circle img {
        border: solid 2px rgb(3, 140, 252);
      }

      .avatar {
        width: 90px;
        height: 90px;
        border: 3px solid var(--circle-color);
        border-radius: var(--circle-radius, 50%);
      }








    `
  }

  constructor() {
    super()

  }

  render() {


    return html`







<mv-identity-card ></mv-identity-card>
<mv-total-card></mv-total-card>
<mv-social-analysis-card></mv-social-analysis-card>
<mv-cross-analysis-card></mv-cross-analysis-card>
<mv-social-detection-card></mv-social-detection-card>
<mv-online-mentions-card></mv-online-mentions-card>
<mv-social-monitoring-card></mv-social-monitoring-card>
<mv-assets-detection-card></mv-assets-detection-card>
<mv-overview-card></mv-overview-card>
 




    `
  }

  firstUpdated() {}


}

customElements.define('mv-card-demo', MvCardDemo)
