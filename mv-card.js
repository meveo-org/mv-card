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
        width: 70%;
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
      .left{float:left;margin-right: 100%;}
      .right{float:right;margin-left: 100%;}
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
        <div class="avatar-container  ${position.value}">
          <div class="white-circle">
            <img class="avatar" src="${options.picture}" />
          </div>
        </div>
        <div class="card-container">
          <div class="name">
            ${options.name}
            <strong>${
              options.surname
            }</strong><img src="./src/img/icon-gender-${options.gender}.png"/>
          </div>
          <div class="birth">
            <div class="birthday"><img src="./src/img/icon-date.png"/> ${
              options.birthday
            }</div>
            |
            <div class="city">${
              options.city
            } <img src="./src/img/icon-location.png"/></div>
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
        </div>
        <div class="content" id="card">
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
          </div>

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

        


         
      

          <h3 id="form3-btn" class="btn" @click="${() => {
            this.toggle('.form3')
          }}"><span>Private Life</span></h3>
          

          <div class="form3 form"  data-data="hide">
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




          <h3 id="form4-btn" class="btn" @click="${() => {
            this.toggle('.form4')
          }}"><span>Professionnal life</span></h3>
          

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
            </div>`
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

  renderForm() {}

  getSocialNetworks(options) {
    let socialNetworks = ''
    for (let i = 0; i < Object.keys(options.socialnetwork).length; i++) {
      socialNetworks = socialNetworks + ', ' + options.socialnetwork[i]
    }
    return html`
      ${socialNetworks}
    `
  }

  getPhoneNumbers(options) {
    let phoneNumbers = ''

    for (let i = 0; i < Object.keys(options.phone).length; i++) {
      phoneNumbers = phoneNumbers + ', ' + options.phone[i]
    }

    return html`
      ${phoneNumbers}
    `
  }
}

window.customElements.define('mv-card', MvCard)
