import { LitElement, html, css } from 'lit'
//https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js

export class MvSlideShow extends LitElement {
  static get styles() {
    return css`
      .card-component {
        height: auto;
        text-align: center;
        background-color: #fff;
        box-shadow: 0px 0px 40px 2px rgb(71 57 154 / 50%);
        border-radius: 15px;
        margin-top: 75px;
        font-family: Arial;
        margin: auto;
        margin-top: 100px;
        display: table;
      }

      .left {
        text-align: left;
        width: 100%;
      }
      .right {
        text-align: right;
        width: 100%;
      }
      .center {
        text-align: center;
        width: 100%;
      }

      .left-arrow {
        background-color: rgba(255, 255, 255, 0.8);
        left: 0;
        width: 100px;
        z-index: 9;
        top: 0;
        bottom: 0;
        float: left;
        text-align: center;
        font-size: 30px;
        cursor: pointer;
      }
      .right-arrow {
        background-color: rgba(255, 255, 255, 0.8);
        right: 0;
        width: 100px;
        z-index: 9;
        top: 0;
        bottom: 0;
        float: right;
        text-align: center;
        font-size: 30px;
        cursor: pointer;
      }

      ::slotted(div) {
        float: left;
        padding: 0 20px;
        display: block;
        width: 100%;
      }
      .left-arrow {
        transform: rotate(180deg);
      }
    `
  }

  static get properties() {
    return {
      data: { type: Array, attribute: false, reflect: true },
      position: { type: Array, attribute: false, reflect: true },
      imgdisplay: { type: Number, attribute: false, reflect: true },
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
    <div class="slideshow">

    <slot name = "slides">
</slot>

<div>${this.slotDisplayed}</div>

 <div class="nav"><div class="left-arrow" @click="${() => {
   this.goToLeft()
 }}"><slot name = "left-arrow"></slot></div><div class="right-arrow" @click="${() => {
      this.goToRight()
    }}"><slot name = "right-arrow"></slot></div>


  </div>

    </div></div>
      
    `
  }

  firstUpdated() {
    this.slotDisplayed = 0

    let slots = this.querySelectorAll('.slide')
    for (let slot = 0; slot < slots.length; slot++) {
      slots[slot].style.display = 'none'
    }
    this.displaySlideshow(this.imgdisplay)

  }

  displaySlideshow(nbImgDisplayed){

    console.log()
    for (let i = this.slotDisplayed; i < nbImgDisplayed; i++) {
      this.displaySlot(i)
    }
    this.slotDisplayed =this.imgdisplay



  }

  displaySlot(slot) {
    let slots = this.querySelectorAll('.slide')

    slots[slot].style.display = 'block'



  }

  hideSlot(slot){   let slots = this.querySelectorAll('.slide')

  slots[slot].style.display = 'none'}

  goToLeft() {
    let slots = this.querySelectorAll('.slide')

    this.slotDisplayed--

    if (this.slotDisplayed > 0) {
      this.displaySlot(this.slotDisplayed)
      this.hideSlot(this.slotDisplayed+this.imgdisplay)

    } else {
      this.hideSlot(this.slotDisplayed+this.imgdisplay)
      this.slotDisplayed = slots.length-1

      this.displaySlot(this.slotDisplayed)

    }
  }

  goToRight() {
    let slots = this.querySelectorAll('.slide')

   

    this.slotDisplayed++

    console.log (this.slotDisplayed)

    
    if (this.slotDisplayed < slots.length) {
      this.displaySlot(this.slotDisplayed)
      this.hideSlot(this.slotDisplayed-this.imgdisplay)

    } else {
      if (this.slotDisplayed-this.imgdisplay>0){
      this.hideSlot(this.slotDisplayed-this.imgdisplay)
    }
      this.slotDisplayed = 0
      this.displaySlot(this.slotDisplayed)

    }
  }
}

window.customElements.define('mv-slideshow', MvSlideShow)
