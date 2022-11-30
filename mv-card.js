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
        padding-bottom: 100px;
        margin: auto;
        margin-top: 100px;
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
        box-shadow: rgb(71 57 154 / 16%) 0px 0px 8px 2px;
        border: none;
        width: 80%;
        margin: 20px auto auto;
        border-radius: 15px;
        font-size: 11px;
        text-align: left;
        padding: 5%;
      }
      .card-component fieldset legend {
        border-bottom: solid 1px #ccc;
        width: 100%;
        position: relative;
        top: 30px;
        display: block;
        line-height: 30px;
        margin-bottom: 40px;
      }
      .card-component fieldset div {
        line-height: 40px;
        display: flex;
      }
      .card-component fieldset div label {
        flex: initial;
      }
      .card-component fieldset div input {
        flex: 1 1 auto;
        height: 25px;
        line-height: 25px;
      }
    `
  }

  static get properties() {
    return {
      data: { type: Array, attribute: false, reflect: true },
    }
  }

  constructor() {
    super()
    this.data = []
  }

  render() {
    let options = this.data
    //console.log(this.data)

    this.options = options.map((item) => item.link)

    return html`
      <div class="card-component">
        <div class="avatar-container">
          <div class="white-circle">
            <img
              class="avatar"
              src="https://thispersondoesnotexist.com/image?rand_number=0.9769817276185417"
            />
          </div>
        </div>
        <div class="card-container">
          <div class="name">
            Alex
            <strong>NAVALMY</strong>
          </div>
          <div class="birth">
            <div class="birthday">16/09/1972</div>
            |
            <div class="city">Moscow</div>
          </div>
          <div class="infos">
            <div class="nationality">
              <strong>Nationality :</strong>
              RU
            </div>
            <div class="aliasses">
              <strong>Aliases :</strong>
              Navaninich
            </div>
          </div>
        </div>
        <div class="content" id="card">
          <fieldset>
            <legend>Locations</legend>
            <div>
              <label>Places :</label>
              <input type="text" />
            </div>

            <div>
              <label>Visited Places :</label>
              <input type="text" />
            </div>

            <div>
              <label>Places :</label>
              <input type="text" />
            </div>

            <div>
              <label>Places :</label>
              <input type="text" />
            </div>

            <div>
              <label>Places :</label>
              <input type="text" />
            </div>

            <div>
              <label>Places :</label>
              <input type="text" />
            </div>
          </fieldset>
        </div>
      </div>
    `
  }

  firstUpdated() {}
}

window.customElements.define('mv-card', MvCard)
