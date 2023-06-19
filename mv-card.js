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
        box-shadow: var(--box-shadow, rgba(71, 57, 154, 0.16) 8px 40px 23px 2px);
        border-radius: 15px;
        margin: auto;
        font-family: var(--font-family, Arial);
        background-color: var(--card-bg-color, #fff);
        height: var(--card-height, auto);
      }
 
      ::-webkit-scrollbar {
          width: var(--scrollbar-width, 9px);
          background: var(--scrollbar-background, #CECECE);
          -webkit-border-radius: var(--scroller-radius, 8px);
      }

      ::-webkit-scrollbar-thumb {
          background: var(--scroller-color, #393812);
          -webkit-border-radius: var(--scroller-radius, 8px);
      }

      .card-body {
        flex: 1 1 auto;
        overflow-y: var(--card-overflow, auto);
        scrollbar-width: thin;
      }

      .left {
        text-align:left;
        width:100%;
      }

      .right {
        text-align:right;
        width:100%;
      }

      .center{
        text-align:center;
        width:100%;
      }
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
