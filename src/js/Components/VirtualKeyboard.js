import createDomNode from "../createDomNode";
import { Header } from "./Header";
import { TextArea } from "./TextArea";
import { KeyButton } from "./KeyButton";
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
export class VirtualKeyboard {
  constructor(alphabets, exceptions) {
    this.defaultSet = alphabets;
    this.exceptions = exceptions;
    this.data = null;
    this.letters = [];
    this.digits = [];
    this.rootElement = null;
    this.keyBoard = null;
    this.textArea = null;
    this.header = null;
    this.pressedButtons = null;
    this.capslocked = false;
    this.keyboardIsCreated = false;
  }

  setRootElement() {
    const main = createDomNode(main, 'div', 'main');
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
      let keyButton = new KeyButton(elem);
      this.checkKeyObjectForClasses(elem, keyButton);
      this.keyBoard.append(keyButton.makeKeyButton());
    });
    this.rootElement.append(this.keyBoard);
  }

  checkForExceptions(code) {
    return this.exceptions.includes(code);
  }

  checkForSwitchLang() {
    const conditionToSwitch = this.pressedButtons.has('ControlLeft') && this.pressedButtons.has('AltLeft');
    if (conditionToSwitch) this.switchLanguage();
  }

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
      this.checkForSwitchLang();
    }
  }

  clearPressedKey(key) {
    const code = key.dataset.code;
    if (this.pressedButtons.has(code)) {
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
        this.checkShiftUp(e.code);
        this.clearPressedKey(key);
      }
    });
  }

  addMouseDownListener() {
    this.keyBoard.addEventListener('mousedown', (e) => {
      this.handleKeyDown(e.target);
      this.toggleActiveClass(e.target);
    });
  }

  addMouseUpListener() {
    this.keyBoard.addEventListener('mouseup', (e) => {
      const code = e.target.dataset.code;
      this.checkShiftUp(code);
      this.toggleActiveClass(e.target);
    });
  }

  checkShiftUp(code) {
    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      this.shiftPressed(false);
    }
  }

  addListeners() {
    this.addKeyDownListener();
    this.addKeyUpListener();
    this.addMouseDownListener();
    this.addMouseUpListener();
  }

  switchLanguage() {
    localStorage.keyboardLanguage = localStorage.keyboardLanguage === 'ru' ? 'en' : 'ru';
    this.digits.forEach(el => el.switchLanguage());
    this.letters.forEach(el => el.switchLanguage());
  }

  shiftPressed(letterCase) {
    this.letters.forEach(el => el.keyShifted(letterCase));
    this.digits.forEach(el => el.keyShifted(letterCase));
  }

  capslockPressed(letterCase) {
    this.letters.forEach(el => el.keyCapslocked(letterCase));
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
        this.capslocked = !this.capslocked;
        this.capslockPressed(this.capslocked);
        break;
      case 'ShiftLeft':
        this.shiftPressed(true)
        break;
      case 'ShiftRight':
        this.shiftPressed(true)
        break;
      default:
        break;
    }
  };
}
