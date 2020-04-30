/*  <button class="keyboard__key symbol letter" data-code="KeyX" data-ru="ч" data-en="x">
  <button class="keyboard__key symbol letter sign"
  data-code="Backquote" data-ru="ё" data-down="`" data-up="~"> */
const keyValues = [
  {
    code: 'Backquote',
    value: {
      ru: {
        down: 'ё', up: 'Ё',
      },
      en: {
        down: '`', up: '~',
      }
    },
    classes: ['symbol', 'backquote', 'letter'],
    lang: ['ru', 'sign'],
  },
  {
    code: 'Digit1',
    value: {
      ru: {
        down: '1', up: '!',
      },
      en: {
        down: '1', up: '!',
      }
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit2',
    value: {
      ru: {
        down: '2', up: '\'',
      },
      en: {
        down: '2', up: '@',
      }
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit3',
    value: {
      ru: {
        down: '3', up: '№',
      },
      en: {
        down: '3', up: '#',
      }
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit4',
    value: {
      ru: {
        down: '4', up: ';',
      },
      en: {
        down: '4', up: '$',
      }
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit5',
    value: {
      ru: {
        down: '5', up: '%',
      },
      en: {
        down: '5', up: '%',
      }
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit6',
    value: {
      ru: {
        down: '6', up: ':',
      },
      en: {
        down: '6', up: '^',
      }
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit7',
    value: {
      ru: {
        down: '7', up: '?',
      },
      en: {
        down: '7', up: '&',
      }
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit8',
    value: {
      ru: {
        down: '8', up: '*',
      },
      en: {
        down: '8', up: '*',
      }
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit9',
    value: {
      ru: {
        down: '9', up: '(',
      },
      en: {
        down: '9', up: '(',
      }
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit0',
    value: {
      ru: {
        down: '0', up: ')',
      },
      en: {
        down: '0', up: ')',
      }
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Minus',
    value: {
      ru: {
        down: '-', up: '_',
      },
      en: {
        down: '-', up: '_',
      }
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Equal',
    value: {
      ru: {
        down: '=', up: '+',
      },
      en: {
        down: '=', up: '+',
      }
    },
    classes: ['symbol', 'digit'],
  },
  { code: 'Backspace', value: 'Backspace', classes: ['special', 'backspace'] },
  { code: 'Tab', value: 'Tab', classes: ['special', 'tab'] },
  {
    code: 'KeyQ',
    value: {
      ru: {
        down: 'й', up: 'Й',
      },
      en: {
        down: 'q', up: 'Q',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyW',
    value: {
      ru: {
        down: 'ц', up: 'Ц',
      },
      en: {
        down: 'w', up: 'W',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyE',
    value: {
      ru: {
        down: 'у', up: 'У',
      },
      en: {
        down: 'e', up: 'E',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyR',
    value: {
      ru: {
        down: 'к', up: 'К',
      },
      en: {
        down: 'r', up: 'R',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyT',
    value: {
      ru: {
        down: 'е', up: 'Е',
      },
      en: {
        down: 't', up: 'T',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyY',
    value: {
      ru: {
        down: 'н', up: 'Н',
      },
      en: {
        down: 'y', up: 'Y',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyU',
    value: {
      ru: {
        down: 'г', up: 'Г',
      },
      en: {
        down: 'u', up: 'U',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyI',
    value: {
      ru: {
        down: 'ш', up: 'Ш',
      },
      en: {
        down: 'i', up: 'I',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyO',
    value: {
      ru: {
        down: 'щ', up: 'Щ',
      },
      en: {
        down: 'o', up: 'O',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyP',
    value: {
      ru: {
        down: 'з', up: 'З',
      },
      en: {
        down: 'p', up: 'P',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'BracketLeft',
    value: {
      ru: {
        down: 'х', up: 'Х',
      },
      en: {
        down: '[', up: '{',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'sign'],
  },
  {
    code: 'BracketRight',
    value: {
      ru: {
        down: 'ъ', up: 'Ъ',
      },
      en: {
        down: ']', up: '}',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'sign'],
  },
  {
    code: 'Backslash',
    value: {
      ru: {
        down: '\\', up: '/',
      },
      en: {
        down: '\\', up: '|',
      }
    },
    classes: ['symbol', 'letter'],
  },
  { code: 'CapsLock', value: 'CapsLock', classes: ['special', 'capsLock'] },
  {
    code: 'KeyA',
    value: {
      ru: {
        down: 'ф', up: 'Ф',
      },
      en: {
        down: 'a', up: 'A',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyS',
    value: {
      ru: {
        down: 'ы', up: 'Ы',
      },
      en: {
        down: 's', up: 'S',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyD',
    value: {
      ru: {
        down: 'в', up: 'В',
      },
      en: {
        down: 'd', up: 'D',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyF',
    value: {
      ru: {
        down: 'а', up: 'А',
      },
      en: {
        down: 'f', up: 'F',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyG',
    value: {
      ru: {
        down: 'п', up: 'П',
      },
      en: {
        down: 'g', up: 'G',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyH',
    value: {
      ru: {
        down: 'р', up: 'Р',
      },
      en: {
        down: 'h', up: 'H',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyJ',
    value: {
      ru: {
        down: 'о', up: 'О',
      },
      en: {
        down: 'j', up: 'J',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyK',
    value: {
      ru: {
        down: 'л', up: 'Л',
      },
      en: {
        down: 'k', up: 'K',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyL',
    value: {
      ru: {
        down: 'д', up: 'Д',
      },
      en: {
        down: 'l', up: 'L',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'Semicolon',
    value: {
      ru: {
        down: 'ж', up: 'Ж',
      },
      en: {
        down: ';', up: ':',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'sign'],
  },
  {
    code: 'Quote',
    value: {
      ru: {
        down: 'э', up: 'Э',
      },
      en: {
        down: '\'', up: '\'',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'sign'],
  },
  { code: 'Enter', value: 'Enter', classes: ['special', 'enter'] },
  { code: 'ShiftLeft', value: 'Shift', classes: ['special', 'shiftLeft'] },
  {
    code: 'KeyZ',
    value: {
      ru: {
        down: 'я', up: 'Я',
      },
      en: {
        down: 'z', up: 'Z',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyX',
    value: {
      ru: {
        down: 'ч', up: 'Ч',
      },
      en: {
        down: 'x', up: 'X',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyC',
    value: {
      ru: {
        down: 'с', up: 'С',
      },
      en: {
        down: 'c', up: 'C',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyV',
    value: {
      ru: {
        down: 'м', up: 'М',
      },
      en: {
        down: 'v', up: 'V',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyB',
    value: {
      ru: {
        down: 'и', up: 'И',
      },
      en: {
        down: 'b', up: 'B',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyN',
    value: {
      ru: {
        down: 'т', up: 'Т',
      },
      en: {
        down: 'n', up: 'N',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyM',
    value: {
      ru: {
        down: 'ь', up: 'Ь',
      },
      en: {
        down: 'm', up: 'M',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'Comma',
    value: {
      ru: {
        down: 'б', up: 'Б',
      },
      en: {
        down: ',', up: '<',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'sign'],
  },
  {
    code: 'Period',
    value: {
      ru: {
        down: 'ю', up: 'Ю',
      },
      en: {
        down: '.', up: '>',
      }
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'sign'],
  },
  {
    code: 'Slash',
    value: {
      ru: {
        down: '.', up: ',',
      },
      en: {
        down: '/', up: '?',
      }
    },
    classes: ['symbol'],
  },
  { code: 'ArrowUp', value: '▲', classes: ['special'] },
  { code: 'ShiftRight', value: 'Shift', classes: ['special', 'shiftRight'] },
  { code: 'ControlLeft', value: 'Ctrl', classes: ['special', 'controlLeft'] },
  { code: 'MetaLeft', value: ' ', classes: ['special', 'metaLeft'] },
  { code: 'AltLeft', value: 'Alt', classes: ['special'] },
  { code: 'Space', value: ' ', classes: ['special', 'space'] },
  { code: 'AltRight', value: 'Alt', classes: ['special'] },
  { code: 'ContextMenu', value: ' ', classes: ['special', 'contextMenu'] },
  { code: 'ArrowLeft', value: '◄', classes: ['special'] },
  { code: 'ArrowDown', value: '▼', classes: ['special'] },
  { code: 'ArrowRight', value: '►', classes: ['special'] },
  { code: 'ControlRight', value: 'Ctrl', classes: ['special', 'controlRight'] },
];

export default keyValues;
