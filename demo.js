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
        bottom: 30px;
      }
      .birth {
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
        <mv-card position="${position}" style="height:50vh; width: 300px">


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
              <p>
                

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, ligula eget bibendum tincidunt, ligula ante iaculis lorem, sed gravida ante odio non lorem. Aliquam eleifend risus et mauris eleifend, ac tincidunt nibh scelerisque. Cras pulvinar tortor ultricies dignissim varius. Nunc ex risus, ultricies quis luctus eu, euismod eget velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Ut maximus urna at sem sollicitudin mattis. Duis a ligula et nulla viverra scelerisque. Mauris ultrices leo in condimentum sollicitudin. Cras porttitor mi vulputate massa lobortis, a vehicula libero ullamcorper. Sed ornare, augue a consequat venenatis, nunc risus ullamcorper felis, nec sollicitudin metus nisi eu ex. Curabitur quis leo lectus. Nulla luctus ex sed turpis rhoncus, at posuere lorem dictum.

Vivamus sollicitudin dictum enim at commodo. Mauris et maximus arcu. Mauris scelerisque urna a ultricies luctus. Ut ut orci in libero euismod viverra in nec nunc. Integer hendrerit tincidunt odio id pellentesque. Donec consectetur eget lorem ac sodales. Nullam condimentum semper purus, ac volutpat nunc tristique a. Aliquam vel ultricies velit. Phasellus et imperdiet justo. In gravida tristique neque non rutrum. Donec sit amet tortor sit amet quam vestibulum blandit. In elementum tempor dui, sed mollis tellus lobortis varius. Cras mi arcu, scelerisque vel venenatis et, fringilla at nibh. Aliquam blandit facilisis odio et consectetur. Curabitur non posuere lorem, ut sodales velit.

Sed nisi ligula, commodo at dapibus at, tristique at est. Nullam non ante non augue ultricies interdum in eu mauris. Cras congue vestibulum cursus. Sed rutrum pretium nunc at sodales. Nunc ut tortor nec elit congue pretium. Duis viverra arcu sapien, in iaculis dolor sollicitudin at. Nulla facilisi. Quisque hendrerit turpis ut vehicula malesuada. Nulla tellus massa, elementum eget luctus a, placerat non mi. Donec tempus egestas posuere. Mauris auctor pretium orci, sed interdum mi. In eget consectetur magna. Vestibulum non orci venenatis metus cursus ornare nec id urna. Phasellus commodo nec felis non lacinia. Donec eget mollis augue. Sed venenatis nulla dolor, et laoreet nisi aliquam non.

Donec magna justo, dignissim at tempor at, consectetur et arcu. Duis vel leo luctus, mollis felis a, auctor eros. Nunc tempus egestas pellentesque. Curabitur magna elit, aliquam eu mauris in, egestas tristique augue. Nulla rhoncus sem vel erat fermentum porttitor. Sed quis aliquet ante. Phasellus mauris magna, fermentum vel blandit a, sagittis sit amet sem.

Duis vitae mauris maximus, aliquam massa et, volutpat dolor. Nam vulputate fringilla suscipit. Curabitur nisl nisi, laoreet quis risus sed, vulputate elementum est. Donec mollis vel nisi eu porta. Morbi sollicitudin, augue quis pellentesque finibus, enim sapien mollis lorem, sit amet accumsan mauris nulla in justo. Donec maximus commodo scelerisque. In non nunc vel mi finibus egestas. Integer sed nulla luctus, volutpat turpis commodo, dapibus purus. Praesent vitae mauris sit amet neque aliquet dapibus. Ut eu nibh id sapien consectetur sodales. Ut ac nulla eu lorem accumsan consectetur. Duis rutrum auctor nisi eget venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In turpis tortor, feugiat eget fringilla eget, ornare nec est. 
              </p>
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
