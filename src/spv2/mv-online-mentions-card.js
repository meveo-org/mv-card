import { LitElement, html, css } from 'lit'
import '@meveo-org/mv-button'
import '@meveo-org/mv-container'

import '../../mv-card.js'

const ONLINE_MENTIONS_DATA = [
  {
    thematic: 'Apple',
    hits: '43',
  },
  {
    thematic: 'Microsoft',
    hits: '41',
  },
  {
    thematic: 'Nokia',
    hits: '16',
  },
  {
    thematic: 'Samsung',
    hits: '12',
  },
  {
    thematic: 'Asus',
    hits: '25',
  },
  {
    thematic: 'Toshiba',
    hits: '34',
  },
]

export class MvOnlineMentionsCard extends LitElement {
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
      .header,.body {text-align:left;padding:20px 20px 0 20px;font-size:24px;width:300px;}
      .header{color:#000;}
      .body{color: #22788E;}
      .body{padding-bottom:0;text-align:center;}

      .header h1{font-size:18px;color: #328CC0;text-transform:uppercase;margin-bottom:0px;background-image:url('./src/img/social-analysis/image-4.png');background-repeat:none;background:center left;}
      .header strong{font-size:14px; color: #328CC0;background-image:url('./src/img/social-detection/Line 2.png');display:block;background-repeat:no-repeat;padding-top: 10px;background-position-x: 40px;}
      .header i{display:block:color:#328CC0;font-size:10px;color: #328CC0;display:block;}
      .link{text-align:right;display:block;text-transform:uppercase;text-decoration:none;color:#02657E;font-size:8px;    line-height: 30px;
 }
      .logo{float:left;height :70px;background-color:#fff;margin-right:10px;}
      .body .detected b{ color:#000 ;font-size:24px;}
      .body .detected{font-size:10px;font-weight:bold;text-align:left;text-indent:30px;}


      .link{text-align:right;display:block;text-transform:uppercase;text-decoration:none;color:#22788E;font-size:8px;  font-weight:bold;  font-weight:bold;padding-bottom:30px;
}

.link span {  position: relative;
    top: 2px;}
      .logo{float:left;height :70px;background-color:#fff;margin-right:10px;}
 
      .arrow-big{position:relative;top:5px;}
.arrow-small{position:relative;top:4px;}

.cloud{text-align:center;}

.cloud a {margin:0; text-decoration:none;color:#05A6FF;margin:5px;}

.body {background-image : url('src/img/online-mentions/Polygon 10.png');background-repeat:no-repeat;    background-position-y: bottom;}


    `
  }

  constructor() {
    super()
    this.theme = 'light'
    this.data = {}
    this.position = {}
  }

  render() {
    let options = { ...ONLINE_MENTIONS_DATA }
    let position = 'center'
    let detectedThematics = Object.keys(options).length


    return html`
      <mv-card .data="${options}" .position="${position}">
        <div slot="header" class="header">
          <div>
            <div class="logo">
              <img src="./src/img/online-mentions/image 5.png" />
            </div>
            <div>
              <h1>Brands</h1>
              <strong>Results</strong>
              <i>Best brands</i>
            </div>
          </div>
        </div>
        <div slot="body" class="body">
          <div class="detected">
            <b>${detectedThematics}</b>
            brands
          </div>
          <div class="cloud"> ${this.getThematics(options)}

 

</div>
          <a href="" class="link">
            <img src="./src/img/social-detection/Line 1.png" />
            <img
              src="./src/img/social-detection/Vector 10.png"
              class="arrow-big"
            />
            <img
              src="./src/img/social-detection/Vector 11.png"
              class="arrow-small"
            />
            <span>view details</span>
          </a>
        </div>
      </mv-card>
    `
  }

  firstUpdated() {}




  getThematics(options) {
    let thematics = []
    let cloudItems = []

    for (let i = 0; i < Object.keys(options).length; i++) {
      
      thematics.push( options[i].thematic)
      
      cloudItems.push( options[i].hits)


    }



    return  cloudItems.map((cloudItem,i) => 
    
    html `<a href="" style="font-size:${cloudItem}px;">${thematics[i]}</a> `
    
    )

    }
  }





customElements.define('mv-online-mentions-card', MvOnlineMentionsCard)
