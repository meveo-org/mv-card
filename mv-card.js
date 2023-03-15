import {
  LitElement,
  html,
  css,
} from 'lit'

export class MvCard extends LitElement {
  static get styles() {
    return css`

      :host {
        display: flex;
        flex-direction: column;
        text-align: center;
        box-shadow: 0px 0px 40px 2px rgb(71 57 154 / 50%);
        border-radius: 15px;
        margin: auto;
        font-family: var(--font-family, Arial);
        background-color: var(--card-bg-color, #fff);
        height: 100%;
      }

      .card-body {
        flex: 1 1 auto;
        overflow-y: auto;
      }

      .left{text-align:left;width:100%;}
      .right{text-align:right;width:100%;}
      .center{text-align:center;width:100%;}
    `
  }

  static get properties() {
    return {
      position: { type: String, attribute: "position" },
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
        <div class="header ${this.position}">
          <slot name="header"></slot>
        </div>
        <div class="card-body">
          <slot name="body"></slot>
        </div>
    `
  }
}

window.customElements.define('mv-card', MvCard)
