class VirtualKeyboard {
  constructor(props) {
    this.data = props.data;
    this.selector = props.selector;
    this.rootElement, this.keyBoard, this.textArea, this.header, this.pressed, this.keys;
    this.defaultSet = {};
    this.codes = ["ControlLeft", "AltLeft"];
    this.capslocked = false;
  }

  getRootElement() {
    this.rootElement = document.querySelector(this.selector);
  }
  ///////////////////////////////////////////////////////////////
  generateHeader() {
    if (!this.rootElement) this.getRootElement();
    this.header = document.createElement('div');
    this.header.classList.add('header-wrapper');
    this.header.innerHTML = `
      <h1 class="header">RS-School task Virtual Keyboard</h1>
      <p class="description">Клавиатура создана в операционной системе Windows</p>
      <p class="description">Для переключения языка комбинация: левыe ctrl + alt</p>`;
    this.rootElement.append(this.header);
  }

  generateTextArea() {
    if (!this.rootElement) this.getRootElement();
    let textArea = document.createElement('div');
    textArea = document.createElement('div');
    textArea.classList.add('textarea-wrapper');
    textArea.innerHTML = `
      <textarea class="textarea" id="textarea" rows="5" cols="50"></textarea>`;
    this.rootElement.append(textArea);
    this.textArea = document.querySelector('#textarea');
    this.textArea.value = '';
  }

