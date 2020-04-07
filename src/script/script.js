/*  =============== Virtual Keyboard =============== */
/* It is designed for educational purposes only by Kaspriv Maxim */
/* To add new alphabets, pass an object similar to this.defaultSet */
class VirtualKeyboard {
  constructor(alphabets) {
    this.data = alphabets;
    this.rootElement, this.keyBoard, this.textArea, this.header, this.keys, this.letters, this.languageButton;
    this.mouseClicked, this.pressed, this.currentPosition;
    this.codes = ["ControlLeft", "AltLeft"];
    this.capslocked = false;
    this.exceptions = ["Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12",
      "Pause", "Insert", "Home", "PageUp", "PageDown", "End"];
    this.defaultSet =
      [
        [
          { className: "Backquote", ru: { down: "ё", up: "Ё", caps: "Ё", shiftcaps: "ё" }, en: { down: "`", up: "~", caps: "`", shiftcaps: "~" }, symbol: true },
          { className: "Digit1", ru: { down: "1", up: "!", caps: "1", shiftcaps: "!" }, en: { down: "1", up: "!", caps: "1", shiftcaps: "!" }, symbol: true },
          { className: "Digit2", ru: { down: "2", up: "\"", caps: "2", shiftcaps: "@" }, en: { down: "2", up: "@", caps: "2", shiftcaps: "@" }, symbol: true },
          { className: "Digit3", ru: { down: "3", up: "№", caps: "3", shiftcaps: "#" }, en: { down: "3", up: "#", caps: "3", shiftcaps: "#" }, symbol: true },
          { className: "Digit4", ru: { down: "4", up: ";", caps: "4", shiftcaps: "$" }, en: { down: "4", up: "$", caps: "4", shiftcaps: "$" }, symbol: true },
          { className: "Digit5", ru: { down: "5", up: "%", caps: "5", shiftcaps: "%" }, en: { down: "5", up: "%", caps: "5", shiftcaps: "%" }, symbol: true },
          { className: "Digit6", ru: { down: "6", up: ":", caps: "6", shiftcaps: "^" }, en: { down: "6", up: "^", caps: "6", shiftcaps: "^" }, symbol: true },
          { className: "Digit7", ru: { down: "7", up: "?", caps: "7", shiftcaps: "&" }, en: { down: "7", up: "&", caps: "7", shiftcaps: "&" }, symbol: true },
          { className: "Digit8", ru: { down: "8", up: "*", caps: "8", shiftcaps: "*" }, en: { down: "8", up: "*", caps: "8", shiftcaps: "*" }, symbol: true },
          { className: "Digit9", ru: { down: "9", up: "(", caps: "9", shiftcaps: "(" }, en: { down: "9", up: "(", caps: "9", shiftcaps: "(" }, symbol: true },
          { className: "Digit0", ru: { down: "0", up: ")", caps: "0", shiftcaps: ")" }, en: { down: "0", up: ")", caps: "0", shiftcaps: ")" }, symbol: true },
          { className: "Minus", ru: { down: "-", up: "_", caps: "-", shiftcaps: "_" }, en: { down: "-", up: "_", caps: "-", shiftcaps: "_" }, symbol: true },
          { className: "Equal", ru: { down: "=", up: "+", caps: "=", shiftcaps: "+" }, en: { down: "=", up: "+", caps: "=", shiftcaps: "+" }, symbol: true },
          { className: "Backspace", value: "Backspace", symbol: false }
        ],
        [
          { className: "Tab", value: "Tab", symbol: false },
          { className: "KeyQ", ru: { down: "й", up: "Й", caps: "Й", shiftcaps: "й" }, en: { down: "q", up: "Q", caps: "Q", shiftcaps: "q" }, symbol: true },
          { className: "KeyW", ru: { down: "ц", up: "Ц", caps: "Ц", shiftcaps: "ц" }, en: { down: "w", up: "W", caps: "W", shiftcaps: "w" }, symbol: true },
          { className: "KeyE", ru: { down: "у", up: "У", caps: "У", shiftcaps: "у" }, en: { down: "e", up: "E", caps: "E", shiftcaps: "e" }, symbol: true },
          { className: "KeyR", ru: { down: "к", up: "К", caps: "К", shiftcaps: "к" }, en: { down: "r", up: "R", caps: "R", shiftcaps: "r" }, symbol: true },
          { className: "KeyT", ru: { down: "е", up: "Е", caps: "Е", shiftcaps: "е" }, en: { down: "t", up: "T", caps: "T", shiftcaps: "t" }, symbol: true },
          { className: "KeyY", ru: { down: "н", up: "Н", caps: "Н", shiftcaps: "н" }, en: { down: "y", up: "Y", caps: "Y", shiftcaps: "y" }, symbol: true },
          { className: "KeyU", ru: { down: "г", up: "Г", caps: "Г", shiftcaps: "г" }, en: { down: "u", up: "U", caps: "U", shiftcaps: "u" }, symbol: true },
          { className: "KeyI", ru: { down: "ш", up: "Ш", caps: "Ш", shiftcaps: "ш" }, en: { down: "i", up: "I", caps: "I", shiftcaps: "i" }, symbol: true },
          { className: "KeyO", ru: { down: "щ", up: "Щ", caps: "Щ", shiftcaps: "щ" }, en: { down: "o", up: "O", caps: "O", shiftcaps: "o" }, symbol: true },
          { className: "KeyP", ru: { down: "з", up: "З", caps: "З", shiftcaps: "з" }, en: { down: "p", up: "P", caps: "P", shiftcaps: "p" }, symbol: true },
          { className: "BracketLeft", ru: { down: "х", up: "Х", caps: "Х", shiftcaps: "х" }, en: { down: "[", up: "{", caps: "[", shiftcaps: "{" }, symbol: true },
          { className: "BracketRight", ru: { down: "ъ", up: "Ъ", caps: "Ъ", shiftcaps: "ъ" }, en: { down: "]", up: "}", caps: "]", shiftcaps: "}" }, symbol: true },
          { className: "Backslash", ru: { down: "\\", up: "/", caps: "/", shiftcaps: "\\" }, en: { down: "\\", up: "|", caps: "\\", shiftcaps: "|" }, symbol: true },
          { className: "Delete", value: "Del", symbol: false }
        ],
        [
          { className: "CapsLock", value: "CapsLock", symbol: false },
          { className: "KeyA", ru: { down: "ф", up: "Ф", caps: "Ф", shiftcaps: "ф" }, en: { down: "a", up: "A", caps: "A", shiftcaps: "a" }, symbol: true },
          { className: "KeyS", ru: { down: "ы", up: "Ы", caps: "Ы", shiftcaps: "ы" }, en: { down: "s", up: "S", caps: "S", shiftcaps: "s" }, symbol: true },
          { className: "KeyD", ru: { down: "в", up: "В", caps: "В", shiftcaps: "в" }, en: { down: "d", up: "D", caps: "D", shiftcaps: "d" }, symbol: true },
          { className: "KeyF", ru: { down: "а", up: "А", caps: "А", shiftcaps: "а" }, en: { down: "f", up: "F", caps: "F", shiftcaps: "f" }, symbol: true },
          { className: "KeyG", ru: { down: "п", up: "П", caps: "П", shiftcaps: "п" }, en: { down: "g", up: "G", caps: "G", shiftcaps: "g" }, symbol: true },
          { className: "KeyH", ru: { down: "р", up: "Р", caps: "Р", shiftcaps: "р" }, en: { down: "h", up: "H", caps: "H", shiftcaps: "h" }, symbol: true },
          { className: "KeyJ", ru: { down: "о", up: "О", caps: "О", shiftcaps: "о" }, en: { down: "j", up: "J", caps: "J", shiftcaps: "j" }, symbol: true },
          { className: "KeyK", ru: { down: "л", up: "Л", caps: "Л", shiftcaps: "л" }, en: { down: "k", up: "K", caps: "K", shiftcaps: "k" }, symbol: true },
          { className: "KeyL", ru: { down: "д", up: "Д", caps: "Д", shiftcaps: "д" }, en: { down: "l", up: "L", caps: "L", shiftcaps: "l" }, symbol: true },
          { className: "Semicolon", ru: { down: "ж", up: "Ж", caps: "Ж", shiftcaps: "ж" }, en: { down: ";", up: ":", caps: ";", shiftcaps: ":" }, symbol: true },
          { className: "Quote", ru: { down: "э", up: "Э", caps: "Э", shiftcaps: "э" }, en: { down: "\'", up: "\"", caps: "\'", shiftcaps: "\"" }, symbol: true },
          { className: "Enter", value: "Enter", symbol: false }
        ],
        [
          { className: "ShiftLeft", value: "Shift", symbol: false },
          { className: "KeyZ", ru: { down: "я", up: "Я", caps: "Я", shiftcaps: "я" }, en: { down: "z", up: "Z", caps: "Z", shiftcaps: "z" }, symbol: true },
          { className: "KeyX", ru: { down: "ч", up: "Ч", caps: "Ч", shiftcaps: "ч" }, en: { down: "x", up: "X", caps: "X", shiftcaps: "x" }, symbol: true },
          { className: "KeyC", ru: { down: "с", up: "С", caps: "С", shiftcaps: "с" }, en: { down: "c", up: "C", caps: "C", shiftcaps: "c" }, symbol: true },
          { className: "KeyV", ru: { down: "м", up: "М", caps: "М", shiftcaps: "м" }, en: { down: "v", up: "V", caps: "V", shiftcaps: "v" }, symbol: true },
          { className: "KeyB", ru: { down: "и", up: "И", caps: "И", shiftcaps: "и" }, en: { down: "b", up: "B", caps: "B", shiftcaps: "b" }, symbol: true },
          { className: "KeyN", ru: { down: "т", up: "Т", caps: "Т", shiftcaps: "т" }, en: { down: "n", up: "N", caps: "N", shiftcaps: "n" }, symbol: true },
          { className: "KeyM", ru: { down: "ь", up: "Ь", caps: "Ь", shiftcaps: "ь" }, en: { down: "m", up: "M", caps: "M", shiftcaps: "m" }, symbol: true },
          { className: "Comma", ru: { down: "б", up: "Б", caps: "Б", shiftcaps: "б" }, en: { down: ",", up: "<", caps: ",", shiftcaps: "<" }, symbol: true },
          { className: "Period", ru: { down: "ю", up: "Ю", caps: "Ю", shiftcaps: "ю" }, en: { down: ".", up: ">", caps: ".", shiftcaps: ">" }, symbol: true },
          { className: "Slash", ru: { down: ".", up: ",", caps: ".", shiftcaps: "," }, en: { down: "/", up: "?", caps: "/", shiftcaps: "?" }, symbol: true },
          { className: "ArrowUp", value: "▲", symbol: false },
          { className: "ShiftRight", value: "Shift", symbol: false },
        ],
        [
          { className: "ControlLeft", value: "Ctrl", symbol: false },
          { className: "MetaLeft", value: "Win", symbol: false },
          { className: "AltLeft", value: "Alt", symbol: false },
          { className: "Space", value: "", symbol: false },
          { className: "AltRight", value: "Alt", symbol: false },
          { className: "ContextMenu", value: "", symbol: false },
          { className: "ArrowLeft", value: "◄", symbol: false },
          { className: "ArrowDown", value: "▼", symbol: false },
          { className: "ArrowRight", value: "►", symbol: false },
          { className: "ControlRight", value: "Ctrl", symbol: false }
        ]
      ];
  }

