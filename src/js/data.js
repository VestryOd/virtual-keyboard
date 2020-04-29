/*  <button class="keyboard__key symbol letter" data-code="KeyX" data-ru="ч" data-en="x">
  <button class="keyboard__key symbol letter sign"
  data-code="Backquote" data-ru="ё" data-down="`" data-up="~"> */
const keyValues = [
  {
    code: 'Backquote',
    ru: {
      down: 'ё', up: 'Ё',
    },
    en: {
      down: '`', up: '~',
    },
    classes: ['symbol', 'backquote', 'letter'],
    lang: ['ru', 'sign'],
  },
  {
    code: 'Digit1',
    ru: {
      down: '1', up: '!',
    },
    en: {
      down: '1', up: '!',
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit2',
    ru: {
      down: '2', up: '\'',
    },
    en: {
      down: '2', up: '@',
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit3',
    ru: {
      down: '3', up: '№',
    },
    en: {
      down: '3', up: '#',
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit4',
    ru: {
      down: '4', up: ';',
    },
    en: {
      down: '4', up: '$',
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit5',
    ru: {
      down: '5', up: '%',
    },
    en: {
      down: '5', up: '%',
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit6',
    ru: {
      down: '6', up: ':',
    },
    en: {
      down: '6', up: '^',
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit7',
    ru: {
      down: '7', up: '?',
    },
    en: {
      down: '7', up: '&',
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit8',
    ru: {
      down: '8', up: '*',
    },
    en: {
      down: '8', up: '*',
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit9',
    ru: {
      down: '9', up: '(',
    },
    en: {
      down: '9', up: '(',
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Digit0',
    ru: {
      down: '0', up: ')',
    },
    en: {
      down: '0', up: ')',
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Minus',
    ru: {
      down: '-', up: '_',
    },
    en: {
      down: '-', up: '_',
    },
    classes: ['symbol', 'digit'],
  },
  {
    code: 'Equal',
    ru: {
      down: '=', up: '+',
    },
    en: {
      down: '=', up: '+',
    },
    classes: ['symbol', 'digit'],
  },
  { code: 'Backspace', value: 'Backspace', classes: ['special', 'backspace'] },
  { code: 'Tab', value: 'Tab', classes: ['special', 'tab'] },
  {
    code: 'KeyQ',
    ru: {
      down: 'й', up: 'Й',
    },
    en: {
      down: 'q', up: 'Q',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyW',
    ru: {
      down: 'ц', up: 'Ц',
    },
    en: {
      down: 'w', up: 'W',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyE',
    ru: {
      down: 'у', up: 'У',
    },
    en: {
      down: 'e', up: 'E',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyR',
    ru: {
      down: 'к', up: 'К',
    },
    en: {
      down: 'r', up: 'R',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyT',
    ru: {
      down: 'е', up: 'Е',
    },
    en: {
      down: 't', up: 'T',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyY',
    ru: {
      down: 'н', up: 'Н',
    },
    en: {
      down: 'y', up: 'Y',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyU',
    ru: {
      down: 'г', up: 'Г',
    },
    en: {
      down: 'u', up: 'U',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyI',
    ru: {
      down: 'ш', up: 'Ш',
    },
    en: {
      down: 'i', up: 'I',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyO',
    ru: {
      down: 'щ', up: 'Щ',
    },
    en: {
      down: 'o', up: 'O',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyP',
    ru: {
      down: 'з', up: 'З',
    },
    en: {
      down: 'p', up: 'P',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'BracketLeft',
    ru: {
      down: 'х', up: 'Х',
    },
    en: {
      down: '[', up: '{',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'sign'],
  },
  {
    code: 'BracketRight',
    ru: {
      down: 'ъ', up: 'Ъ',
    },
    en: {
      down: ']', up: '}',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'sign'],
  },
  {
    code: 'Backslash',
    ru: {
      down: '\\', up: '/',
    },
    en: {
      down: '\\', up: '|',
    },
    classes: ['symbol', 'letter'],
  },
  { code: 'CapsLock', value: 'CapsLock', classes: ['special', 'capsLock'] },
  {
    code: 'KeyA',
    ru: {
      down: 'ф', up: 'Ф',
    },
    en: {
      down: 'a', up: 'A',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyS',
    ru: {
      down: 'ы', up: 'Ы',
    },
    en: {
      down: 's', up: 'S',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyD',
    ru: {
      down: 'в', up: 'В',
    },
    en: {
      down: 'd', up: 'D',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyF',
    ru: {
      down: 'а', up: 'А',
    },
    en: {
      down: 'f', up: 'F',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyG',
    ru: {
      down: 'п', up: 'П',
    },
    en: {
      down: 'g', up: 'G',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyH',
    ru: {
      down: 'р', up: 'Р',
    },
    en: {
      down: 'h', up: 'H',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyJ',
    ru: {
      down: 'о', up: 'О',
    },
    en: {
      down: 'j', up: 'J',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyK',
    ru: {
      down: 'л', up: 'Л',
    },
    en: {
      down: 'k', up: 'K',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyL',
    ru: {
      down: 'д', up: 'Д',
    },
    en: {
      down: 'l', up: 'L',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'Semicolon',
    ru: {
      down: 'ж', up: 'Ж',
    },
    en: {
      down: ';', up: ':',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'sign'],
  },
  {
    code: 'Quote',
    ru: {
      down: 'э', up: 'Э',
    },
    en: {
      down: '\'', up: '\'',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'sign'],
  },
  { code: 'Enter', value: 'Enter', classes: ['special', 'enter'] },
  { code: 'ShiftLeft', value: 'Shift', classes: ['special', 'shiftLeft'] },
  {
    code: 'KeyZ',
    ru: {
      down: 'я', up: 'Я',
    },
    en: {
      down: 'z', up: 'Z',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyX',
    ru: {
      down: 'ч', up: 'Ч',
    },
    en: {
      down: 'x', up: 'X',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyC',
    ru: {
      down: 'с', up: 'С',
    },
    en: {
      down: 'c', up: 'C',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyV',
    ru: {
      down: 'м', up: 'М',
    },
    en: {
      down: 'v', up: 'V',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyB',
    ru: {
      down: 'и', up: 'И',
    },
    en: {
      down: 'b', up: 'B',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyN',
    ru: {
      down: 'т', up: 'Т',
    },
    en: {
      down: 'n', up: 'N',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'KeyM',
    ru: {
      down: 'ь', up: 'Ь',
    },
    en: {
      down: 'm', up: 'M',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'en'],
  },
  {
    code: 'Comma',
    ru: {
      down: 'б', up: 'Б',
    },
    en: {
      down: ',', up: '<',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'sign'],
  },
  {
    code: 'Period',
    ru: {
      down: 'ю', up: 'Ю',
    },
    en: {
      down: '.', up: '>',
    },
    classes: ['symbol', 'letter'],
    lang: ['ru', 'sign'],
  },
  {
    code: 'Slash',
    ru: {
      down: '.', up: ',',
    },
    en: {
      down: '/', up: '?',
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
