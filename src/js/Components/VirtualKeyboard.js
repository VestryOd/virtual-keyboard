import createDomNode from "../createDomNode";
import { Header } from "./Header";
import { TextArea } from "./TextArea";
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
export class VirtualKeyboard {
  constructor(alphabets) {
    this.defaultSet = alphabets;
    this.data = null;
    this.letters = [];
    this.signs = [];
    this.digits = [];
    this.rootElement = null;
    this.keyBoard = null;
    this.textArea = null;
    this.header = null;
    this.languageButton = null;
    this.mouseClicked = null;
    this.pressedButtons = null;
    this.currentPosition = null;
    this.shifted = null;
    this.capslocked = null;
    this.keyboardIsCreated = false;
  }

  setRootElement() {
    const main = createDomNode(main, 'div', 'main', 'motion-colors');
    this.rootElement = createDomNode(this.rootElement, 'div', 'container');
    main.append(this.rootElement);
    document.body.prepend(main);
  }


  makeHeader() {
    this.header = new Header().generateHeader();
    this.rootElement.append(this.header);
  }

  makeTextArea() {
    this.textArea = new TextArea().generateTextArea();
    this.rootElement.append(this.textArea);
  }

  generateKeyboard() {
    const data = this.defaultSet;
    this.keyBoard = createDomNode(this.keyBoard, 'div', 'keyboard');
    data.forEach((elem) => {
      this.keyBoard.append(this.generateKeyboardButton(elem));
    });
    this.rootElement.append(this.keyBoard);
  }

  // eslint-disable-next-line class-methods-use-this
  generateKeyboardButton(obj) {


    let button = null;
    button = createDomNode(button, 'button', 'keyboard__key', ...obj.classes);
    button.setAttribute('type', 'button');
    button.setAttribute('data-code', obj.code);

    button = obj.value ? this.createSpecialButton(button, obj) : this.createSymbolButton(button, obj, 'down');
    // const { ru, en } = obj;
    // if (ru.down) btn.setAttribute('data-ru', ru.down);
    // if (en.down) btn.setAttribute('data-en', en.down);
    // btn = this.setButtonValue(btn, obj);
    // return btn;
    // this.setButtonValue(btn);
    return button;
  }

  createSpecialButton(button, obj) {
    console.log('special', obj);
    button.innerHTML = obj.value;
    return button;
  }

  createSymbolButton(button, obj, letterCase) {
    console.log('symbol', obj);
    const lang = localStorage.getItem('keyboardLanguage');
    const langObject = obj[lang];
    console.log(lang);

    button.innerHTML = langObject[letterCase];
    return button;
  }

  // setButtonValue(btn, obj) {
  //   return obj.classes.includes('special') ? this.specialkey(btn, obj) : this.simpleKey(btn, obj);
  // }

  // simpleKey(btn, obj) {
  //   const lang = localStorage.keyboardLanguage;
  //   const keyValue = obj[lang];
  //   const upOrDown = this.shifted && !this.capslocked;
  //   btn.innerHTML = upOrDown ? keyValue.up : keyValue.down;
  //   return btn;
  // }

  // specialkey(btn, obj) {
  //   btn.innerHTML = obj.value;
  //   return btn;
  // }

  // checkDown(btn) {
  //   if (btn.classList.includes('special')) {
  //     this.handleSymbolDown(btn);
  //   } else {
  //     this.handleSpecialDown(btn);
  //   }
  // }

  // handleSymbolDown(btn) {
  //   const value = btn.innerHTML;
  //   this.textAreaChangeInfo(value);
  // }

  // handleButtonDown(e) {
  //   const button = e.taget;
  //   const keyCode = button.dataset.code;
  //   if (!this.pressedButtons.has(keyCode)) {
  //     this.pressedButtons.add(keyCode);
  //     button.classList.toggle('active');
  //   }
  //   this.checkDown(button);
  // }

  // textAreaChangeInfo(value) {
  //   const text = this.textArea.value;
  //   this.textArea.focus();
  //   if (value === '&amp;') {
  //     this.textArea.setRangeText('&', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
  //   } else if (value === 'Backspace') {
  //     if (this.currentPosition) {
  //       this.textArea.value = text.slice(0, this.currentPosition - 1) + text.slice(this.currentPosition, text.length);
  //       this.textArea.setRangeText('', this.currentPosition, this.currentPosition, 'end');
  //     } else {
  //       this.textArea.value = text.slice(0, -1);
  //     }
  //   } else if (value === 'Delete') {
  //     this.textArea.value = text.slice(0, this.currentPosition) + text.slice(this.currentPosition + 1, text.length);
  //     this.textArea.setRangeText('', this.currentPosition, this.currentPosition, 'end');
  //   } else {
  //     this.textArea.setRangeText(value, this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
  //   }
  // }

  // handleSpecialDown(btn) {
  //   const special = btn.dataset.code;
  //   switch (special) {
  //     case 'Space':
  //       this.textAreaChangeInfo(' ');
  //       break;
  //     case 'ContextMenu':
  //       this.switchLanguage();
  //       break;
  //     case 'Enter':
  //       this.textAreaChangeInfo('\n');
  //       break;
  //     case 'Tab':
  //       this.textAreaChangeInfo('\t');
  //       break;
  //     case 'Backspace':
  //       this.textAreaChangeInfo('Backspace');
  //       break;
  //     case 'Delete':
  //       this.textAreaChangeInfo('Delete');
  //       break;
  //     case 'ArrowLeft':
  //       this.textAreaChangeInfo('◄');
  //       break;
  //     case 'ArrowDown':
  //       this.textAreaChangeInfo('▼');
  //       break;
  //     case 'ArrowRight':
  //       this.textAreaChangeInfo('►');
  //       break;
  //     case 'ArrowUp':
  //       this.textAreaChangeInfo('▲');
  //       break;
  //     case 'CapsLock':
  //       this.toggleCase();
  //       break;
  //     case 'ShiftLeft':
  //       this.toggleCase();
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // handleButtonUp(e) {
  //   const button = e.taget;
  //   const keyCode = button.dataset.code;
  //   this.checkForSwitchLang();
  //   if (this.pressedButtons.has(keyCode) && keyCode !== 'CapsLock') {
  //     this.pressedButtons.delete(keyCode);
  //     button.classList.toggle('active');
  //   }
  // }

  // checkForSwitchLang() {
  //   const conditionToSwitch = this.pressedButtons.has('ShiftLeft') && this.pressedButtons.has('AltLeft');
  //   if (conditionToSwitch) this.switchLanguage();
  // }

  // switchLanguage() {
  //   //
  // }

  // addListeners() {
  //   //
  // }

  createKeyboardInstance(data) {
    if (!localStorage.keyboardLanguage) {
      localStorage.keyboardLanguage = 'ru';
    }
    this.data = data || this.defaultSet;
    this.setRootElement();
    this.makeHeader();
    this.makeTextArea();
    this.generateKeyboard();
    this.pressedButtons = new Set();
    this.keyboardIsCreated = true;
    // this.letters = document.querySelectorAll();
    // this.addListeners();
  }
}
