import {
  LitElement,
  html,
  css,
} from 'lit'
//https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js

export class MvCard extends LitElement {
  static get styles() {
    return css`
      .card-component {
        width: 300px;
        height: auto;
        text-align: center;
        background-color: #fff;
        box-shadow: 0px 0px 40px 2px rgb(71 57 154 / 50%);
        border-radius: 15px;
        margin-top: 75px;
        font-family: Arial;
        margin: auto;
        margin-top: 100px;

      }

      .left{text-align:left;width:100%;}
      .right{text-align:right;width:100%;}
      .center{text-align:center;width:100%;}
    `
  }

  static get properties() {
    return {
      data: { type: Array, attribute: false, reflect: true },
      position: { type: Array, attribute: false, reflect: true },
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="card-component">
        <div class="card-container">
          <div class="content" id="card">
            <div class="header ${this.position}">
              <slot name="header"></slot>
            </div>
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    `
  }
}

window.customElements.define('mv-card', MvCard)