  generateKeyboard() {
    if (!this.rootElement) this.getRootElement();

    const rows = this.data;

    this.keyBoard = document.createElement('div');
    this.keyBoard.classList.add('keyboard');
    rows.forEach(elem => {
      this.keyBoard.append(this.generateKeyboardRow(elem));
    });
    this.rootElement.append(this.keyBoard);
    this.keys = document.querySelectorAll('.symbol');

    this.pressed = new Set();
    document.addEventListener("keydown", (event) => {
      this.handleButtonDown(event)
    });
    document.addEventListener("keyup", (event) => {
      this.handleButtonUp(event);
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
    btn.classList.add("keyboard--btn", obj.name);
    if (obj.classes) btn.classList.add(obj.classes);

    let output = !obj.value ? `<span>${obj.name}</span>` :
      `<span class="ru">
          <span class="caseDown ${localStorage.keyboardLanguage === "ru" ? "" : "hidden"}">${obj.value.ru.caseDown}</span>
          <span class="caseUp hidden">${obj.value.ru.caseUp}</span>
        </span>
        <span class="en">
          <span class="caseDown ${localStorage.keyboardLanguage === "en" ? "" : "hidden"}">${obj.value.en.caseDown}</span>
          <span class="caseUp hidden">${obj.value.en.caseDown}</span>
        </span>`;
    btn.innerHTML = output;
    return btn;
  }

  create() {
    this.generateHeader();
    this.generateTextArea();
    this.generateKeyboard();
  }

  ///////////////////////////////////////////////////////////////
  switchLanguage() {
    localStorage.keyboardLanguage = localStorage.keyboardLanguage === "ru" ? "en" : "ru";
  }

  handleButtonDown(event) {
    console.log(this.pressed);
    let clickedButton = document.querySelector(`.${event.code}`);
    if (event.code === "CapsLock") {
      clickedButton.classList.toggle('active');
      this.capslocked = !this.capslocked;
      this.toggleCappslock();
      return;
    }
    if (!this.pressed.has(event.code)) {
      this.pressed.add(event.code);
      clickedButton.classList.toggle('active');
    }

    if (clickedButton.classList.contains('symbol')) {
      this.textArea.value += event.key;
    } else {
      if (event.code === "ShiftRight" || event.code === "ShiftLeft") {
        console.log('inside of Shift');
        // for (let key of this.keys) {
        //   this.toggleClassesInButton(key, "caseUp");
        // }
        this.toggleCappslock(true);
      } else {
        if (this.pressed.has("ShiftLeft") && this.pressed.has("AltLeft")) {
          for (let code of this.codes) {
            if (!this.pressed.has(code)) {
              return;
            }
            pressed.clear();
          }
        }
      }
    }

  }

  handleButtonUp(event) {
    console.log(event.code);
    let clickedButton = document.querySelector(`.${event.code}`);
    if (this.pressed.has(event.code) && event.code !== "CapsLock") {
      this.pressed.delete(event.code);
      clickedButton.classList.toggle('active');
    }


    if (event.code === "ShiftRight" || event.code === "ShiftLeft") {
      this.toggleCappslock();
    }
  }

  toggleClassesInButton(btn, className) {
    let items = btn.children;
    Array.from(items).forEach(elem => {
      if (elem.classList.contains(localStorage.keyboardLanguage)) {
        Array.from(elem.children).forEach(el => {
          el.classList.contains(className) ? el.classList.remove('hidden') : el.classList.add('hidden');
        })
      }
    });
  }

  toggleCappslock(flag) {
    console.log(this.capslocked, 'toggleCappslock');
    let caps = flag ? !this.capslocked : this.capslocked;
    let caseDirection = caps ? "caseUp" : "caseDown";
    for (let key of this.keys) {
      this.toggleClassesInButton(key, caseDirection);
    }
  }
}

let lid =
[
  [
    {
      name: "Backquote",
      value: {
        ru: {
          caseDown: "ё",
          caseUp: "Ё"
        },
        en: {
          caseDown: "`",
          caseUp: "~"
        }
      }, classes: "symbol"
    },
    {
      name: "Digit1",
      value: {
        ru: {
          caseDown: "1",
          caseUp: "!"
        },
        en: {
          caseDown: "1",
          caseUp: "!"
        }
      }, classes: "symbol"
    },
    {
      name: "Digit2",
      value: {
        ru: {
          caseDown: "2",
          caseUp: "\""
        },
        en: {
          caseDown: "2",
          caseUp: "@"
        }
      }, classes: "symbol"
    }
  ],
  [
    {
      name: "Tab",
      value: {
        ru: {
          caseDown: "Tab",
          caseUp: "Tab"
        },
        en: {
          caseDown: "Tab",
          caseUp: "Tab"
        }
      }
    }
  ],
  [
    {
      name: "CapsLock"
    }
  ],
  [
    {
      name: "ShiftLeft"
    }
  ]
];

window.onload = function() {
  const keyboard = new VirtualKeyboard({ data: lid, selector: ".main"});
  keyboard.create();
}










const row = [
  {
    Backquote: {
      ru: {
        caseDown: "ё",
        caseUp: "Ё"
      },
      en: {
        caseDown: "`",
        caseUp: "~"
      }
    },
    Digit1: {
      ru: {
        caseDown: "1",
        caseUp: "!"
      },
      en: {
        caseDown: "1",
        caseUp: "!"
      }
    },
    Digit2: {
      ru: {
        caseDown: "2",
        caseUp: "\""
      },
      en: {
        caseDown: "2",
        caseUp: "@"
      }
    },
    Digit3: {
      ru: {
        caseDown: "3",
        caseUp: "№"
      },
      en: {
        caseDown: "3",
        caseUp: "#"
      }
    },
    Digit4: {
      ru: {
        caseDown: "4",
        caseUp: ";"
      },
      en: {
        caseDown: "4",
        caseUp: "$"
      }
    },
    Digit5: {
      ru: {
        caseDown: "5",
        caseUp: "%"
      },
      en: {
        caseDown: "5",
        caseUp: "%"
      }
    },
    Digit6: {
      ru: {
        caseDown: "6",
        caseUp: ":"
      },
      en: {
        caseDown: "6",
        caseUp: "^"
      }
    },
    Digit7: {
      ru: {
        caseDown: "7",
        caseUp: "?"
      },
      en: {
        caseDown: "7",
        caseUp: "&"
      }
    },
    Digit8: {
      ru: {
        caseDown: "8",
        caseUp: "*"
      },
      en: {
        caseDown: "8",
        caseUp: "*"
      }
    }
  }
];
