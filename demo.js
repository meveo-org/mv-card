import { LitElement, html, css } from 'lit'
import '@meveo-org/mv-button'
import '@meveo-org/mv-container'

import './mv-card.js'






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
        position:relative;bottom:30px;
      }

      .avatar {
        width: 90px;
        height: 90px;
        border: 3px solid var(--circle-color);
        border-radius: var(--circle-radius, 50%);
      }



      .name {
        position: relative;
        bottom: 30px;
      }
      .birth {
        position: relative;
        font-size: 10px;
        color: #ccc;
        bottom: 20px;
      }
      .birth .birthday {
        display: inline;
      }
      .birth .city {
        display: inline;
      }

      .infos {
        font-size: 11px;
        padding-bottom:30px;
      }
      .infos .nationality {
        float: left;
        width: 50%;
        text-align: center;
      }
      .infos .aliases {
        width: 50%;
        text-align: center;
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


          <div slot="body" class="body">
            <div class="name">
              ${options.name}
              <strong>${options.surname}</strong>
            </div>

            <div class="birth">
              <div class="birthday">

                ${options.birthday}
              </div>
              |
              <div class="city">
                ${options.city}

              </div>
            </div>
            <div class="infos">
              <div class="nationality">
                <strong>Nationality :</strong>
                ${options.nationality}
              </div>
              <div class="aliasses">
                <strong>Aliases :</strong>
                ${options.alias}
              </div>
            </div>



        </mv-card>



 



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
