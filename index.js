const body = document.querySelector('body');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
textarea.className = 'textarea';
textarea.rows = '7';
textarea.cols = '50';
body.prepend(textarea);
keyboard.className = 'keyboard';
textarea.after(keyboard);
const keysObj = {
  AltLeft: {
    en: 'Alt', order: 56, ru: 'Alt', shiftEn: 'Alt', shiftRu: 'Alt',
  },
  AltRight: {
    en: 'Alt', order: 58, ru: 'AltGraph', shiftEn: 'Alt', shiftRu: 'AltGraph',
  },
  ArrowDown: {
    en: '&#5121;', order: 61, ru: '&#5121;', shiftEn: '&#5121;', shiftRu: '&#5121;',
  },
  ArrowLeft: {
    en: '&#5130;', order: 60, ru: '&#5130;', shiftEn: '&#5130;', shiftRu: '&#5130;',
  },
  ArrowRight: {
    en: '&#5125;', order: 62, ru: '&#5125;', shiftEn: '&#5125;', shiftRu: '&#5125;',
  },
  ArrowUp: {
    en: '&#5123;', order: 54, ru: '&#5123;', shiftEn: '&#5123;', shiftRu: '&#5123;',
  },
  Backquote: {
    en: '`', order: 0, ru: 'ё', shiftEn: '~', shiftRu: 'Ё',
  },
  Backslash: {
    en: '\\', order: 27, ru: '\\', shiftEn: '|', shiftRu: '/',
  },
  Backspace: {
    en: 'Backspace', order: 13, ru: 'Backspace', shiftEn: 'Backspace', shiftRu: 'Backspace',
  },
  BracketLeft: {
    en: '[', order: 25, ru: 'х', shiftEn: '{', shiftRu: 'Х',
  },
  BracketRight: {
    en: ']', order: 26, ru: 'ъ', shiftEn: '},,', shiftRu: 'Ъ',
  },
  CapsLock: {
    en: 'CapsLock', order: 30, ru: 'CapsLock', shiftEn: 'CapsLock', shiftRu: 'CapsLock',
  },
  Comma: {
    en: ',', order: 50, ru: 'б', shiftEn: '<', shiftRu: 'Б',
  },
  ControlLeft: {
    en: 'Ctrl', order: 55, ru: 'Ctrl', shiftEn: 'Ctrl', shiftRu: 'Ctrl',
  },
  ControlRight: {
    en: 'Ctrl', order: 59, ru: 'Ctrl', shiftEn: 'Ctrl', shiftRu: 'Ctrl',
  },
  Delete: {
    en: 'Delete', order: 28, ru: 'Delete', shiftEn: 'Delete', shiftRu: 'Delete',
  },
  Digit0: {
    en: '0', order: 10, ru: '0', shiftEn: ')', shiftRu: ')',
  },
  Digit1: {
    en: '1', order: 1, ru: '1', shiftEn: '!', shiftRu: '!',
  },
  Digit2: {
    en: '2', order: 2, ru: '2', shiftEn: '@', shiftRu: '\'',
  },
  Digit3: {
    en: '3', order: 3, ru: '3', shiftEn: '#', shiftRu: '№',
  },
  Digit4: {
    en: '4', order: 4, ru: '4', shiftEn: '$', shiftRu: ';',
  },
  Digit5: {
    en: '5', order: 5, ru: '5', shiftEn: '%', shiftRu: '%',
  },
  Digit6: {
    en: '6', order: 6, ru: '6', shiftEn: '^', shiftRu: ':',
  },
  Digit7: {
    en: '7', order: 7, ru: '7', shiftEn: '&', shiftRu: '?',
  },
  Digit8: {
    en: '8', order: 8, ru: '8', shiftEn: '*', shiftRu: '*',
  },
  Digit9: {
    en: '9', order: 9, ru: '9', shiftEn: '(', shiftRu: '(',
  },
  Enter: {
    en: 'Enter', order: 41, ru: 'Enter', shiftEn: 'Enter', shiftRu: 'Enter',
  },
  Equal: {
    en: '=', order: 12, ru: '=', shiftEn: '+', shiftRu: '+',
  },
  KeyA: {
    en: 'a', order: 30, ru: 'ф', shiftEn: 'A', shiftRu: 'Ф',
  },
  KeyB: {
    en: 'b', order: 47, ru: 'и', shiftEn: 'B', shiftRu: 'И',
  },
  KeyC: {
    en: 'c', order: 45, ru: 'с', shiftEn: 'C', shiftRu: 'С',
  },
  KeyD: {
    en: 'd', order: 32, ru: 'в', shiftEn: 'D', shiftRu: 'В',
  },
  KeyE: {
    en: 'e', order: 17, ru: 'у', shiftEn: 'E', shiftRu: 'У',
  },
  KeyF: {
    en: 'f', order: 33, ru: 'а', shiftEn: 'F', shiftRu: 'А',
  },
  KeyG: {
    en: 'g', order: 34, ru: 'п', shiftEn: 'G', shiftRu: 'П',
  },
  KeyH: {
    en: 'h', order: 35, ru: 'р', shiftEn: 'H', shiftRu: 'Р',
  },
  KeyI: {
    en: 'i', order: 22, ru: 'ш', shiftEn: 'I', shiftRu: 'Ш',
  },
  KeyJ: {
    en: 'j', order: 36, ru: 'о', shiftEn: 'J', shiftRu: 'О',
  },
  KeyK: {
    en: 'k', order: 37, ru: 'л', shiftEn: 'K', shiftRu: 'Л',
  },
  KeyL: {
    en: 'l', order: 38, ru: 'д', shiftEn: 'L', shiftRu: 'Д',
  },
  KeyM: {
    en: 'm', order: 49, ru: 'ь', shiftEn: 'M', shiftRu: 'Ь',
  },
  KeyN: {
    en: 'n', order: 48, ru: 'т', shiftEn: 'N', shiftRu: 'Т',
  },
  KeyO: {
    en: 'o', order: 23, ru: 'щ', shiftEn: 'O', shiftRu: 'Щ',
  },
  KeyP: {
    en: 'p', order: 24, ru: 'з', shiftEn: 'P', shiftRu: 'З',
  },
  KeyQ: {
    en: 'q', order: 15, ru: 'й', shiftEn: 'Q', shiftRu: 'Й',
  },
  KeyR: {
    en: 'r', order: 18, ru: 'к', shiftEn: 'R', shiftRu: 'К',
  },
  KeyS: {
    en: 's', order: 31, ru: 'ы', shiftEn: 'S', shiftRu: 'Ы',
  },
  KeyT: {
    en: 't', order: 19, ru: 'е', shiftEn: 'T', shiftRu: 'Е',
  },
  KeyU: {
    en: 'u', order: 21, ru: 'г', shiftEn: 'U', shiftRu: 'Г',
  },
  KeyV: {
    en: 'v', order: 46, ru: 'м', shiftEn: 'V', shiftRu: 'М',
  },
  KeyW: {
    en: 'w', order: 16, ru: 'ц', shiftEn: 'W', shiftRu: 'Ц',
  },
  KeyX: {
    en: 'x', order: 44, ru: 'ч', shiftEn: 'X', shiftRu: 'Ч',
  },
  KeyY: {
    en: 'y', order: 20, ru: 'н', shiftEn: 'Y', shiftRu: 'Н',
  },
  KeyZ: {
    en: 'z', order: 43, ru: 'я', shiftEn: 'Z', shiftRu: 'Я',
  },
  Minus: {
    en: '-', order: 11, ru: '-', shiftEn: '_', shiftRu: '_',
  },
  Period: {
    en: '.', order: 51, ru: 'ю', shiftEn: '>', shiftRu: 'Ю',
  },
  Quote: {
    en: "'", order: 40, ru: 'э', shiftEn: '"', shiftRu: 'Э',
  },
  Semicolon: {
    en: ';', order: 39, ru: 'ж', shiftEn: ':', shiftRu: 'Ж',
  },
  ShiftLeft: {
    en: 'Shift', order: 42, ru: 'Shift', shiftEn: 'Shift', shiftRu: 'Shift',
  },
  ShiftRight: {
    en: 'Shift', order: 53, ru: 'Shift', shiftEn: 'Shift', shiftRu: 'Shift',
  },
  Slash: {
    en: '/', order: 52, ru: '.', shiftEn: '?', shiftRu: ',',
  },
  Space: {
    en: '', order: 57, ru: ' ', shiftEn: ' ', shiftRu: ' ',
  },
  Tab: {
    en: 'Tab', order: 14, ru: 'Tab', shiftEn: 'Tab', shiftRu: 'Tab',
  },
  MetaLeft: {
    en: 'Win', order: 55, ru: 'Win', shiftEn: 'Win', shiftRu: 'Win',
  },
};

class Key {
  constructor(keyCode, en, order, ru, shiftEn, shiftRu) {
    this.id = keyCode;
    this.en = en;
    this.order = order;
    this.ru = ru;
    this.shiftEn = shiftEn;
    this.shiftRu = shiftRu;
    this.div = document.createElement('div');
    this.div.id = this.id;
    this.div.className = 'button';
    this.div.style.order = this.order;
    this.div.innerHTML = this.en;
    keyboard.append(this.div);
  }

  keydown() {
    const keyPressed = document.getElementById(this.id);
    keyPressed.classList.add("active");
  }

  keyup() {
    const keyUnpressed = document.getElementById(this.id);
    keyUnpressed.classList.remove("active");
  }

}
const classObj = {};
Object.keys(keysObj).forEach((key) => {
  if (Object.hasOwn(keysObj, key)) {
    const {
      en, order, ru, shiftEn, shiftRu,
    } = keysObj[key];
    classObj[key] = new Key(key, en, order, ru, shiftEn, shiftRu);
  }
});

addEventListener("keydown", (event) => {
  classObj[event.code].keydown();
});

addEventListener("keyup", (event) => {
  classObj[event.code].keyup();
});