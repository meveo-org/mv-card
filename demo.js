import {
  LitElement,
  html,
  css,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'
import '@meveo-org/mv-button'
import '@meveo-org/mv-container'

import './mv-card.js'

const PROFILE_DATA = {
  name: 'Alex',
  surname: 'NAVALMY',
  picture : 'https://thispersondoesnotexist.com/image?rand_number=0.9769817276185417',
  birthday: '10/09/1972',
  city: 'Moscow',
  nationality: 'RU',
  alias: 'navaninich',
  socialnetwork : {0:'instagram',1:'pinterest'},
  email:'a.navalny@yandex.com',
  phone:{0:'+7 4322 5384 11',1:'+7 4543 9921 03'}
}

export class MvCardDemo extends LitElement {
  static get properties() {
    return {
      theme: { type: String, attribute: true },
      data: { type: Object, attribute: false, reflect: true },
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
    `
  }

  constructor() {
    super()
    this.theme = 'light'
    this.data = {}
    
  }

  render() {
    const { theme } = this
    return html`
      <fieldset>
        <legend>Theme</legend>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked
            @change="${this.changeTheme}"
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            @change="${this.changeTheme}"
          />
          Dark
        </label>
      </fieldset>

      <mv-container .theme="${theme}">
        <mv-card .data="${PROFILE_DATA}"></mv-card>
      </mv-container>


    `
  }
  firstUpdated() {}




  changeTheme = (originalEvent) => {
    const {
      target: { value },
    } = originalEvent
    this.theme = value
  }
}

customElements.define('mv-card-demo', MvCardDemo)
