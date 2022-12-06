import { LitElement, html, css } from 'lit'
import '@meveo-org/mv-button'
import '@meveo-org/mv-container'

import '../../mv-card.js'

export class MvSocialMonitoringCard extends LitElement {
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
      .header,.body {text-align:left;padding:20px 20px 0 20px;font-size:24px;background-color:#9997DB}
      .header{color:#000;border-radius:15px 15px 0 0;}
      .body{color: #22788E;border-radius:0px 0px 15px 15px;}
      .body{padding-bottom:0;text-align:center;}

      .header h1{font-size:18px;color: #fff;text-transform:uppercase;margin-bottom:0px;background-image:url('./src/img/social-monitoring/image-4.png');background-repeat:none;background:center left;}
      .header strong{font-size:14px; color: #fff;background-image:url('./src/img/social-monitoring/Line 2.png');display:block;background-repeat:no-repeat;padding-top: 10px;background-position-x: 40px;}
      .header i{display:block;color:#fff;font-size:10px;display:block;}
      .link{text-align:right;display:block;text-transform:uppercase;text-decoration:none;color:#fff;font-size:8px;  font-weight:bold; font-weight:bold;padding-bottom:30px; 
}
.link span {  position: relative;
    top: 2px;}
      .logo{float:left;height :70px;margin-right:10px;}
      .circle {
    background-image: url('./src/img/social-monitoring/Ellipse 10.png');
    width: 109px;
    height: 109px;
    display: inline-block;
}

      .circle {
    background-image: url('./src/img/social-monitoring/Ellipse 10.png');
    width: 109px;
    height: 109px;
    display: inline-block;
}
.circle img {
    position: relative;
    top: 18px;
    width: 65px;
}
.arrow-big{position:relative;top:5px;}
.arrow-small{position:relative;top:4px;}

.body {background-image : url('src/img/social-monitoring/Polygon 10.png');background-repeat:no-repeat;    background-position-y: bottom;}


    `
  }

  constructor() {
    super()
    this.theme = 'light'
    this.data = {}
    this.position = {}
  }

  render() {

    let position = 'center'

    return html`
      <mv-card .data="" .position="${position}" class="card">
        <div slot="header" class="header">
          <div>
            <div class="logo">
              <img src="./src/img/social-monitoring/image 6.png" />
              
            </div>
            <div>
              <h1>Download Torrent</h1>
              
              
              <strong>Results</strong>
              <i>specific link</i>
            </div>
          </div>
        </div>
        <div slot="body" class="body">
        <a href="" class="circle"><img src="./src/img/social-monitoring/collect.png" /></a>
          <a href="" class="link">
            <img src="./src/img/social-monitoring/Line 1.png" />
            <img src="./src/img/social-monitoring/Vector 10.png"  class="arrow-big"/>
            <img src="./src/img/social-monitoring/Vector 11.png" class="arrow-small"/>
            <span>view details</span>
          </a>
        </div>
      </mv-card>
    `
  }

  firstUpdated() {}
}

customElements.define('mv-social-monitoring-card', MvSocialMonitoringCard)
