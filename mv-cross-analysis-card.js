import { LitElement, html, css } from 'lit'
import '@meveo-org/mv-button'
import '@meveo-org/mv-container'

import './mv-card.js'

export class MvCrossAnalysisCard extends LitElement {
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
      .header,.body {text-align:left;padding:20px 20px 0 20px;font-size:24px;}
      .header{color:#000;}
      .body{color: #22788E;}
      .body{padding-bottom:0;text-align:center;}

      .header h1{font-size:18px;color: #328CC0;border-bottom:solid 1px #328CC0;text-transform:uppercase;margin-bottom:0px;}
      .header strong{font-size:14px; color: #328CC0}
      .header i{display:block:color:#328CC0;font-size:10px;color: #328CC0;display:block;}
      .link{text-align:right;display:block;text-transform:uppercase;text-decoration:none;color:#02657E;font-size:8px;    line-height: 30px;
}
      .logo{float:left;height :70px;background-color:#fff;margin-right:10px;}

    `
  }

  constructor() {
    super()
    this.theme = 'light'
    this.data = {}
    this.position = {}
  }

  render() {

    let position = 'center'

    return html`
      <mv-card .data="" .position="${position}">
        <div slot="header" class="header">
          <div>
            <div class="logo">
              <img src="./src/img/cross-analysis/image-6.png" />
            </div>
            <div>
              <h1>Download App</h1>
              <strong>Results</strong>
              <i>Common link</i>
            </div>
          </div>
        </div>
        <div slot="body" class="body">
        <a href=""><img src="./src/img/cross-analysis/collect.png" /></a>
          <a href="" class="link">
            <img src="./src/img/cross-analysis/Line 1.png" />
            <img src="./src/img/cross-analysis/Vector 10.png" />
            <img src="./src/img/cross-analysis/Vector 11.png" />
            view details
          </a>
        </div>
      </mv-card>
    `
  }

  firstUpdated() {}
}

customElements.define('mv-cross-analysis-card', MvCrossAnalysisCard)
