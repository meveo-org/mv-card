import {
  LitElement,
  html,
  css,
} from 'lit'
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

      .card-component fieldset {
        border: none;
        width: 80%;
        margin: 0 auto auto;
        border-radius: 15px;
        font-size: 11px;
        text-align: left;
        padding: 5%;
      }
      .card-component fieldset legend {
        border-bottom: solid 1px #ccc;
        width: 100%;
        position: relative;
        display: block;
        line-height: 30px;
        margin-top: 10px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .card-component fieldset div {
        line-height: 25px;
        display: flex;
      }
      .card-component fieldset div label {
        flex: initial;
        font-weight: bold;
      }
      .card-component fieldset div input {
        flex: 1 1 auto;
        height: 25px;
        line-height: 25px;
      }
      .form {
        width: 88%;
        margin: 0 4% 20px 4%;
        padding: 2%;
        box-shadow: rgb(204 204 204) 0px 0px 10px;
        border-radius: 20px;
      }
      .forminput .input {
        border: none;
        background-color: #d2ebf9;
        border-radius: 10px;
        height: 20px;
        line-height: 20px;
        width: 60%;
        float: right;
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
        padding: 0 4%;
        font-size: 10px;
      }
      .forminput label {
        width: 50%;
      }
      .forminput fieldset {
        margin: 0;
      }
      .card-component {
        padding-bottom: 20px;
      }
      h3 {
        text-align: left;
        font-weight: bold;
        font-size: 12px;
        padding: 0 4%;
        border-bottom: solid 1px #ccc;
        line-height: 30px;

        background-image: url('./src/img/icon-+.png');
        background-position: 90%;
        background-repeat: no-repeat;
      }

      h3 span {
        background-color: #fff;
        padding: 0 20px;
      }

      .show {
        display: block !important;
      }

      .btn {
        cursor: pointer;
      }
      .form {
        display: none;
      }
      .content {
        padding-top: 25px;
      }
      .left {
        float: left;
        margin-right: 100%;
      }
      .right {
        float: right;
        margin-left: 100%;
      }

      fieldset {
        text-align: left;
        border: none;
        padding: 20px;
        font-size: 11px;
      }
      fieldset legend {
        font-weight: bold;
        border-bottom: solid 1px #ccc;
        width: 100%;
        line-height: 30px;
      }
      fieldset > div {
        line-height: 20px;
        margin: 5px 0;
      }
      .infos {
        margin-bottom: 20px;
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
    let position = 'center'

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
        <mv-card .data="${PROFILE_DATA}" .position="${position}">
          <div slot="header" class="header">
            <div class="avatar-container  ${position}">
              <div class="white-circle">
                <img class="avatar" src="${options.picture}" />
              </div>
            </div>
          </div>
          <div slot="body">
            <div class="name">
              ${options.name}
              <strong>${options.surname}</strong>
              <img src="./src/img/icon-gender-${options.gender}.png" />
            </div>

            <div class="birth">
              <div class="birthday">
                <img src="./src/img/icon-date.png" />
                ${options.birthday}
              </div>
              |
              <div class="city">
                ${options.city}
                <img src="./src/img/icon-location.png" />
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

            <fieldset>
              <legend>Online identity</legend>
              <div>
                <label>Social Network :</label>
                ${this.getSocialNetworks(options)}
              </div>
            </fieldset>

            <fieldset>
              <legend>Contact Details</legend>
              <div>
                <label>E-mail :</label>
                ${options.email}
              </div>
              <div>
                <label>Phone :</label>
                ${this.getPhoneNumbers(options)}
              </div>
            </fieldset>

            <div class="forminput" id="form1">
              <fieldset>
                <legend>Locations</legend>
                <div>
                  <label>places :</label>

                  <input type="text" class="input" />
                </div>

                <div>
                  <label>visited places :</label>

                  <input type="text" class="input" />
                </div>
              </fieldset>
            </div>

            <div class="forminput" id="form2">
              <fieldset>
                <legend>Contact Details</legend>
                <div>
                  <label>Email #1 :</label>

                  <input type="text" class="input" />
                </div>

                <div>
                  <label>Phone #1 :</label>

                  <input type="text" class="input" />
                </div>

                <div>
                  <label>PGK Key #1 :</label>

                  <input type="text" class="input" />
                </div>
              </fieldset>
            </div>

            <h3
              id="form3-btn"
              class="btn"
              @click="${() => {
                this.toggle('.form3')
              }}"
            >
              <span>Private Life</span>
            </h3>

            <div class="form3 form" data-data="hide">
              <fieldset>
                <div>
                  <label>Acquaintances :</label>
                </div>

                <div>
                  <label>Relatives :</label>
                </div>

                <div>
                  <label>Hobbies :</label>
                </div>
              </fieldset>
            </div>

            <h3
              id="form4-btn"
              class="btn"
              @click="${() => {
                this.toggle('.form4')
              }}"
            >
              <span>Professionnal life</span>
            </h3>

            <div class="form4 form" data-data="hide">
              <fieldset>
                <div>
                  <label>Acquaintances :</label>
                </div>

                <div>
                  <label>Relatives :</label>
                </div>

                <div>
                  <label>Hobbies :</label>
                </div>
              </fieldset>
            </div>
          </div>
        </mv-card>
      </mv-container>
    `
  }

  firstUpdated() {}

  toggle(selector) {
    selector = this.shadowRoot.querySelector(selector)
    if (selector.dataset.data == 'hide') {
      selector.classList.add('show')
      selector.dataset.data = 'show'
    } else {
      selector.classList.remove('show')
      selector.dataset.data = 'hide'
    }
  }

  getSocialNetworks(options) {
    let socialNetworks = ''
    for (let i = 0; i < Object.keys(options.socialnetwork).length; i++) {
      socialNetworks = socialNetworks + ' ' + options.socialnetwork[i]
    }
    return html`
      ${socialNetworks}
    `
  }

  getPhoneNumbers(options) {
    let phoneNumbers = ''

    for (let i = 0; i < Object.keys(options.phone).length; i++) {
      phoneNumbers = phoneNumbers + ' ' + options.phone[i]
    }

    return html`
      ${phoneNumbers}
    `
  }

  changeTheme = (originalEvent) => {
    const {
      target: { value },
    } = originalEvent
    this.theme = value
  }
}

customElements.define('mv-card-demo', MvCardDemo)
