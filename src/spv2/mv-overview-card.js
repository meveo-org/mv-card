import { LitElement, html, css } from 'lit'
import '@meveo-org/mv-button'
import '@meveo-org/mv-container'

import '../../mv-card.js'

const PROFILE_DATA = {
  name: 'Alex',
  surname: 'Dupont',
  gender: 'male',
  picture:
    'https://thispersondoesnotexist.com/image?rand_number=0.9769817276185417',
  birthday: '10/09/1972',
  city: 'Paris',
  nationality: 'FR',
  alias: 'toto',
  socialnetwork: { 0: 'instagram', 1: 'pinterest' },
  email: 'a.dupont@yandex.com',
  phone: { 0: '+7 4322 5384 11', 1: '+7 4543 9921 03' },
}

export class MvOverviewCard extends LitElement {
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
        position: relative;
        right: 20px;
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

        color: #4f4f7a;
        font-size: 20px;
        float: left;
        width: 65%;
        line-height: 30px;
        text-indent: 90px;
        text-align: left;
      }
      .birth {
        position: relative;
        font-size: 11px;
        color: #ccc;
        float: left;
        width: 30%;
        line-height: 30px;
      }
      .birth .birthday {
        display: inline;
      }
      .birth .city {
        display: inline;
      }
      .header {
        height: 30px;
      }
      .header,
      .body {
        width: 500px;
      }
      .body {
        height: 160px;
    top: 40px;
    position: relative;
    display: table;
    height: 257px;
      }
      .white-circle {
        position: relative;
        bottom: 30px;
        background-color: #fff;
        z-index: 1;
      }
      .left-column {    background-color: rgb(9, 105, 129);
    height: 65%;
    width: 65px;
    float: left;
    border-radius: 0px 0px 0px 15px;
    overflow: hidden;
    position: absolute;
    top: 50px;
    display: table;
      }
      .left-column a {
        width: 100%;
        height: 33%;
        display: block;
        background-color: #096981;
        box-shadow: rgb(0 0 0) 0px -5px 10px;
        float: right;
      }
      .left-column a:hover {
        background-color: #0698b4;
      }
      .left-column a img {
        width: 15px;
        top: 20px;
        position: relative;
      }
      .content {
        position: relative;
        top: 25px;
        text-align: left;
        padding-left: 100px;
        color: #4f4f7a;
        line-height: 30px;
        font-size: 12px;
      }
      .content span {
        float: right;
        margin-right: 30px;
      }
      .content > div {
        border-bottom: solid 1px#E2E2E2;
        width: 90%;
      }

      .header {
        height: 30px;
        margin-bottom: -60px;
      }
      .slide {
        width: 25%;
        float: left;
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
     

   
        <mv-card  .data="${options}"  .position="${position}">
          <div slot="header" class="header">
              <div class="white-circle">
                <img class="avatar" src="${options.picture}" />
              </div>
          </div>
          <div slot="body" class="body">
            <div>
            <div class="name">
              ${options.name}
              <strong>${options.surname}</strong>
        
            </div>

            <div class="birth">
              <div class="birthday">
              <img src="./src/img/identity/icon-gender-${options.gender}.png" />
                <img src="./src/img/identity/icon-date.png" />
                ${options.birthday}
              </div>
              |
              <div class="city">
                ${options.city}
                <img src="./src/img/identity/icon-location.png" />
              </div>
              </div>
              </div>
              <div class="content">
              <div class="status"><strong>Status</strong><span>In Progress</span></div>
              <div class="creation-date"><strong>Creation Date</strong><span>Dec 16 2021</span></div>
              <mv-slideshow .imgdisplay="${3}">

        <div slot="slides">
          <div class="slide slide1">
social detection
          </div>
          <div class="slide slide2">
assets
          </div>
          <div class="slide slide3">
online mentions
          </div>
          <div class="slide slide4">
social analysis
          </div>
          <div class="slide slide4">
social monitoring
          </div>

        </div>
        <div slot="right-arrow"><img src="./src/img/overview/Vector 7.png"/></div>
        <div slot="left-arrow"><img src="./src/img/overview/Vector 7.png"/></div>
      </mv-slideshow>
              </div>

            <div class="left-column">
              <a href=""><img src="./src/img/overview/image 34.png"/></a>
              <a href=""><img src="./src/img/overview/image 35.png"/></a>
              <a href=""><img src="./src/img/overview/image 36.png"/></a>
            </div>
            </div>

           

        
          </div>

        </mv-card>
 
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
}

customElements.define('mv-overview-card', MvOverviewCard)