  setRootElement() {
    this.rootElement = document.createElement('div');
    this.rootElement.classList.add('virtual-keyboard-wrapper');
    document.body.prepend(this.rootElement);
  }
  ///////////////////////////////////////////////////////////////
  generateHeader() {
    if (!this.rootElement) this.setRootElement();
    this.header = document.createElement('div');
    this.header.classList.add('header-wrapper');
    this.header.innerHTML = `
      <h1 class="header">RS-School task Virtual Keyboard</h1>
      <p class="description">Клавиатура создана в операционной системе Windows</p>
      <p class="description">Переключения языка клавиатурой: левыe ctrl + alt</p>
      <p class="description">Переключение языка мышкой: кнопка с иконкой глобуса</p>`;
    this.rootElement.append(this.header);
  }

  generateTextArea() {
    if (!this.rootElement) this.setRootElement();
    let textArea = document.createElement('div');
    textArea = document.createElement('div');
    textArea.classList.add('textarea-wrapper');
    textArea.innerHTML = `
      <textarea class="textarea" id="textarea" rows="5" cols="50" autofocus></textarea>`;
    this.rootElement.append(textArea);
    this.textArea = document.querySelector('#textarea');
    this.textArea.value = '';
  }

  generateKeyboard() {
    if (!this.rootElement) this.setRootElement();

    const rows = this.data || this.defaultSet;

    this.keyBoard = document.createElement('div');
    this.keyBoard.classList.add('keyboard');
    rows.forEach(elem => {
      this.keyBoard.append(this.generateKeyboardRow(elem));
    });
    this.rootElement.append(this.keyBoard);
    this.keyBoard = document.querySelector('.keyboard');
    this.keys = document.querySelectorAll('.symbol');
    this.languageButton = document.querySelector('.ContextMenu span');

    this.pressed = new Set();

    this.textArea.addEventListener("click", () => {
      this.currentPosition = this.getCaretPosition();
    })

    document.addEventListener("keydown", (event) => {
      event.preventDefault();
      this.handleButtonDown(event.code)
    });
    document.addEventListener("keyup", (event) => {
      this.handleButtonUp(event.code);
    });

    this.keyBoard.addEventListener("mousedown", (event) => {
      this.handleKeyboardMousedown(event);
    });
    this.keyBoard.addEventListener("mouseup", () => {
      this.handleKeyboardMouseup(this.mouseClicked);
    });
  }
  ///////////////////////////////////////////////////////////////
  generateKeyboardRow(array) {
    if (localStorage.keyboardLanguage === null) {
      localStorage.keyboardLanguage = "ru";
    }
    let row = document.createElement('div');
    row.classList.add('keyboard--row');
    array.forEach(elem => {
      row.append(this.generateKeyboardButton(elem));
    });
    return row;
  }

