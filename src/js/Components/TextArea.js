import createDomNode from "../createDomNode";

export class TextArea {
  constructor() {
    this.value = '';
    this.textArea = null;
  }
  generateTextArea() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('textarea-wrapper');
    const textArea = createDomNode(textArea, 'textarea', 'textarea');
    textArea.setAttribute('id', 'textarea');
    textArea.setAttribute('autofocus', true);
    this.textArea = textArea;
    wrapper.append(textArea);
    return wrapper;
  }

  changeValue(value) {
    let current = this.textArea.value;
    if (value === '&amp;') {
      current += '&';
    } else {
      current += value;
    }
    this.textArea.value = current;
  }

  removeValue() {
    const current = this.textArea.value;
    const newValue = current.substring(0, current.length - 1);
    this.textArea.value = newValue;
  }

  clearValue() {
    this.textArea.value = '';
  }
}
