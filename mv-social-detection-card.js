import { LitElement, html, css } from 'lit'
import '@meveo-org/mv-button'
import '@meveo-org/mv-container'

import './mv-card.js'

const SOCIAL_DETECTION_DATA = [{
  network: 'Apple',
  percents: '43'

},
{
  network: 'Windows',
  percents: '41'

},
{
  network: 'other Results',
  percents: '16'

}]



export class MvSocialDetectionCard extends LitElement {
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
      .total-card{padding:20px;}
      .header,.body {text-align:left;padding:20px 20px 0 20px;font-size:24px;}
      .header{color:#000;}
      .body{color: #22788E;}
      .body{padding-bottom:0;text-align:center;}

      .header h1{font-size:18px;color: #328CC0;border-bottom:solid 1px #328CC0;text-transform:uppercase;margin-bottom:0px;background-image:url('./src/img/social-analysis/image-4.png');background-repeat:none;background:center left;}
      .header strong{font-size:14px; color: #328CC0}
      .header i{display:block:color:#328CC0;font-size:10px;color: #328CC0;display:block;}
      .link{text-align:right;display:block;text-transform:uppercase;text-decoration:none;color:#02657E;font-size:8px;    line-height: 30px;
 }
      .logo{float:left;height :70px;background-color:#fff;margin-right:10px;}
      .body .detected b{ color:#000 ;font-size:24px;}
      .body .detected{font-size:10px;font-weight:bold;text-align:left}
      .body .circle{display:inline-block;}
      .body span{    font-size: 8px;
    color: rgb(0, 0, 0);
    float: left;
    display: block;
    width: 100%;
    text-align: left;}
      .body strong {font-size:13px;color:#000;font-weight:bold;display:block;text-align:left}
      .body .box{    display: table;
    width: 100%;
    text-align: center;margin:10px 0}
      .body .inner-box{width:50%;float:left;text-align:center;}


    `
  }

  constructor() {
    super()
    this.theme = 'light'
    this.data = {}
    this.position = {}
  }

  render() {

  
    let options = { ...SOCIAL_DETECTION_DATA }
    let position = 'center'

    console.log(options[1].network)

    return html`
      <mv-card .data="${ options }" .position="${position}">
        <div slot="header" class="header">
          <div>
            <div class="logo">
              <img src="./src/img/social-detection/image 4.png" />
            </div>
            <div>
              <h1>Brands</h1>
              <strong>Results</strong>
              <i>Best brands</i>
            </div>
          </div>
        </div>
        <div slot="body" class="body">
        <div> ${this.getSocialNetworks(options)}

 

        </div>
          <a href="" class="link">
            <img src="./src/img/social-detection/Line 1.png" />
            <img src="./src/img/social-detection/Vector 10.png" />
            <img src="./src/img/social-detection/Vector 11.png" />
            view details
          </a>
        </div>
      </mv-card>
    `
  }

  firstUpdated() {}




  getSocialNetworks(options) {
    let socialNetworks = []
    let bubbles = []
    let detectedPlatforms = Object.keys(options).length 
    for (let i = 0; i < Object.keys(options).length; i++) {
      
      bubbles.push( options[i].percents)
      
      socialNetworks.push( options[i].network)


    }



    return html`

      <div class="detected"><b>${detectedPlatforms}</b> brands</div>


      <div class="box">
        <div class="inner-box"><div class="circle" style="border:solid 5px orange;width:${bubbles[0]}px;height:${bubbles[0]}px;border-radius:50%;"></div></div><div class="inner-box">
      <span>${socialNetworks[0]}</span>
      <strong>${bubbles[0]}%</strong> 
      </div></div>
      <div class="box">
      <div class="inner-box"><div class="circle" style="border:solid 5px red;width:${bubbles[1]}px;height:${bubbles[1]}px;border-radius:50%;"></div></div>
      <div class="inner-box"> <span>${socialNetworks[1]}</span>
      <strong>${bubbles[1]}%</strong></div>
  </div>
  <div class="box">
  <div class="inner-box"><div class="circle" style="border:solid 5px grey;width:${bubbles[2]}px;height:${bubbles[2]}px;border-radius:50%;"></div></div>
  <div class="inner-box"> <span>${socialNetworks[2]}</span>
      <strong>${bubbles[2]}%</strong> </div>
      </div>
    ` 
  }



}

customElements.define('mv-social-detection-card', MvSocialDetectionCard)