  generateKeyboardButton(obj) {
    let btn = document.createElement('div');
    btn.classList.add("keyboard--btn", obj.className);
    if (obj.symbol) {
      btn.classList.add("symbol");
      let current = localStorage.keyboardLanguage === "ru" ? obj.ru.down : obj.en.down;
      btn.dataset.value = current;
    };

    let output = !obj.symbol ? `<span>${obj.value}</span>` :
      `<span class="ru ${localStorage.keyboardLanguage === "ru" ? "" : "hidden"}">
          <span class="caseDown">${obj.ru.down}</span>
          <span class="caseUp hidden">${obj.ru.up}</span>
          <span class="caps hidden">${obj.ru.caps}</span>
          <span class="shiftCaps hidden">${obj.ru.shiftcaps}</span>
        </span>
        <span class="en ${localStorage.keyboardLanguage === "en" ? "" : "hidden"}">
          <span class="caseDown">${obj.en.down}</span>
          <span class="caseUp hidden">${obj.en.up}</span>
          <span class="caps hidden">${obj.en.caps}</span>
          <span class="shiftCaps hidden">${obj.en.shiftcaps}</span>
        </span>`;
    btn.innerHTML = output;
    return btn;
  }

  create() {
    this.generateHeader();
    this.generateTextArea();
    this.generateKeyboard();
  }

