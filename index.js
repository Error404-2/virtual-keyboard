const body = document.querySelector("body");
const textarea = document.createElement("textarea");
const keyboard = document.createElement("div");
textarea.className = "textarea";
textarea.rows = "7";
textarea.cols = "50"
body.prepend(textarea);
keyboard.className = "keyboard";
textarea.after(keyboard);
//textarea.value=textarea.value+e.target.innerHTML;
//e.shiftKey
//event.repeatвыведивконсоль,вначалекликаонпринимаетfalseзначение,призажатииtrue.Чтобынебылозацикливаниярендериприфолс
let keysObj = {
    AltLeft: { en: 'Alt', order: 56 },
    AltRight: { en: 'Alt', order: 58 },
    ArrowDown: { en: 'ArrowDown', order: 61 },
    ArrowLeft: { en: 'ArrowLeft', order: 60 },
    ArrowRight: { en: 'ArrowRight', order: 62 },
    ArrowUp: { en: 'ArrowUp', order: 53 },
    Backquote: { en: '`', order: 0 },
    Backslash: { en: '\\', order: 27 },
    Backspace: { en: 'Backspace', order: 13 },
    BracketLeft: { en: '[', order: 25 },
    BracketRight: { en: ']', order: 26 },
    CapsLock: { en: 'CapsLock', order: 30 },
    Comma: { en: ',', order: 50 },
    ControlLeft: { en: 'Control', order: 55 },
    ControlRight: { en: 'Control', order: 59 },
    Delete: { en: 'Delete', order: 28 },
    Digit0: { en: '0', order: 10 },
    Digit1: { en: '1', order: 1 },
    Digit2: { en: '2', order: 2 },
    Digit3: { en: '3', order: 3 },
    Digit4: { en: '4', order: 4 },
    Digit5: { en: '5', order: 5 },
    Digit6: { en: '6', order: 6 },
    Digit7: { en: '7', order: 7 },
    Digit8: { en: '8', order: 8 },
    Digit9: { en: '9', order: 9 },
    Enter: { en: 'Enter', order: 41 },
    Equal: { en: '=', order: 12 },
    KeyA: { en: 'a', order: 30 },
    KeyB: { en: 'b', order: 47 },
    KeyC: { en: 'c', order: 45 },
    KeyD: { en: 'd', order: 32 },
    KeyE: { en: 'e', order: 17 },
    KeyF: { en: 'f', order: 33 },
    KeyG: { en: 'g', order: 34 },
    KeyH: { en: 'h', order: 35 },
    KeyI: { en: 'i', order: 22 },
    KeyJ: { en: 'j', order: 36 },
    KeyK: { en: 'k', order: 37 },
    KeyL: { en: 'l', order: 38 },
    KeyM: { en: 'm', order: 49 },
    KeyN: { en: 'n', order: 48 },
    KeyO: { en: 'o', order: 23 },
    KeyP: { en: 'p', order: 24 },
    KeyQ: { en: 'q', order: 15 },
    KeyR: { en: 'r', order: 18 },
    KeyS: { en: 's', order: 31 },
    KeyT: { en: 't', order: 19 },
    KeyU: { en: 'u', order: 21 },
    KeyV: { en: 'v', order: 46 },
    KeyW: { en: 'w', order: 16 },
    KeyX: { en: 'x', order: 44 },
    KeyY: { en: 'y', order: 20 },
    KeyZ: { en: 'z', order: 43 },
    Minus: { en: '-', order: 11 },
    Period: { en: '.', order: 51 },
    Quote: { en: "'", order: 40 },
    Semicolon: { en: ';', order: 39 },
    ShiftLeft: { en: 'Shift', order: 42 },
    ShiftRight: { en: 'Shift', order: 54 },
    Slash: { en: '/', order: 52 },
    Space: { en: '', order: 57 },
    Tab: { en: 'Tab', order: 14 },
};

addEventListener("keydown", (event) => {
    keysObj[event.code].ru = event.key;
    console.log(keysObj, event.code, event.key);
});






