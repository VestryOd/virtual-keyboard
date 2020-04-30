import createDomNode from "../createDomNode";
import { Header } from "./Header";
import { TextArea } from "./TextArea";
import { KeyButton } from "./KeyButton";
// import handleKeyDown from "../handlers/handleKeyDown";
// import handleButtonUp from "../handlers/handleKeyUp";
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
export class VirtualKeyboard {
  constructor(alphabets, exceptions) {
    this.defaultSet = alphabets;
    this.exceptions = exceptions;
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
    this.textArea = new TextArea();
    this.rootElement.append(this.textArea.generateTextArea());
  }

  checkKeyObjectForClasses(obj, keyButton) {
    const classes = obj.classes;
    if (!classes.includes('special')) {
      classes.includes('letter') ? this.letters.push(keyButton) : this.digits.push(keyButton);
    }
  }

  generateKeyboard() {
    const data = this.defaultSet;
    this.keyBoard = createDomNode(this.keyBoard, 'div', 'keyboard');
    data.forEach((elem) => {
      let keyButton = new KeyButton(elem).makeKeyButton();
      this.checkKeyObjectForClasses(elem, keyButton);
      this.keyBoard.append(keyButton);
    });
    this.rootElement.append(this.keyBoard);
  }

  checkForExceptions(code) {
    return this.exceptions.includes(code);
  }

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

  handleSymbolDown(target) {
    const value = target.innerHTML;
    changeValue(value);
  }

  toggleActiveClass(target) {
    target.classList.toggle('active');
  }

  getKeyCode(e) {
    const code = e.code;
    const key = document.querySelector(`.keyboard__key[data-code="${code}"]`);
    return key;
  }

  checkForPressRepeating(key) {
    const code = key.dataset.code;
    if (!this.pressedButtons.has(code)) {
      this.pressedButtons.add(code);
      this.toggleActiveClass(key);
      // this.checkForSwitchLang(eventCode);
    }
  }

  clearPressedKey(key) {
    const code = key.dataset.code;
    if (this.pressedButtons.has(code) && code !== 'CapsLock') {
      this.pressedButtons.delete(code);
      this.toggleActiveClass(key);
    }
  }

  addKeyDownListener() {
    document.addEventListener('keydown', (e) => {
      const key = this.getKeyCode(e);
      if (!this.checkForExceptions(e.code)) {
        e.preventDefault();
        this.checkForPressRepeating(key);
        this.handleKeyDown(key);
      }
    });
  }

  addKeyUpListener() {
    document.addEventListener('keyup', (e) => {
      const key = this.getKeyCode(e);
      if (!this.checkForExceptions(e.code)) {
        this.clearPressedKey(key);
      }
    });
  }

  addListeners() {
    this.addKeyDownListener();
    this.addKeyUpListener();

    this.keyBoard.addEventListener('mousedown', (e) => {
      // handleButtonUp(e);
      console.log('mousedown');
      console.log(this.letters, this.digits, this.exceptions);
      this.toggleActiveClass(e.target);
    });
    this.keyBoard.addEventListener('mouseup', (e) => {
      // handleButtonUp(e);
      console.log('mouseup');
      this.toggleActiveClass(e.target);
    });
  }

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
    this.addListeners();
  }

  handleSymbolDown(target) {
    const value = target.innerHTML;
    this.textArea.changeValue(value);
  }

  handleKeyDown(key) {
    const button = key;
    if (button.classList.contains('keyboard__key')) {
      if (button.classList.contains('special')) {
        this.handleSpecialDown(button);
      } else {
        this.handleSymbolDown(button);
      }
    };
  }

  handleSpecialDown(target) {
    const special = target.dataset.code;
    switch (special) {
      case 'Space':
        this.textArea.changeValue(' ');
        break;
      case 'ContextMenu':
        this.switchLanguage();
        break;
      case 'Enter':
        this.textArea.changeValue('\n');
        break;
      case 'Tab':
        this.textArea.changeValue('\t');
        break;
      case 'Backspace':
        this.textArea.removeValue();
        break;
      case 'Delete':
        this.textArea.changeValue('Delete');
        break;
      case 'ArrowLeft':
        this.textArea.changeValue('◄');
        break;
      case 'ArrowDown':
        this.textArea.changeValue('▼');
        break;
      case 'ArrowRight':
        this.textArea.changeValue('►');
        break;
      case 'ArrowUp':
        this.textArea.changeValue('▲');
        break;
      case 'CapsLock':
        this.toggleCase();
        break;
      case 'ShiftLeft':
        this.toggleCase();
        break;
      default:
        break;
    }
  };
}