  remove() {
    this.rootElement.remove();
  }

  ///////////////////////////////////////////////////////////////
  switchLanguage() {
    localStorage.keyboardLanguage = localStorage.keyboardLanguage === "ru" ? "en" : "ru";
    for (let key of this.keys) {
      let items = key.children;
      Array.from(items).forEach(el => {
        if (el.classList.contains(localStorage.keyboardLanguage)) {
          el.classList.remove('hidden');
          this.toggleClassesInButton(key, "caseDown");
        } else {
          el.classList.add('hidden');
        }
      });
    }
  }

  textAreaChangeInfo(value) {
    let text = this.textArea.value;
    this.textArea.focus();
    if (value === "&amp;"){
      this.textArea.setRangeText("&", this.textArea.selectionStart, this.textArea.selectionEnd, "end");
    } else if (value === "Backspace") {
      if (this.currentPosition) {
        this.textArea.value = text.slice(0, this.currentPosition - 1) + '' + text.slice(this.currentPosition, text.length);
        this.textArea.setRangeText("", this.currentPosition, this.currentPosition, "end");
      } else {
        this.textArea.value = text.slice(0, -1);
      }
    } else if (value === "Delete"){
      this.textArea.value = text.slice(0, this.currentPosition) + '' + text.slice(this.currentPosition+1, text.length);
      this.textArea.setRangeText("", this.currentPosition, this.currentPosition, "end");
    } else {
      this.textArea.setRangeText(value, this.textArea.selectionStart, this.textArea.selectionEnd, "end");
    }
  }

