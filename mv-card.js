import {
  LitElement,
  html,
  css,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'

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
        padding-bottom: 30px;
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

  static get properties() {
    return {
      data: { type: Array, attribute: false, reflect: true },
      position: { type: Array, attribute: false, reflect: true },
    }
  }

  constructor() {
    super()

    this.data = []
    this.position = []
  }

  render() {
    let options = { ...this.data }
    let position = { ...this.position }

    return html`
      <div class="card-component">
        <div class="card-container">
          <div class="content" id="card">
            <div class="avatar-container  ${position.value}">
              <div class="white-circle">
                <img class="avatar" src="${options.picture}" />
              </div>
            </div>

            <slot name="mycard"></slot>
          </div>
        </div>
      </div>
    `
  }
}

window.customElements.define('mv-card', MvCard)
