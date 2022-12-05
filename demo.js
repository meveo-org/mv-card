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




const PROFILE_DATA = {
  name: 'Alex',
  surname: 'NAVALMY',
  gender: 'male',
  picture:
    'https://thispersondoesnotexist.com/image?rand_number=0.9769817276185417',
  birthday: '10/09/1972',
  city: 'Moscow',
  nationality: 'RU',
  alias: 'navaninich',
  socialnetwork: { 0: 'instagram', 1: 'pinterest' },
  email: 'a.navalny@yandex.com',
  phone: { 0: '+7 4322 5384 11', 1: '+7 4543 9921 03' },
}

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
    this.theme = 'light'
    this.data = {}
    this.position = {}
  }

  render() {
    const { theme } = this

    let options = { ...PROFILE_DATA }
    let position = 'left'

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
        <mv-card .data="${options}" .position="${position}">


          <div slot="header" class="header">
              <div class="white-circle">
                <img class="avatar" src="${options.picture}" />
              </div>
          </div>
        </mv-card>



<mv-identity-card ></mv-identity-card>
<mv-total-card></mv-total-card>
<mv-social-analysis-card></mv-social-analysis-card>
<mv-cross-analysis-card></mv-cross-analysis-card>
<mv-social-detection-card></mv-social-detection-card>
<mv-online-mentions-card></mv-online-mentions-card>
<mv-social-monitoring-card></mv-social-monitoring-card>
 



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