  handleButtonDown(eventCode) {
    if (this.exceptions.includes(eventCode)) return;
    let clickedButton = document.querySelector(`.${eventCode}`);
    if (eventCode === "CapsLock") {
      clickedButton.classList.toggle('active');
      this.capslocked = !this.capslocked;
      this.toggleCappslock();
      return;
    }
    if (!this.pressed.has(eventCode)) {
      this.pressed.add(eventCode);
      clickedButton.classList.toggle('active');
    }

    if (clickedButton.classList.contains('symbol')) {
      this.textAreaChangeInfo(clickedButton.dataset.value);
    } else {
      if (eventCode === "ShiftRight" || eventCode === "ShiftLeft") {
        this.toggleShift();
        return;
      }
      if (eventCode === "ControlLeft" || eventCode === "AltLeft") {
        for (let code of this.codes) {
          if (!this.pressed.has(code)) {
            return;
          }
          this.switchLanguage();
        }
        return;
      }
      if (eventCode === "Space") {
        this.textAreaChangeInfo(" ");
        return;
      }
      if (eventCode === "ContextMenu") {
        this.switchLanguage();
        return;
      }
      if (eventCode === "Enter") {
        this.textAreaChangeInfo("\n");
        return;
      }
      if (eventCode === "Tab") {
        this.textAreaChangeInfo("\t");
        return;
      }
      if (eventCode === "Backspace") {
        this.textAreaChangeInfo("Backspace");
        return;
      }
      if (eventCode === "Delete") {
        this.textAreaChangeInfo("Delete");
        return;
      }
      if (eventCode === "ArrowLeft") {
        this.textAreaChangeInfo("◄");
        return;
      }
      if (eventCode === "ArrowDown") {
        this.textAreaChangeInfo("▼");
        return;
      }
      if (eventCode === "ArrowRight") {
        this.textAreaChangeInfo("►");
        return;
      }
      if (eventCode === "ArrowUp") {
        this.textAreaChangeInfo("▲");
        return;
      }
    }

  }

  handleButtonUp(eventCode) {
    if (this.exceptions.includes(eventCode)) return;
    if (this.pressed.has(eventCode) && eventCode !== "CapsLock") {
      this.pressed.delete(eventCode);
      document.querySelector(`.${eventCode}`).classList.toggle('active');
    }


    if (eventCode === "ShiftRight" || eventCode === "ShiftLeft") {
      this.toggleCappslock();
    }
  }

  handleKeyboardMousedown(event) {
    this.mouseClicked = this.defineClickElement(event);
    this.handleButtonDown(this.mouseClicked);
  }

  handleKeyboardMouseup(eventCode) {
    this.handleButtonUp(eventCode);
  }

  getCaretPosition() {
    if (this.textArea.selectionStart) {
      this.selectionStart = this.textArea.selectionStart;
      this.selectionEnd = this.textArea.selectionEnd;
      return this.textArea.selectionStart;
    }
    else if (document.selection) {
      let sel = document.selection.createRange();
      let clone = sel.duplicate();
      sel.collapse(true);
      clone.moveToElementText(this.textArea);
      clone.setEndPoint('EndToEnd', sel);
      return clone.text.length;
    }
    return 0;
  }

  defineClickElement(event) {
    let eventElement = event.target.tagName === "SPAN" ? event.target.parentElement : event.target;
    eventElement = eventElement.tagName === "SPAN" ? eventElement.parentElement : eventElement;
    return eventElement.className.split(' ').filter(el => el !== 'keyboard--btn' && el !== 'symbol')[0];
  }

  ///////////////////////////////////////////////////////////////
  toggleClassesInButton(btn, className) {
    let items = btn.children;
    Array.from(items).forEach(elem => {
      if (elem.classList.contains(localStorage.keyboardLanguage)) {
        Array.from(elem.children).forEach(el => {
          if (el.classList.contains(className)) {
            el.classList.remove('hidden');
            btn.dataset.value = el.innerHTML;
          } else {
             el.classList.add('hidden');
          }
        })
      }
    });
  }

  toggleCappslock() {
    console.log(this.capslocked);
    let caseDirection = this.capslocked ? "caps" : "caseDown";
    console.log(caseDirection);
    for (let key of this.keys) {
      this.toggleClassesInButton(key, caseDirection);
    }
  }

  toggleShift() {
    let caseDirection = this.capslocked ? "shiftCaps" : "caseUp";
    for (let key of this.keys) {
      this.toggleClassesInButton(key, caseDirection);
    }
  }
}

window.onload = function() {
  const keyboard = new VirtualKeyboard();
  keyboard.create();
}
